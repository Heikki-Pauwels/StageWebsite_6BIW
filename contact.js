ducoment.addEventListener("submit", function (event) {
    // Voorkomt dat het verzend
    event.preventDefault();

    // Haal de waarde van het e-mailinvoerveld op via het ID 'email'
    const emailInput = document.getElementById("email");
    const emailValue = emailInput ? emailInput.value : "";

    // Toon de gevraagde melding met het ingevulde e-mailadres
    alert("Bevestiging van ontvangst gestuurd naar: " + emailValue);
})