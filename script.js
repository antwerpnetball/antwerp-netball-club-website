const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  });
});

document.querySelectorAll('.nav-drop-btn').forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const parent = button.closest('.nav-dropdown');
    document.querySelectorAll('.nav-dropdown.open').forEach(item => {
      if (item !== parent) item.classList.remove('open');
    });
    parent.classList.toggle('open');
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.nav-dropdown.open').forEach(item => item.classList.remove('open'));
});

const translations = {
  en: {
    pageTitle:"Antwerp Netball Club", navHome:"Home", navAbout:"About Us", navAboutClub:"Antwerp Netball Club", navDiscover:"Discover Netball", navJoin:"Join Us", navTrainingTimes:"Training Times", navMembership:"Membership",
    navCompetitions:"Competitions", navGames:"Games & Tournaments", navTtc:"TTC 2026/27", navContact:"Contact Us",
    heroEyebrow:"NETBALL IN ANTWERP", heroTitle:"Find your team.<br><span>Find your game.</span>", heroCopy:"A welcoming netball club bringing people together through sport, friendship and fun.",
    heroButton1:"JOIN US", heroButton2:"SEE TRAINING TIMES", heroBadgeTop:"FRIDAYS", heroBadgeBottom:"EVERY OTHER SUNDAY",
    welcomeOne:"ALL LEVELS WELCOME", welcomeOneText:"Beginners and experienced players", welcomeTwo:"FIRST SESSION FREE", welcomeTwoText:"Come and give netball a try",
    welcomeThree:"RECOGNISED CLUB", welcomeThreeText:"Sporting A · 2026–2028", aboutEyebrow:"WELCOME", aboutTitle:"Netball for everyone.",
    aboutLead:"Antwerp Netball Club is a mixed-gender 18+ club bringing together players of all levels, nationalities and fitness levels to enjoy the game, get active and meet new people.",
    aboutText:"Whether you are completely new to netball or already have experience, you are welcome. We are building a friendly community where everyone can learn, play and enjoy the game.",
    welcomingTitle:"Welcoming", welcomingText:"Come as you are. We support beginners and experienced players.", socialTitle:"Social",
    socialText:"More than training — it is about building friendships and community.", activeTitle:"Active", activeText:"Learn the game, improve your skills and have fun while staying active.",
    joinEyebrow:"READY TO PLAY?", joinTitle:"Join the club.", joinLead:"Your first session is free. No previous netball experience is needed.",
    joinText:"Bring comfortable sports clothes, indoor sports shoes and a water bottle. Come along, meet the team and see if netball is for you.",
    membershipButton:"SEE MEMBERSHIP OPTIONS", trainingEyebrow:"COME PLAY", trainingTitle:"Training Times", friday:"FRIDAY", fridayText:"Training & skills",
    locationAntwerp:"Antwerp · KdG Campus Zuid", sunday:"SUNDAY", sundayText:"Training & game play — every other Sunday", venueEyebrow:"HOME VENUE", venueTitle:"KdG Campus Zuid", venueAddress:"Brusselstraat 45<br>2018 Antwerpen", directions:"GET DIRECTIONS", publicTransportTitle:"Public transport", publicTransportText:"Easy to reach by public transport in Antwerp.", facilitiesTitle:"Facilities", facilitiesText:"Sports hall facilities available at KdG Campus Zuid",
    membershipEyebrow:"JOIN US", membershipTitle:"Membership",
    bestValue:"BEST VALUE", fullSeason:"FULL SEASON", perYear:"/ YEAR", seasonDates:"September 2026 – June 2027", sessions:"57 training sessions",
    matches:"7 scheduled matches", registration:"Netball registration", insurance:"Insurance", insuranceTitle:"INSURED THROUGH SPORTIEVAK", insuranceText:"Members are insured against accidents during club activities through Sportievak.", flexible:"FLEXIBLE OPTIONS", semester:"/ semester",
    semesterDates:"September 2026 – January 2027 OR February 2027 – June 2027", month:"/ month", onceOff:"/ one-off training",
    freeFirst:"FREE first session for newcomers", tournamentNote:"Tournament participation fees are not included and are charged separately.",
    gamesEyebrow:"COMPETITIONS", gamesTitle:"Games & Tournaments", gamesIntro:"Antwerp Netball Club participates in friendly games throughout the season and in the Tri-Country Cup (TTC).", friendlyTitle:"Friendly Matches", friendlyBrussels:"Brussels",
    ttcDescription:"The TTC is a small league-style cup competition between clubs from Belgium, the Netherlands and Germany. It has 5 Cup Days, with each participating club hosting one Cup Day, followed by a Finals Day.",
    ttcTitle:"TTC 2026/27 Key Dates", provisionalNote:"", brusselsCup:"Brussels Cup Day",
    antwerpCup:"Antwerp Cup Day", maastrichtCup:"Maastricht Cup Day",
    cologneCup:"Cologne Cup Day", finalsDay:"Finals Day, Maastricht", contactEyebrow:"GET IN TOUCH", contactTitle:"Come play with us.",
    contactText:"Have a question about training, membership or competitions? Get in touch with Antwerp Netball Club.", emailUs:"EMAIL US", emailAria:"Email Antwerp Netball Club", formEyebrow:"READY TO JOIN?", formTitle:"Try netball for free.", formText:"Fill in the form and we’ll get back to you with the next steps for your free first session.", formRequiredNote:"* Required fields", formButton:"SEND", firstNameLabel:"First Name", lastNameLabel:"Last Name", emailLabel:"Email Address", phoneLabel:"Phone Number", experienceLabel:"Have you played netball before?", experienceYes:"Yes", experienceNo:"No", experienceLittle:"A little", interestLabel:"What are you looking for?", interestSocial:"Recreational / social netball", interestCompetitive:"Competitive netball", interestTry:"I just want to try netball", sourceLabel:"How did you hear about Antwerp Netball Club?", sourceFriend:"Friend", sourceGoogle:"Google / Website", sourceOther:"Other", consentText:"I agree that Antwerp Netball Club may use my contact details to contact me about the Try Netball Session and club activities.", formSuccess:"Thank you! We look forward to seeing you at Antwerp Netball Club. 🏐", formError:"Something went wrong. Please try again or email us directly." ,
    getInTouch:"GET IN TOUCH", quickLinks:"QUICK LINKS", footerText:"A growing netball community in Antwerp.",
    navNetball:"What is Netball?", learnNetball:"Discover Netball →",
    primerEyebrow:"DISCOVER NETBALL", primerTitle:"What is netball?",
    primerIntro:"Netball is a fast-paced ball sport played between two teams of seven players on court. Teams work to keep or regain possession, move the ball into the goal circle and score as many goals as possible.",
    compareEyebrow:"NEW TO NETBALL?", compareTitle:"Think korfbal meets basketball", compareIntro:"If you know korfbal or basketball, you already have a good starting point for understanding netball.", compareKorfbalTitle:"Like korfbal", compareKorfbalText:"Passing, movement, teamwork and specific court areas.", compareBasketTitle:"Like basketball", compareBasketText:"A raised goal, scoring, attack and defence.", compareNetballTitle:"But netball is different", compareNetballText:"No dribbling, a three-second rule, seven positions and strict movement areas.",
    historyEyebrow:"A SHORT STORY", historyTitle:"How netball grew", historyIntro:"Netball developed from early forms of women's basketball in the late 19th century. As the game evolved, it developed its own rules, positions and style of play.", history1:"Early forms of women's basketball develop in England.", history2Label:"NETBALL TAKES SHAPE", history2:"The sport develops its own rules and positions.", history3Label:"THE GAME SPREADS", history3:"Netball becomes established in countries around the world.", history4Label:"TODAY", history4:"The international game continues to grow, including across Europe.",
    globalEyebrow:"NETBALL AROUND THE WORLD", globalTitle:"A sport that continues to grow", globalText1:"Netball has strong communities in countries including Australia, New Zealand, England, Jamaica, South Africa, Uganda, Malawi, Singapore, Scotland and Wales, among many others.", globalText2:"The sport is also growing across Europe, including in the Netherlands, France and Germany.", globalText3:"In Belgium, netball is still relatively new — and Antwerp Netball Club is helping introduce the game and build a local netball community in Antwerp.",
    countryAustralia:"Australia", countryNewZealand:"New Zealand", countryEngland:"England", countryJamaica:"Jamaica", countrySouthAfrica:"South Africa", countryUganda:"Uganda", countryMalawi:"Malawi", countrySingapore:"Singapore", countryScotland:"Scotland", countryWales:"Wales",
    mapNote:"Selected netball communities • Europe is continuing to grow", worldMapAria:"World map showing selected netball communities", mapAustralia:"Australia", mapJamaica:"Jamaica", mapEurope:"Europe", mapAfrica:"Africa", mapNewZealand:"New Zealand",
    courtDiagramSrc:"images/court-diagram.svg", courtDiagramAlt:"Diagram of a netball court divided into three thirds and two goal circles", courtEyebrow:"THE NETBALL COURT", courtTitle:"Where the game happens", courtText:"The court is divided into three thirds, with a goal circle at each end. Each position has specific areas of the court where it can move.",
    rulesQuestion:"Want to learn the full rules?", rulesLink:"View the Official World Netball Rules →",
    fact1Title:"3-second passing", fact1Text:"Once you receive the ball, you have three seconds to pass or shoot. Quick decisions keep the game moving.", fact1Tag:"FAST TEAMWORK",
    fact2Title:"Strict non-contact", fact2Text:"Players defend without physical contact, so timing, footwork and anticipation are essential.", fact2Tag:"SMART DEFENCE",
    fact3Title:"Dedicated court areas", fact3Text:"Each position can move only in specific thirds of the court, giving every role a clear tactical job.", fact3Tag:"TACTICAL ROLES",
    fact4Title:"Precision scoring", fact4Text:"Only the Goal Shooter and Goal Attack can score, making shooting accuracy and smart movement crucial.", fact4Tag:"SCORING EXCITEMENT",
    positionsAria:"Netball positions", positionsEyebrow:"EXPLORE THE 7 COURT POSITIONS", positionsHint:"Click any position to explore its role and key strengths.",
    strengthsLabel:"KEY STRENGTHS", courtAreaLabel:"COURT AREA",
    posGSName:"Goal Shooter", posGSSide:"ATTACK", posGSRole:"The main scorer. The GS stays in the attacking circle and turns good team movement into goals.", posGSArea:"Attacking goal third & goal circle",
    posGS1:"Accuracy", posGS2:"Composure", posGS3:"Rebounding",
    posGAName:"Goal Attack", posGASide:"ATTACK", posGARole:"A scoring and attacking link. The GA combines shooting with movement and feeding the circle.", posGAArea:"Centre third, attacking third & goal circle",
    posGA1:"Shooting", posGA2:"Creativity", posGA3:"Feeding",
    posWAName:"Wing Attack", posWASide:"ATTACK", posWARole:"Creates attacking options and delivers the ball into the shooting circle.", posWAArea:"Centre third & attacking third",
    posWA1:"Vision", posWA2:"Passing", posWA3:"Movement",
    posCName:"Centre", posCSide:"MIDCOURT", posCRole:"The engine of the team. The C connects defence and attack and covers a large area of the court.", posCArea:"Centre third & both transverse lines",
    posC1:"Fitness", posC2:"Work rate", posC3:"Decision-making",
    posWDName:"Wing Defence", posWDSide:"DEFENCE", posWDRole:"Pressures the opposing Wing Attack and disrupts the flow of the attacking team.", posWDArea:"Centre third & defensive third",
    posWD1:"Anticipation", posWD2:"Pressure", posWD3:"Footwork",
    posGDName:"Goal Defence", posGDSide:"DEFENCE", posGDRole:"Defends the attacking circle, contests feeds and works with the Goal Keeper to protect the goal.", posGDArea:"Centre third, defensive third & goal circle",
    posGD1:"Reading play", posGD2:"Timing", posGD3:"Versatility",
    posGKName:"Goal Keeper", posGKSide:"DEFENCE", posGKRole:"The last line of defence. The GK protects the goal circle and challenges the opposition shooter.", posGKArea:"Defensive third & goal circle",
    posGK1:"Strength", posGK2:"Positioning", posGK3:"Anticipation"

  },
  nl: {
    pageTitle:"Antwerp Netball Club", navHome:"Home", navAbout:"Over ons", navAboutClub:"Antwerp Netball Club", navDiscover:"Ontdek netbal", navJoin:"Lid worden", navTrainingTimes:"Trainingstijden", navMembership:"Lidmaatschap",
    navCompetitions:"Competities", navGames:"Wedstrijden & tornooien", navTtc:"TTC 2026/27", navContact:"Contact",
    heroEyebrow:"NETBAL IN ANTWERPEN", heroTitle:"Vind je team.<br><span>Vind je spel.</span>", heroCopy:"Een warme netbalclub die mensen samenbrengt door sport, vriendschap en plezier.",
    heroButton1:"LID WORDEN", heroButton2:"BEKIJK TRAININGSTIJDEN", heroBadgeTop:"VRIJDAG", heroBadgeBottom:"OM DE TWEE WEKEN ZONDAG",
    welcomeOne:"IEDEREEN WELKOM", welcomeOneText:"Beginners en ervaren spelers", welcomeTwo:"EERSTE TRAINING GRATIS", welcomeTwoText:"Kom netbal uitproberen",
    welcomeThree:"ERKENDE CLUB", welcomeThreeText:"Sporting A · 2026–2028", aboutEyebrow:"WELKOM", aboutTitle:"Netbal voor iedereen.",
    aboutLead:"Antwerp Netball Club is een gemengde 18+ club die spelers van alle niveaus, nationaliteiten en conditieniveaus samenbrengt om samen van netbal te genieten, actief te zijn en nieuwe mensen te leren kennen.",
    aboutText:"Of je nu helemaal nieuw bent in netbal of al ervaring hebt: iedereen is welkom. We bouwen aan een warme community waar iedereen kan leren, spelen en plezier beleven aan de sport.",
    welcomingTitle:"Welkom", welcomingText:"Kom zoals je bent. We ondersteunen beginners en ervaren spelers.", socialTitle:"Sociaal",
    socialText:"Meer dan training — we bouwen vriendschappen en een community.", activeTitle:"Actief", activeText:"Leer de sport, verbeter je vaardigheden en blijf actief terwijl je plezier maakt.",
    joinEyebrow:"KLAAR OM TE SPELEN?", joinTitle:"Word lid van de club.", joinLead:"Je eerste training is gratis. Ervaring met netbal is niet nodig.",
    joinText:"Breng comfortabele sportkleding, indoorsportschoenen en een drinkfles mee. Kom langs, ontmoet het team en ontdek of netbal iets voor jou is.",
    membershipButton:"BEKIJK LIDMAATSCHAPSOPTIES", trainingEyebrow:"KOM SPELEN", trainingTitle:"Trainingstijden", friday:"VRIJDAG", fridayText:"Training & vaardigheden",
    locationAntwerp:"Antwerpen · KdG Campus Zuid", sunday:"ZONDAG", sundayText:"Training & wedstrijdspel — om de twee weken", venueEyebrow:"THUISLOCATIE", venueTitle:"KdG Campus Zuid", venueAddress:"Brusselstraat 45<br>2018 Antwerpen", directions:"ROUTE PLANNEN", publicTransportTitle:"Openbaar vervoer", publicTransportText:"Gemakkelijk bereikbaar met het openbaar vervoer in Antwerpen.", facilitiesTitle:"Faciliteiten", facilitiesText:"Sporthalfaciliteiten beschikbaar op KdG Campus Zuid",
    membershipEyebrow:"LID WORDEN", membershipTitle:"Lidmaatschap",
    bestValue:"BESTE KEUZE", fullSeason:"VOLLEDIG SEIZOEN", perYear:"/ JAAR", seasonDates:"September 2026 – juni 2027", sessions:"57 trainingen",
    matches:"7 geplande wedstrijden", registration:"Netbalregistratie", insurance:"Verzekering", insuranceTitle:"VERZEKERD VIA SPORTIEVAK", insuranceText:"Leden zijn via Sportievak verzekerd tegen ongevallen tijdens clubactiviteiten.", flexible:"FLEXIBELE OPTIES", semester:"/ semester",
    semesterDates:"September 2026 – januari 2027 OF februari 2027 – juni 2027", month:"/ maand", onceOff:"/ losse training",
    freeFirst:"EERSTE TRAINING GRATIS VOOR NIEUWKOMERS", tournamentNote:"Deelnamekosten voor tornooien zijn niet inbegrepen en worden afzonderlijk aangerekend.",
    gamesEyebrow:"COMPETITIES", gamesTitle:"Wedstrijden & tornooien", gamesIntro:"Antwerp Netball Club neemt deel aan vriendschappelijke wedstrijden doorheen het seizoen en aan de Tri-Country Cup (TTC).", friendlyTitle:"Vriendschappelijke wedstrijden", friendlyBrussels:"Brussel",
    ttcDescription:"De TTC is een kleine competitie in bekerformaat tussen clubs uit België, Nederland en Duitsland. Er zijn 5 Cup Days, waarbij elke deelnemende club één Cup Day organiseert, gevolgd door een Finals Day.",
    ttcTitle:"Belangrijke data TTC 2026/27", provisionalNote:"", brusselsCup:"Brussels Cup Day",
    antwerpCup:"Antwerp Cup Day", maastrichtCup:"Maastricht Cup Day",
    cologneCup:"Cologne Cup Day", finalsDay:"Finals Day, Maastricht", contactEyebrow:"CONTACT", contactTitle:"Kom met ons spelen.",
    contactText:"Heb je een vraag over training, lidmaatschap of competities? Neem contact op met Antwerp Netball Club.", emailUs:"MAIL ONS", emailAria:"Mail Antwerp Netball Club", formEyebrow:"KLAAR OM MEE TE DOEN?", formTitle:"Probeer netbal gratis.", formText:"Vul het formulier in en we nemen contact met je op over je eerste gratis training.", formRequiredNote:"* Verplichte velden", formButton:"VERSTUREN", firstNameLabel:"Voornaam", lastNameLabel:"Achternaam", emailLabel:"E-mailadres", phoneLabel:"Telefoonnummer", experienceLabel:"Heb je al netbal gespeeld?", experienceYes:"Ja", experienceNo:"Nee", experienceLittle:"Een beetje", interestLabel:"Wat zoek je?", interestSocial:"Recreatief / sociaal netbal", interestCompetitive:"Competitief netbal", interestTry:"Ik wil gewoon netbal proberen", sourceLabel:"Hoe heb je Antwerp Netball Club gevonden?", sourceFriend:"Vriend", sourceGoogle:"Google / Website", sourceOther:"Andere", consentText:"Ik ga ermee akkoord dat Antwerp Netball Club mijn contactgegevens mag gebruiken om mij te contacteren over mijn eerste training en clubactiviteiten.", formSuccess:"Bedankt! We kijken ernaar uit je te verwelkomen bij Antwerp Netball Club. 🏐", formError:"Er ging iets mis. Probeer opnieuw of mail ons rechtstreeks.",
    getInTouch:"CONTACT", quickLinks:"SNELLE LINKS", footerText:"Een groeiende netbalcommunity in Antwerpen.",
    navNetball:"Wat is netbal?", learnNetball:"Ontdek netbal →",
    primerEyebrow:"ONTDEK NETBAL", primerTitle:"Wat is netbal?",
    primerIntro:"Netbal is een snelle balsport die wordt gespeeld tussen twee teams van zeven spelers op het veld. Teams proberen balbezit te behouden of te heroveren, de bal naar de doelcirkel te brengen en zoveel mogelijk doelpunten te maken.",
    compareEyebrow:"MAAK KENNIS MET NETBAL", compareTitle:"Denk aan korfbal meets basketbal", compareIntro:"Als je korfbal of basketbal kent, heb je al een goed vertrekpunt om netbal te begrijpen.", compareKorfbalTitle:"Zoals bij korfbal", compareKorfbalText:"Passen, bewegen, samenwerken en vaste speelzones.", compareBasketTitle:"Zoals bij basketbal", compareBasketText:"Een verhoogde ring, scoren, aanvallen en verdedigen.", compareNetballTitle:"Maar netbal is anders", compareNetballText:"Geen dribbelen, een regel van drie seconden, zeven posities en duidelijke speelzones.",
    historyEyebrow:"EEN KORT VERHAAL", historyTitle:"Hoe netbal groeide", historyIntro:"Netbal ontwikkelde zich uit vroege vormen van vrouwenbasketbal aan het einde van de 19e eeuw. Naarmate het spel evolueerde, ontstonden eigen regels, posities en een eigen speelstijl.", history1:"Vroege vormen van vrouwenbasketbal ontwikkelen zich in Engeland.", history2Label:"NETBAL KRIJGT VORM", history2:"De sport ontwikkelt eigen regels en posities.", history3Label:"HET SPEL VERSPREIDT ZICH", history3:"Netbal krijgt vaste gemeenschappen in landen over de hele wereld.", history4Label:"VANDAAG", history4:"De internationale sport blijft groeien, ook in Europa.",
    globalEyebrow:"NETBAL WERELDWIJD", globalTitle:"Een sport die wereldwijd groeit", globalText1:"Netbal heeft sterke gemeenschappen in landen zoals Australië, Nieuw-Zeeland, Engeland, Jamaica, Zuid-Afrika, Oeganda, Malawi, Singapore, Schotland en Wales, en nog vele andere landen.", globalText2:"De sport groeit ook in Europa, onder meer in Nederland, Frankrijk en Duitsland.", globalText3:"In België is netbal nog relatief nieuw. Antwerp Netball Club helpt de sport hier bekend te maken en bouwt mee aan een lokale netbalcommunity in Antwerpen.",
    countryAustralia:"Australië", countryNewZealand:"Nieuw-Zeeland", countryEngland:"Engeland", countryJamaica:"Jamaica", countrySouthAfrica:"Zuid-Afrika", countryUganda:"Oeganda", countryMalawi:"Malawi", countrySingapore:"Singapore", countryScotland:"Schotland", countryWales:"Wales",
    courtDiagramSrc:"images/court-diagram-nl.svg", courtDiagramAlt:"Diagram van een netbalveld met drie derden en twee doelcirkels", courtEyebrow:"HET NETBALVELD", courtTitle:"Waar het spel wordt gespeeld", courtText:"Het veld is verdeeld in drie derden, met aan beide uiteinden een doelcirkel. Elke positie heeft specifieke zones waarin de speler mag bewegen.",
    mapNote:"Geselecteerde netbalgemeenschappen • Netbal groeit verder in Europa", worldMapAria:"Wereldkaart met geselecteerde netbalgemeenschappen", mapAustralia:"Australië", mapJamaica:"Jamaica", mapEurope:"Europa", mapAfrica:"Afrika", mapNewZealand:"Nieuw-Zeeland", rulesQuestion:"Wil je de volledige regels bekijken?", rulesLink:"Bekijk de officiële regels van World Netball →",
    fact1Title:"3 seconden voor een pass", fact1Text:"Na het ontvangen van de bal heb je drie seconden om te passen of te schieten. Snelle beslissingen houden het spel in beweging.", fact1Tag:"SNEL SAMENSPEL",
    fact2Title:"Strikt non-contact", fact2Text:"Verdedigen gebeurt zonder lichamelijk contact. Timing, voetenwerk en anticipatie zijn daarom belangrijk.", fact2Tag:"SLIM VERDEDIGEN",
    fact3Title:"Vaste speelzones", fact3Text:"Elke positie mag alleen in bepaalde delen van het veld komen. Zo heeft elke rol een duidelijke tactische taak.", fact3Tag:"TACTISCHE ROLLEN",
    fact4Title:"Precisie bij het scoren", fact4Text:"Alleen de Goal Shooter en Goal Attack mogen scoren. Nauwkeurigheid en slimme beweging zijn dus cruciaal.", fact4Tag:"SPANNEND SCOREREN",
    positionsAria:"Netbalposities", positionsEyebrow:"ONTDEK DE 7 POSITIES", positionsHint:"Klik op een positie om de rol en belangrijkste sterke punten te ontdekken.",
    strengthsLabel:"STERKE PUNTEN", courtAreaLabel:"SPEELZONE",
    posGSName:"Goal Shooter", posGSSide:"AANVAL", posGSRole:"De belangrijkste scorer. De GS speelt in de doelcirkel en zet goed samenspel om in doelpunten.", posGSArea:"Aanvalsderde & doelcirkel",
    posGS1:"Nauwkeurigheid", posGS2:"Koelbloedigheid", posGS3:"Rebounds",
    posGAName:"Goal Attack", posGASide:"AANVAL", posGARole:"Een scorende en aanvallende schakel. De GA combineert schieten met beweging en het aanspelen van de cirkel.", posGAArea:"Middenderde, aanvalsderde & doelcirkel",
    posGA1:"Schieten", posGA2:"Creativiteit", posGA3:"Aanspelen",
    posWAName:"Wing Attack", posWASide:"AANVAL", posWARole:"Creëert aanvallende opties en brengt de bal in de doelcirkel.", posWAArea:"Middenderde & aanvalsderde",
    posWA1:"Overzicht", posWA2:"Passen", posWA3:"Beweging",
    posCName:"Centre", posCSide:"MIDDENVELD", posCRole:"De motor van het team. De C verbindt verdediging en aanval en bestrijkt een groot deel van het veld.", posCArea:"Alle drie de derden, maar niet de doelcirkels",
    posC1:"Conditie", posC2:"Werkvermogen", posC3:"Beslissingen nemen",
    posWDName:"Wing Defence", posWDSide:"VERDEDIGING", posWDRole:"Zet de Wing Attack van de tegenstander onder druk en verstoort de opbouw van de aanval.", posWDArea:"Middenderde & verdedigingsderde",
    posWD1:"Anticipatie", posWD2:"Druk zetten", posWD3:"Voetenwerk",
    posGDName:"Goal Defence", posGDSide:"VERDEDIGING", posGDRole:"Verdedigt de doelcirkel, betwist passes en werkt samen met de Goal Keeper om het doel te beschermen.", posGDArea:"Middenderde, verdedigingsderde & doelcirkel",
    posGD1:"Spel lezen", posGD2:"Timing", posGD3:"Veelzijdigheid",
    posGKName:"Goal Keeper", posGKSide:"VERDEDIGING", posGKRole:"De laatste verdedigingslijn. De GK beschermt de doelcirkel en verdedigt tegen de shooter van de tegenstander.", posGKArea:"Verdedigingsderde & doelcirkel",
    posGK1:"Kracht", posGK2:"Positionering", posGK3:"Anticipatie"

  }
};


