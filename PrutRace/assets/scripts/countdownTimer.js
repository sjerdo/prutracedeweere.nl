// Set the date we're counting down to
var countDownDate = new Date("July 13, 2024 00:00:00");
var countDownTimestamp = countDownDate.getTime();
var year = countDownDate.getFullYear();
var registrationEnabled = true;

// Update the count down every second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownTimestamp - now;

    var registrationPageButton = document.getElementById("inschrijfPagineBtn");

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("inschrijfTekst").innerHTML = "Inschrijven voor Prutrace de Weere " + year + " is gesloten." + "<br>" + "Inschrijven voor Prutrace de Weere " + (year + 1) + " is momenteel nog niet mogelijk. ";

        if (registrationPageButton) {
            registrationPageButton.innerHTML = "Inschijving is gesloten";
        }
    } else if (!registrationEnabled) {
        clearInterval(x);
        document.getElementById("inschrijfTekst").innerHTML = "De inschrijving voor Prutrace de Weere " + year + " is nog niet geopend." + "<br>" + "Binnenkort kun je je hier inschrijven voor Prutrace de Weere " + year + "!";
        if (registrationPageButton) {
            registrationPageButton.innerHTML = "Inschijving is nog niet geopend";
        }
    } else {
        document.getElementById("inschrijfTekst").innerHTML = "Inschijving is open";
        if (registrationPageButton) {
            registrationPageButton.classList.remove("disabled");
        }

        var checkboxElement = document.getElementById('checkbox');
        if (checkboxElement) {
            checkboxElement.disabled = false;
        }
    }
}, 1000);
