document.addEventListener("submit", function (event) {
    // Voorkom het herladen van de pagina
    event.preventDefault();
    // Haal de waarde van het e-mailinvoerveld op via ID
    const emailInput = document.getElementById("email").value;
    // Nieuwe tekst voor de button
    const bevestingsText = "Bevestiging van ontvangst gestuurd naar: " + emailInput
    // Nieuwe tekst toepassen
    document.getElementById("submit").value = bevestingsText
})