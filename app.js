const myArray = ['@@EIGE##', '@@OEDE##', '@@MFHG##', '@@BGRE##', '@@CDEW##', '@@PLOI##', '@@VGFR##', '@@XSEW##', '@@PLOI##', '@@MNHY##', '@@TREW##', '@@CDES##', '@@SEWA##', '@@CDSX##', '@@CDER##', '@@ILKJ##', '@@POIU##', '@@KJHG##', '@@GHJK##', '@@FVBH##', '@@BGTR##', '@@LOIK##', '@@HHGG##', '@@CCXX##', '@@EREW##', '@@PPOO##', '@@NNHH##', '@@RRSS##', '@@SSRR##', '@@KKJJ##',];
var rendtxt = myArray[~~(Math.random() * myArray.length)];
const textArea = document.createElement('textarea');
textArea.textContent = rendtxt;
document.getElementById("riaz").innerHTML = rendtxt;
function copyFunction() {
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    button.innerText = "Text copied";
    textArea.remove();
}
document.getElementById('button').addEventListener('click', copyFunction);