const positionData = {
  GS: ["posGSName","posGSSide","posGSRole","posGSArea",["posGS1","posGS2","posGS3"]],
  GA: ["posGAName","posGASide","posGARole","posGAArea",["posGA1","posGA2","posGA3"]],
  WA: ["posWAName","posWASide","posWARole","posWAArea",["posWA1","posWA2","posWA3"]],
  C:  ["posCName","posCSide","posCRole","posCArea",["posC1","posC2","posC3"]],
  WD: ["posWDName","posWDSide","posWDRole","posWDArea",["posWD1","posWD2","posWD3"]],
  GD: ["posGDName","posGDSide","posGDRole","posGDArea",["posGD1","posGD2","posGD3"]],
  GK: ["posGKName","posGKSide","posGKRole","posGKArea",["posGK1","posGK2","posGK3"]]
};

function updatePosition(position) {
  const lang = localStorage.getItem("antwerpNetballLanguage") || "en";
  const dictionary = translations[lang] || translations.en;
  const data = positionData[position];
  if (!data) return;

  document.getElementById("position-badge").textContent = position;
  document.getElementById("position-name").textContent = dictionary[data[0]];
  document.getElementById("position-side").textContent = dictionary[data[1]];
  document.getElementById("position-role").textContent = dictionary[data[2]];
  document.getElementById("position-area-text").textContent = dictionary[data[3]];
  document.getElementById("position-strengths").innerHTML =
    data[4].map(key => `<span>${dictionary[key]}</span>`).join("");

  document.querySelectorAll(".position-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.position === position);
  });
}

