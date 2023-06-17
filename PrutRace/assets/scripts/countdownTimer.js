// Set the date we're counting down to
var countDownDate = new Date("July 8, 2023 00:00:00");
var countDownTimestamp = countDownDate.getTime();
var year = countDownDate.getFullYear();
var registrationEnabled = true;

// Update the count down every second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownTimestamp - now;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("inschrijfTekst").innerHTML = "Inschrijven voor Prutrace de Weere " + year + " is gesloten." + "<br>" + "Inschrijven voor Prutrace de Weere " + (year + 1) + " is momenteel nog niet mogelijk. ";
        document.getElementById("inschijfPagineBtn").innerHTML = "Inschijving is gesloten";
    } else if (!registrationEnabled) {
        clearInterval(x);
        document.getElementById("inschrijfTekst").innerHTML = "De inschrijving voor Prutrace de Weere " + year + " is nog niet geopend." + "<br>" + "Binnenkort kun je je hier inschrijven voor Prutrace de Weere " + year + "!";
        document.getElementById("inschijfPagineBtn").innerHTML = "Inschijving is nog niet geopend";
    } else {
        document.getElementById("inschrijfTekst").innerHTML = "Inschijving is open";
        document.getElementById("inschijfPagineBtn").classList.remove("disabled");

        var checkboxElement = document.getElementById('checkbox');
        if (checkboxElement) {
            checkboxElement.disabled = false;
        }
    }
}, 1000);
