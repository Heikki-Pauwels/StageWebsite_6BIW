document.addEventListener("submit", function (event) {
    // Voorkom dat de pagina herlaadt
    event.preventDefault();

    // Haal de waarde van het e-mailinvoerveld op via getElementById
    const emailInput = document.getElementById("email");
    const emailAdres = emailInput ? emailInput.value : "";

    // bevestigingstekst
    const bevestigingsText = "Bevestiging van ontvangst gestuurd naar: " + emailAdres;

    // Zoek de submit-knop
    const submitKnop = document.querySelector("input[type='submit']");

    // Zet de tekst op de knop
        submitKnop.value = bevestigingsText;
});