document.querySelectorAll(".position-tab").forEach(btn => {
  btn.addEventListener("click", () => updatePosition(btn.dataset.position));
});

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.title = dictionary.pageTitle;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dictionary[key] !== undefined) el.innerHTML = dictionary[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.dataset.i18nAria;
    if (dictionary[key] !== undefined) el.setAttribute("aria-label", dictionary[key]);
  });
  document.querySelectorAll("[data-i18n-src]").forEach(el => {
    const key = el.dataset.i18nSrc;
    if (dictionary[key] !== undefined) el.setAttribute("src", dictionary[key]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.dataset.i18nAlt;
    if (dictionary[key] !== undefined) el.setAttribute("alt", dictionary[key]);
  });
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  localStorage.setItem("antwerpNetballLanguage", lang);
  const active = document.querySelector(".position-tab.active");
  if (active) updatePosition(active.dataset.position);
}

document.querySelectorAll(".lang-btn").forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
setLanguage(localStorage.getItem("antwerpNetballLanguage") || "en");


// Website Try Netball form submission
const tryNetballForm = document.getElementById("tryNetballForm");
const formStatus = document.getElementById("formStatus");

if (tryNetballForm) {
  tryNetballForm.addEventListener("submit", () => {
    const lang = localStorage.getItem("antwerpNetballLanguage") || "en";
    const dictionary = translations[lang] || translations.en;
    const submitButton = tryNetballForm.querySelector("button[type='submit']");

    submitButton.disabled = true;
    submitButton.textContent = lang === "nl" ? "VERZENDEN…" : "SENDING…";
    formStatus.className = "form-status";
    formStatus.textContent = "";

    // The form posts to the Apps Script web app in a hidden iframe.
    // Give Google a moment to receive the submission, then show confirmation.
    window.setTimeout(() => {
      formStatus.className = "form-status success";
      formStatus.textContent = dictionary.formSuccess;
      tryNetballForm.reset();
      submitButton.disabled = false;
      submitButton.textContent = dictionary.formButton;
    }, 1200);
  });
}

updatePosition("GS");
