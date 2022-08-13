const fileInput=document.querySelector("input");
const downloadbtn=document.querySelector("button");
downloadbtn.addEventListener("click",e=>{
    e.preventDefault();//preventing from form submitting
    fetchfile(fileInput.value);
});
function fetchfile(url){
    fetch(url).then(res=>res.blob()).then(file=>{
        let tempUrl=URL.createObjectURL(file);
        let aTag=document.createElement("a");
        aTag.href=tempUrl ;
        aTag.download="filename";
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    });
}