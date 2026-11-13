// Wacht tot de pagina geladen is
window.addEventListener("load", function () {
    const splashScreen = document.getElementById("gifDiv");

    // na hoeveel miliseconden de GIF moet verdwijnen
    setTimeout(function () {
        if (gifDiv) {
            gifDiv.style.display = "none";
        }
    }, 2000); 
});