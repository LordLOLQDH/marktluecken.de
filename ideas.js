const MARKTLUECKEN_IDEAS = [
  {id:'toskana',title:'Toskana-Limonade',tag:'Essen & Getränke · Toskana',description:'Eine regionale Limonade als lokale Alternative zu klassischen Softdrinks.',longDescription:'Regionale Zutaten und lokale Produktion könnten daraus eine eigenständige Marke machen.'},
  {id:'ebike',title:'E-Bike-Akku-Tauschstationen',tag:'Mobilität',description:'Stationen, an denen leere E-Bike-Akkus schnell gegen geladene Akkus getauscht werden.',longDescription:'Ein Netz an Radwegen könnte lange Touren deutlich einfacher machen.'},
  {id:'fruehstueck',title:'Frühstück für Frühreisende',tag:'Reisen & Hotels',description:'Hotels könnten Gästen mit sehr früher Abreise ein Frühstückspaket mitgeben.',longDescription:'Ein einfacher Vorabend- oder Frühservice würde eine häufige Lücke schließen.'},
  {id:'sitzplaetze',title:'Mehr Sitzplätze in Innenstädten',tag:'Stadt & Alltag',description:'Flexible Sitzmöglichkeiten für Menschen, die beim Einkaufen oder Warten Pause machen möchten.',longDescription:'Gut platzierte Sitzinseln könnten Innenstädte zugänglicher machen.'},
  {id:'retoure',title:'Retoure-Abholung im Wohnviertel',tag:'Onlinehandel',description:'Ein Abholservice könnte Retouren mehrerer Nachbarn gesammelt zur Post bringen.',longDescription:'Gebündelte Wege sparen Zeit und machen Rücksendungen bequemer.'},
  {id:'werkzeug',title:'Werkzeug-Bibliothek',tag:'Nachbarschaft',description:'Eine lokale Leihstation für selten benötigtes Werkzeug.',longDescription:'Leihen statt Kaufen spart Geld, Platz und Ressourcen.'},
  {id:'abendessen',title:'Mini-Supermarkt für ein einzelnes Abendessen',tag:'Einzelhandel',description:'Ein kleiner Laden oder Automat bietet Zutaten in passenden Mengen für ein Gericht.',longDescription:'Portionsgrößen für Einzelpersonen könnten spontane Einkäufe vereinfachen.'},
  {id:'regenschirm',title:'Regenschirm-Verleih',tag:'Stadt & Alltag',description:'Leihschirme an Bahnhöfen und Innenstadt-Standorten.',longDescription:'Rückgabe an einer anderen Station macht den Service flexibel.'},
  {id:'pflanzen',title:'Pflanzen-Sitting in der Nachbarschaft',tag:'Service',description:'Eine Plattform vermittelt Pflanzenpflege während des Urlaubs.',longDescription:'Lokale Hilfe könnte unkompliziert und günstig organisiert werden.'},
  {id:'schluessel',title:'Lokaler Schlüssel-Finder',tag:'Alltag',description:'Ein sicheres System ordnet gefundene Schlüssel anonym einem Besitzer zu.',longDescription:'Ein Code könnte Finder und Besitzer verbinden, ohne private Daten offenzulegen.'},
  {id:'minipotion',title:'Kleine Portionen auf Abruf',tag:'Essen & Getränke',description:'Restaurants könnten Mini-Portionen aus vorhandenen Zutaten anbieten.',longDescription:'Das schafft Probiermöglichkeiten und kann Lebensmittelverschwendung reduzieren.'},
  {id:'parkplatz',title:'Private Parkplätze auf Zeit',tag:'Mobilität',description:'Private Stellplätze werden angeboten, wenn sie gerade ungenutzt sind.',longDescription:'Zeitbasierte Vermittlung könnte vorhandenen Parkraum besser nutzen.'},
  {id:'spielzeug',title:'Spielzeug-Flatrate',tag:'Familie',description:'Familien tauschen Spielzeug regelmäßig statt immer Neues zu kaufen.',longDescription:'Eine geprüfte Rotationsbox könnte Abwechslung und Nachhaltigkeit verbinden.'},
  {id:'bueroessen',title:'Büro-Mittagessen nach Wunsch',tag:'Arbeit',description:'Teams sammeln Mittagswünsche und lösen automatisch Sammelbestellungen aus.',longDescription:'Lokale Anbieter erhalten planbare Bestellungen.'},
  {id:'koffer',title:'Koffer-Vorabendservice',tag:'Reisen',description:'Gepäck wird am Vorabend abgeholt und sicher zum Bahnhof oder Flughafen gebracht.',longDescription:'Frühe Abreisen würden dadurch deutlich entspannter.'},
  {id:'ladegeraet',title:'Ladegerät-Verleih in Hotels',tag:'Reisen & Technik',description:'Hotels verleihen universelle Ladegeräte und Kabel gegen Pfand.',longDescription:'Vergessene Technik könnte so schnell ersetzt werden, ohne einen Neukauf.'},
  {id:'waschmaschine',title:'Gemeinsame Waschmaschinen auf Abruf',tag:'Wohnen',description:'Freie Waschmaschinen in Wohnhäusern werden digital buchbar.',longDescription:'Eine gemeinsame Belegung könnte Wartezeiten und Streit vermeiden.'},
  {id:'schuhe',title:'Schuh-Reparatur mit Abholung',tag:'Nachhaltigkeit',description:'Kaputte Schuhe werden abgeholt, repariert und zurückgebracht.',longDescription:'Bequeme Abholung könnte Reparaturen attraktiver machen.'},
  {id:'buecher',title:'Bücher-Tauschbox mit App',tag:'Kultur',description:'Eine App zeigt, welche Bücher in lokalen Tauschboxen verfügbar sind.',longDescription:'Aus einzelnen Boxen könnte ein lokales Tauschnetz entstehen.'},
  {id:'warteschlange',title:'Digitale Warteschlange für kleine Geschäfte',tag:'Service',description:'Kunden stellen sich aus der Ferne an und kommen erst kurz vor ihrem Aufruf.',longDescription:'Das spart Wartezeit und hilft kleinen Geschäften bei der Planung.'}
];

