pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "Structural_engineering_lab.jpg",
    "autoLoad": true
});


let poopup = document.getElementById("poopup");
function openpoopup(){
    poopup.classList.add("open-poopup");
}
function closepoopup(){
    poopup.classList.remove("open-poopup");
}