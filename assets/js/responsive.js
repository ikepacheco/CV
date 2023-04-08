const toMove = document.querySelector('#toMove');
const onMove = document.querySelector('#onMove');
var widthMediaPC = window.matchMedia("(max-width: 1279px)")

function reportWindowSize() {
    /*
    var fragment = document.createDocumentFragment();
    if (!widthMediaPC.matches) {
        fragment.append(document.getElementById('toMove'));
        document.getElementById('onMove').append(fragment);
    } else {
        fragment.append(document.getElementById('toMove'));
        document.getElementById('fatherMove').append(fragment);
    }
    */
    //toMove.textContent = window.innerWidth;
}
window.onresize = reportWindowSize;
window.addEventListener('resize', reportWindowSize);


function ShowPDF() {
    var pdfUrl = "assets/pdf/CV-Pacheco.pdf"
    var pdfContainer = document.getElementById("pdf-box-cv");
    var pdfObject = document.getElementById("pdf-object-cv");
    
    pdfObject.setAttribute("src", pdfUrl);
    pdfContainer.style.display = "block";
}
  
  function HidePDF() {
    var pdfContainer = document.getElementById("pdf-box-cv");
    var pdfObject = document.getElementById("pdf-object-cv");
    
    pdfObject.removeAttribute("data");
    pdfContainer.style.display = "none";
}