const GENERATOR_CONCEPTS = [
 ['Verleihstation','Freizeit'],['Testbox','Technik'],['Kurzzeit-Abo','Alltag'],['Abholstation','Service'],['Tauschbörse','Nachhaltigkeit'],['Notfallstation','Alltag'],['Sammelservice','Service'],['Kurzzeit-Buchung','Service'],['Leihbox','Nachbarschaft'],['Expressservice','Service'],['Probierpass','Einkaufen'],['Gemeinschaftspool','Nachbarschaft'],['Tagespass','Freizeit'],['Mini-Markt','Einzelhandel'],['Rettungsbox','Nachhaltigkeit'],['Wunsch-Abo','Alltag'],['Schnellcheck','Service'],['Wochenend-Test','Technik'],['Zeitbörse','Nachbarschaft'],['Gemeinschaftsfach','Wohnen'],['Mobile Station','Stadt & Alltag'],['Reservierungsservice','Service'],['Saisonbox','Freizeit'],['Restebörse','Nachhaltigkeit'],['Kurzzeit-Miete','Wohnen'],['Sammelabholung','Service'],['Erlebnisbox','Freizeit'],['Tauschpass','Nachbarschaft'],['Testtag','Einkaufen'],['Leihnetz','Nachbarschaft']
];
const GENERATOR_CONTEXTS = [
 ['für Pendler','Mobilität & Arbeit'],['für Familien','Familie'],['für kleine Haushalte','Wohnen'],['für Reisende','Reisen'],['für kleine Vereine','Vereine'],['für lokale Geschäfte','Handel']
];
const GENERATOR_SUBJECTS = [
 'Campingausrüstung','Fahrradzubehör','Picknickzubehör','Sportgeräte','Werkzeuge','Küchengeräte','Party-Ausstattung','Büroausstattung','Reisezubehör','Kinderzubehör','Gartengeräte','Fototechnik','Audioequipment','Kreativmaterial','Schulmaterial','Haushaltsgeräte','Mehrwegbehälter','Verpackungsmaterial','Outdoorbekleidung','Winterausrüstung','Strandzubehör','Wanderausrüstung','Elektronik-Zubehör','Veranstaltungstechnik','Möbel','Lernmaterial','Hobbygeräte','Pflanzenzubehör','Tierbedarf','Alltagshelfer'
];

let generatedIndex = 0;
for (const [concept, tag] of GENERATOR_CONCEPTS) {
  for (const [context, contextTag] of GENERATOR_CONTEXTS) {
    const subject = GENERATOR_SUBJECTS[generatedIndex % GENERATOR_SUBJECTS.length];
    const id = `idea-${String(generatedIndex + 21).padStart(3,'0')}`;
    const title = `${concept} ${subject} ${context}`;
    MARKTLUECKEN_IDEAS.push({
      id,
      title,
      tag: `${tag} · ${contextTag}`,
      description: `Ein lokales Angebot rund um ${subject.toLowerCase()} ${context}, das heute oft unnötig kompliziert oder gar nicht verfügbar ist.`,
      longDescription: `Daraus könnte ein einfaches, lokal buchbares Modell entstehen: Bedarf digital anzeigen, passende Ausstattung oder Leistung kurzfristig nutzen und danach zurückgeben. Gerade ${context} könnten davon profitieren, weil keine dauerhafte Anschaffung nötig wäre.`
    });
    generatedIndex++;
  }
}

// Genau 200 Einträge sicherstellen.
MARKTLUECKEN_IDEAS.length = 200;
