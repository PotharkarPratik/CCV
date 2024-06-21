pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "mainbulding.jpg",
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
setTimeout(function() {
    alert('*Immerse yourself in our campus experience !*.Just click on the image once, then use your arrow keys or your fingerstips to rotate the view. It like you right there exploring the campus !! ');
  }, 2000);