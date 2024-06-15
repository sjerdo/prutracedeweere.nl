<!doctype html>
<html lang="nl">

<?php include "./assets/components/head.phtml" ?>

<body>

  <div class="masthead clearfix">
    <?php include "./assets/components/nav.phtml" ?>
  </div>

  <div class="site-wrapper">
    <div class="site-wrapper-inner">

      <div class="cover-container">

        <div id="inschrijven" class="inner cover">

          <h2 class="cover-heading">Inschrijven</h2>

          <p id="inschrijfTekst" class="lead">...</p>

          <p class="lead">
            <label><input type="checkbox" id="checkbox" onchange="document.getElementById('inschrijfBtn').disabled = !this.checked;" disabled/> Ik ga akkoord met het regelement / de voorwaarden </label>
          </p>

          <p class="lead">
            <button type="button" id="inschrijfBtn" class="btn btn-lg btn-default" onclick="window.location='https://totaltiming.inschrijven.nl/form/2024071351424-nl';" disabled> Schijf mij maar in! </button>
          </p>

          <div class="parent-container">
            <ul class="faq">
              <li>

                <h3 class="question">Regelement / Voorwaarden
                  <div class="plus-minus-toggle collapsed"></div>
                </h3>

                <div class="answer">

                  <h4>1. Je bent 14 jaar of ouder of wordt het jaar van de prutrace 14 jaar oud</h4>
                  <p>Deelname door deelnemers jonger dan boven beschreven vinden we als organisatie te gevaarlijk.</p>

                  <h4>2. Je moet kunnen zwemmen</h4>
                  <p>Een aantal sloten zijn niet doorwaadbaar.</p>

                  <h4>3. Het is verboden te duiken</h4>
                  <p>De meeste sloten zijn te ondiep om in te duiken. De meeste mensen weten niet in welke sloten je wel of niet kunt duiken. Het is onsportief van degenen die wel weten in welke sloten je kunt duiken of die een goede duiktechniek hebben daar een voordeel uit halen. Het is ook een slecht voorbeeld voor mensen die dat niet kunnen maar toch gaan doen (er doen ook kinderen mee).</p>

                  <h4>4. Je moet schoenen dragen tijdens de wedstrijd</h4>
                  <h5>4a. Spikes zijn verboden</h5>
                  <p>Joggingschoenen met noppen en voetbalschoenen zijn zeer geschikt. Maak je schoenen ook extra stevig vast want de prut in sloot “zuigt” aan je schoenen. Als je wel een schoen verloren bent ga dan voorzichtig wandelend verder. We hebben de sloten doorzocht op scherpe voorwerpen. Door de vele mensen die door sloot gaan kunnen er “nieuwe” scherpe voorwerpen boven komen. Daarnaast kun je je ook lelijk snijden aan de rietstengels in sloot en op de wal.</p>

                  <h4>5. Je moet op ‘t parcours blijven</h4>
                  <p>Buiten het parcours is niet gecontroleerd. Er kunnen paaltjes onder water staan. Er kunnen scherpe voorwerpen in sloot liggen. Ook in de weilanden kunnen zaken liggen die gevaarlijk zijn zoals prikkeldraad.</p>

                  <h4>6. Je moet de aanwijzingen van de organisatie opvolgen</h4>
                  <p>Als de organisatie aanwijzingen geeft is dat voor de veiligheid van u of anderen. Mogelijk ook voor de sportiviteit.</p>

                  <h4>7. Laat het parcours intact</h4>
                  <p>Neem geen stokken en linten mee. Het parcours moet voor de veiligheid van de volgende deelnemers intact blijven.</p>

                  <h4>8. Laat het aanwezige vee op het parcours met rust</h4>
                  <p>De dieren in de weilanden gaan soms rennen omdat ze de aanwezigheid van zoveel mensen, die ook nog eens rennen, niet gewend zijn. Ga ze dan niet extra verstoren maar negeer ze. De dieren kunnen zich verwonden als ze in paniek raken.</p>

                  <h4>9. Je staat toe dat er foto's van jou tijdens de race zichtbaar worden gesteld</h4>
                  <p>Tijdens de race worden er foto's gemaakt door vrijwilligers. Deze foto's worden dan ook openbaar zichtbaar gemaakt op o.a. social media.</p>

                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mastfoot">
    <div class="inner">
      <?php include "./assets/components/foot.html" ?>
    </div>
  </div>

  <script src="/assets/scripts/countdownTimer.js" type="text/javascript"></script>
  <script src="/assets/scripts/inschrijven.js" type="text/javascript"></script>
</body>

</html>
