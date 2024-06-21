pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "fluid_&_mechanics.jpg",
    "autoLoad": true
});


let poopup = document.getElementById("poopup");
function openpoopup(){
    poopup.classList.add("open-poopup");
}
function closepoopup(){
    poopup.classList.remove("open-poopup");
}