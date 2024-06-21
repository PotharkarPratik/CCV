pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "Readinghall.jpg",
    "autoLoad": true
});

let popup = document.getElementById("popup");
function openpopup(){
    popup.classList.add("open-popup");
}
function closepopup(){
    popup.classList.remove("open-popup");
}
let poopup = document.getElementById("poopup");
function openpoopup(){
    poopup.classList.add("open-poopup");
}
function closepoopup(){
    poopup.classList.remove("open-poopup");
}