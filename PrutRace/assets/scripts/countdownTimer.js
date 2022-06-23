// Set the date we're counting down to
var countDownDate = new Date("July 9, 2022 19:00:00");
var countDownTimestamp = countDownDate.getTime();
var year = countDownDate.getFullYear();
var registrationEnabled = false;

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownTimestamp - now;

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("inschrijfTekst").innerHTML = "Inschrijven voor Prutrace de Weere " + year + " is gesloten." + "<br>" + "Inschrijven voor Prutrace de Weere " + (year + 1) + " is momenteel nog niet mogelijk. " ;
        document.getElementById("inschrijfBtn").innerHTML = "Inschijving is gesloten";
    } else if (!registrationEnabled) {
        clearInterval(x);
        document.getElementById("inschrijfTekst").innerHTML = "De inschrijving voor Prutrace de Weere " + year + " is nog niet geopend." + "<br>" + "Binnenkort kun je je hier inschrijven voor Prutrace de Weere " + year + "!" ;
        document.getElementById("inschrijfBtn").innerHTML = "Inschijving is gesloten";
    } else {
        document.getElementById("inschrijfTekst").innerHTML = "Inschijving is open";
        $("#inschijfPagineBtn").removeClass("disabled");
        document.getElementById('checkbox').disabled = false;
    }
}, 1000);
