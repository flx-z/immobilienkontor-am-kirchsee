# Komponenten-Katalog – UX Designer Referenz

---

## Verfügbare Icons (Heroicons Outline)

Folgende Icon-Namen können in Komponenten mit Icon-Feldern verwendet werden.
Verwende ausschließlich Namen aus dieser Liste – keine anderen Werte sind gültig.

| Name | Beschreibung | Passt gut für |
|------|-------------|---------------|
| check | Einfaches Häkchen | Qualität, Erledigt, Bestätigung |
| check-circle | Häkchen im Kreis | Bestätigung, Erfolg, Abgeschlossen |
| check-badge | Verifizierungs-Badge | Zertifiziert, Geprüft, Offiziell |
| star | Stern | Bewertung, Premium, Highlight |
| shield-check | Schild mit Häkchen | Sicherheit, Schutz, Vertrauen |
| beer | Bierkrug | Gastronomie, Bar, Brauerei |
| car | Auto | Fahrschule, Automotive, Transport |
| bike | Fahrrad | Fahrschule, Mobilität, Sport |
| motorbike | Motorrad | Fahrschule, Motorsport, Transport |
| chart-bar | Balkendiagramm | Wachstum, Statistik, Erfolg |
| clock | Uhr | Zeit, Pünktlichkeit, Öffnungszeiten |
| users | Personengruppe | Team, Gemeinschaft, Kunden |
| lightning | Blitz | Schnelligkeit, Energie, Innovation |
| globe | Weltkugel | International, Online, Reichweite |
| heart | Herz | Pflege, Leidenschaft, Gesundheit |
| key | Schlüssel | Zugang, Lösung, Immobilien |
| lock | Schloss | Datenschutz, Sicherheit, Vertraulich |
| award | Pokal/Auszeichnung | Zertifizierung, Preis, Qualität |
| code | Code-Klammern | Technik, Entwicklung, Digital |
| mail | Briefumschlag | E-Mail, Kontakt, Newsletter |
| phone | Telefonhörer | Anruf, Erreichbarkeit, Support |
| settings | Zahnrad | Einstellungen, Service, Technik |
| search | Lupe | Suche, Analyse, Recherche |
| arrow-right | Pfeil rechts | Weiter, CTA, Navigation |
| home | Haus | Startseite, Immobilien, Zuhause |
| map-pin | Standort-Pin | Standort, Adresse, Filiale |
| calendar | Kalender | Termine, Buchung, Planung |
| briefcase | Aktentasche | Business, Beratung, Karriere |
| truck | LKW | Lieferung, Logistik, Transport |
| wrench | Schraubenschlüssel | Handwerk, Reparatur, Wartung |
| scissors | Schere | Handwerk, Friseur, Kreativ |
| building | Gebäude | Immobilien, Unternehmen, Büro |
| camera | Kamera | Fotografie, Medien, Dokumentation |
| chat | Sprechblase | Kommunikation, Beratung, Support |
| document | Dokument | Unterlagen, Verträge, Zertifikate |
| sparkles | Glitzersterne | Premium, Neu, Besonders |
| sun | Sonne | Energie, Outdoor, Positiv |
| fire | Flamme | Heizung, Energie, Beliebt |
| wifi | WLAN | Digital, Konnektivität, Smart |
| euro | €-Symbol | Preis, Finanzen, Kosten |
| paint-brush | Pinsel | Kreativ, Design, Maler |
| academic-cap | Doktorhut | Ausbildung, Expertise, Qualifikation |
| face-smile | Lächelndes Gesicht | Freundlichkeit, Wohlbefinden, Kinder |
| pencil-square | Stift mit Quadrat | Bearbeiten, Planung, Konzept |
| puzzle-piece | Puzzleteil | Lösung, Zusammenarbeit, Konzept |
| rocket | Rakete | Start, Innovation, Wachstum |
| trash | Mülleimer | Entrümpelung, Reinigung, Entsorgung |
| finger-print | Fingerabdruck | Sicherheit, Identität, Zugang |

---

## NavStandard
Kategorie: Navigation
Layout: Horizontale Leiste mit Logo links, Links mittig, CTA-Button rechts
Wirkung: Standard-Navigation für alle Seitentypen. Sticky, mit Hamburger-Menü auf Mobile.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| logo | ✓ | Pfad oder Text | Bildpfad ("/logo.svg") oder Firmenname als Text-Fallback |
| logoAlt | optional | Text | Alt-Text für Logo-Bild |
| links | ✓ | Liste | 3-6 Einträge. Je Eintrag: |
| → label | ✓ | Text | 1-2 Wörter, z.B. "Leistungen" |
| → href | ✓ | URL | z.B. "/leistungen" |
| → dropdown | optional | Liste | 2-5 Unterseiten mit je label + href |
| cta | ✓ | Button | text: 2-4 Wörter, z.B. "Jetzt anfragen" |

Varianten:
- sticky: true oder false (Default: true)

Hinweis: Erstes Link-Element ist immer { label: "Start", href: "/" }. Dropdowns werden bei Hover/Fokus angezeigt. Auf Mobile klappt das Menü als Akkordeon auf.

---

## HeroCentered
Kategorie: Hero
Layout: Vollbreite, Text zentriert, optionales Hintergrundbild mit Overlay
Wirkung: Klassischer, wirkungsvoller Einstieg. Gut für starke Markenbotschaften und Landingpages.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| kicker | optional | Text | 2-4 Wörter, z.B. "Ihr Partner seit 1998" |
| headline | ✓ | Text | 4-8 Wörter, max. 60 Zeichen |
| subline | ✓ | Text | 1-2 Sätze, 80-150 Zeichen |
| primaryCta | ✓ | Button | text: 2-4 Wörter |
| secondaryCta | optional | Button | text: 2-4 Wörter |
| backgroundImage | optional | Bild | src: Bildpfad, overlayOpacity: 0–1 (Default: 0.55) |

Varianten:
- backgroundVariant: "light" oder "dark" (Default: light). Wird backgroundImage gesetzt, übernimmt das Bild den Hintergrund.

Hinweis: overlayOpacity steuert wie stark das Bild abgedunkelt/aufgehellt wird. 0 = Bild voll sichtbar, 1 = komplett verdeckt. Bei Bild-Hintergrund immer hell schreiben lassen (text-inverse).

---

## HeroSplit
Kategorie: Hero
Layout: 50/50 – Text links/rechts, Bild füllt andere Hälfte vollflächig
Wirkung: Moderner, persönlicher Einstieg. Gut für Dienstleister und B2B.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| kicker | ✓ | Text | 2-4 Wörter, z.B. "Seit 1987" |
| headline | ✓ | Text | max. 60 Zeichen |
| subline | ✓ | Text | 1-2 Sätze, maximal 50 - 150 Zeichen |
| primaryCta | ✓ | Button | label: 2-4 Wörter |
| secondaryCta | optional | Button | label: 2-4 Wörter |
| image | ✓ | Bild | Hoch- oder Querformat, mind. 800px breit |

Varianten:
- imagePosition: "left" oder "right" (Default: right)
- imageObjectPosition: CSS-Wert für Bildausschnitt, z.B. "top", "center", "right center" (Default: center)
- backgroundVariant: "light" oder "dark" (Default: light)

---

## AboutSplit
Kategorie: Über uns
Layout: 50/50 – Bild neben Text, mit optionaler Qualifikationsliste
Wirkung: Persönliche Vorstellung von Unternehmen, Team oder Gründer. Schafft Vertrauen durch Bild + Nachweise.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| kicker | optional | Text | 2-4 Wörter, z.B. "Über uns" oder "Seit 2010" |
| headline | ✓ | Text | 4-8 Wörter, max. 60 Zeichen |
| text | ✓ | Text | 2-4 Sätze, 150-300 Zeichen |
| qualifications | optional | Liste | 3-6 Einträge. Je Eintrag: |
| → label | ✓ | Text | 3-8 Wörter, z.B. "IHK-zertifizierter Fachbetrieb" |
| cta | optional | Button | label: 2-4 Wörter, z.B. "Unser Team kennenlernen" |
| image | ✓ | Bild | Hochformat 3:4 oder 4:5, mind. 600px breit |

Varianten:
- imagePosition: "left" oder "right" (Default: left)

Hinweis: Jeder qualifications-Eintrag braucht nur ein label – das Check-Icon wird automatisch gerendert. Kein icon-Prop übergeben. qualifications niemals leer lassen wenn sie befüllt werden. Ohne qualifications wirkt der Block wie ein klassischer About-Textblock.

---

## AboutStats
Kategorie: Über uns
Layout: 2–4 Kennzahlen nebeneinander, zentriert
Wirkung: Schlagkräftige Zahlen auf einen Blick. Zählt beim Einblenden animiert hoch. Ideal um Erfahrung, Größe oder Erfolge zu belegen.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 4-8 Wörter, z.B. "Was uns auszeichnet" |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| stats | ✓ | Liste | 3 oder 4 Einträge. Je Eintrag: |
| → value | ✓ | Zahl | Die Kernzahl, z.B. 15, 500, 98 |
| → label | ✓ | Text | 2-4 Wörter, z.B. "Jahre Erfahrung" |
| → prefix | optional | Text | 1 Zeichen vor der Zahl, z.B. ">" oder "€" |
| → suffix | optional | Text | 1-2 Zeichen nach der Zahl, z.B. "+", "%", "k" |

Varianten:
- backgroundVariant: "light" oder "dark" (Default: light)

Hinweis: Bei 3 Einträgen 3-spaltiges Grid, bei 4 Einträgen 4-spaltiges Grid. Zahlen zählen beim Scrollen animiert hoch. NIEMALS das Gründungsjahr als value verwenden – statt value: 1959 → value: 65, label: "Jahre Erfahrung", suffix: "+". Das Gründungsjahr kann im label erwähnt werden: label: "Jahre seit Gründung 1959".

---

## FeaturesGrid
Kategorie: Leistungen
Layout: 3er- oder 4er-Grid mit Icon-Karten
Wirkung: Kompakte Übersicht von Services oder Vorteilen. Einer der meistgenutzten Blöcke.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 4-8 Wörter, z.B. "Was wir für Sie tun" |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| features | ✓ | Liste | 3, 4, 6 oder 8 Einträge. Je Eintrag: |
| → icon | ✓ | Icon | Siehe Icon-Tabelle – niemals leer lassen |
| → title | ✓ | Text | 2-4 Wörter, z.B. "Persönliche Beratung" |
| → text | ✓ | Text | 1-2 Sätze, 60-120 Zeichen |

Varianten:
- columns: 3 oder 4 (Default: 3)
- variant: "cards" (mit Rahmen + Hintergrund) oder "flat" (ohne Rahmen) (Default: cards)
- backgroundVariant: "light" oder "dark" (Default: light)

Hinweis: Struktur pro Kachel zwingend: Icon → title (fett) → text (klein). Alle drei Felder sind Pflicht – niemals eine Kachel ohne Icon oder ohne beide Textebenen. Anzahl Features sollte durch columns teilbar sein (z.B. 6 bei 3 Spalten) für ein gleichmäßiges Grid.

---

## FeaturesAlternating
Kategorie: Leistungen
Layout: Abwechselnd Bild links/rechts mit Text daneben, vertikal gestapelt
Wirkung: Ausführliche Darstellung einzelner Leistungen oder Produkte. Gut wenn jede Leistung ein eigenes Bild verdient.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 4-8 Wörter |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| features | ✓ | Liste | 2-5 Einträge. Je Eintrag: |
| → title | ✓ | Text | 3-6 Wörter, z.B. "Individuelle Planung" |
| → text | ✓ | Text | 2-4 Sätze, 150-300 Zeichen |
| → image | ✓ | Bild | Querformat 16:10, mind. 800px breit |
| → cta | optional | Link | label: 2-4 Wörter (erscheint als Textlink mit Pfeil) |

Hinweis: Bilder wechseln automatisch die Seite (gerade = links, ungerade = rechts). Kein backgroundVariant – immer light.

---

## ProcessSteps
Kategorie: Leistungen
Layout: Horizontale Schritt-Leiste (Desktop) / Vertikale Timeline (Mobile)
Wirkung: Macht Abläufe und Prozesse transparent. Gut für "So funktioniert's"-Sektionen.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 4-8 Wörter, z.B. "So einfach geht's" |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| steps | ✓ | Liste | 3-5 Einträge. Je Eintrag: |
| → title | ✓ | Text | 2-4 Wörter, z.B. "Erstgespräch buchen" |
| → text | ✓ | Text | 1-2 Sätze, 60-120 Zeichen |
| → number | optional | Zahl | Schrittnummer. Default: automatisch 1, 2, 3… |

Varianten:
- backgroundVariant: "light" oder "dark" (Default: light)

Hinweis: Maximal 5 Schritte empfohlen, da sonst zu eng auf Desktop. Verbindungslinien zwischen den Kreisen werden automatisch gezeichnet.

---

## ContentTextImage
Kategorie: Content
Layout: 50/50 – Text neben Bild
Wirkung: Universeller Content-Block für beliebige Themen. Flexibel einsetzbar.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| kicker | optional | Text | 2-4 Wörter |
| headline | ✓ | Text | 4-10 Wörter, max. 70 Zeichen |
| text | ✓ | Text | 2-4 Sätze, 150-300 Zeichen |
| cta | optional | Button | label: 2-4 Wörter |
| image | ✓ | Bild | Querformat 4:3, mind. 600px breit |

Varianten:
- imagePosition: "left" oder "right" (Default: right)
- backgroundVariant: "light" oder "dark" (Default: light)

---

## ContentParagraph
Kategorie: Content
Layout: Zentrierter Textblock, keine Bilder
Wirkung: Reiner Textblock für Einleitungen, Erklärungen oder Übergänge zwischen Sektionen.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| kicker | optional | Text | 2-4 Wörter |
| headline | optional | Text | 4-8 Wörter |
| text | ✓ | Text | 2-6 Sätze, 150-500 Zeichen |

Varianten:
- align: "center" oder "left" (Default: center)
- maxWidth: "sm" (~600px), "md" (~768px), "lg" (~900px) (Default: md)
- backgroundVariant: "light" oder "dark" (Default: light)
- headingLevel: 1, 2 oder 3 (Default: 2)

Hinweis: Ideal als Einleitung vor einem Feature-Grid oder als Übergang zwischen zwei größeren Blöcken. Kein Bild, kein CTA – wer beides braucht, nimmt ContentTextImage. Pflichtkomponente für Impressum- und Datenschutzseiten – dort ausschließlich diese Komponente für den Seiteninhalt verwenden, Text vollständig und unverändert aus dem Research-Output übernehmen.

---

## CTABanner
Kategorie: CTA
Layout: Schmaler Banner – Text links, Button(s) rechts (split) oder alles zentriert (centered)
Wirkung: Klarer Handlungsaufruf zwischen oder am Ende von Sektionen. Auffällig durch Hintergrundfarbe.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | ✓ | Text | 4-10 Wörter, max. 70 Zeichen |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| primaryCta | ✓ | Button | label: 2-4 Wörter |
| secondaryCta | optional | Button | label: 2-4 Wörter |

Varianten:
- backgroundVariant: "primary" (Markenfarbe), "dark" (dunkel), "light" (hell mit Rand) (Default: primary)
- layout: "split" (Text links, Buttons rechts) oder "centered" (alles mittig) (Default: split)

---

## ContactSplit
Kategorie: Kontakt
Layout: 50/50 – Kontaktdaten + optionale Karte links, Formular rechts
Wirkung: Vollständige Kontaktsektion mit Formular. Gibt dem Nutzer alle Infos und eine direkte Aktion.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 3-6 Wörter, z.B. "So erreichen Sie uns" |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| contactInfo | optional | Objekt | Eines oder mehrere der folgenden Felder: |
| → address | optional | Text | Straße, PLZ Ort (mehrzeilig mit \n möglich) |
| → phone | optional | Text | Telefonnummer als lesbarer String |
| → email | optional | Text | E-Mail-Adresse |
| → hours | optional | Text | Öffnungszeiten, z.B. "Mo–Fr: 9–17 Uhr" |
| mapEmbed | optional | URL | Google Maps Embed-URL für eingebettete Karte |
| formAction | optional | URL | Ziel-URL für Formularversand (Default: "#") |

Varianten:
- backgroundVariant: "light" oder "dark" (Default: light)

Hinweis: Das Formular enthält fest: Name, E-Mail, Telefon (optional), Nachricht + Datenschutz-Hinweis. Felder können nicht konfiguriert werden. Wenn mapEmbed gesetzt ist, darf auf dieser Seite keine eigenständige EmbedMap-Komponente verwendet werden.

---

## FooterStandard
Kategorie: Footer
Layout: 4-spaltiges Grid – Logo/Beschreibung/Social + bis zu 2 Link-Spalten + Kontakt. Untere Zeile mit Copyright + Legal-Links.
Wirkung: Vollständiger Seitenabschluss mit Navigation, Kontakt und rechtlichen Pflichtlinks.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| logo | optional | Objekt | src: Bildpfad, alt: Alt-Text, text: Firmenname als Fallback |
| description | optional | Text | 1-2 Sätze, 80-150 Zeichen |
| columns | optional | Liste | 1-2 Spalten. Je Spalte: headline (1-2 Wörter) + links (3-6 Einträge mit label + href) |
| contact | optional | Objekt | address, phone, email (alle optional) |
| socialLinks | optional | Liste | Plattformen: instagram, facebook, linkedin, youtube, tiktok, xing, twitter. Je Eintrag: platform + href |
| legalLinks | ✓ | Liste | Mind. 2 Einträge: z.B. "Impressum", "Datenschutz". Je Eintrag: label + href |
| copyright | ✓ | Text | z.B. "© 2025 Muster GmbH. Alle Rechte vorbehalten." |

Varianten:
- backgroundVariant: "dark" (sehr dunkel) oder "surface" (mittelgrau) (Default: dark)

Hinweis: Spalten + Kontakt füllen das 4-spaltige Grid. Bei nur 1 Spalte + Kontakt sieht es gut aus. Ohne columns und contact bleibt nur die Logo-Spalte sichtbar.

---

## AwardsCertifications
Kategorie: Trust & Social Proof
Layout: Grid mit Siegel-/Logo-Bildern, optional mit Label
Wirkung: Zeigt Zertifikate, Auszeichnungen oder Partnerlogos. Schafft Vertrauen durch visuelle Nachweise.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 4-8 Wörter, z.B. "Unsere Zertifizierungen" |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| items | ✓ | Liste | 3-8 Einträge. Je Eintrag: |
| → src | ✓ | Bild | Siegel/Logo, max. 120×120px, transparenter Hintergrund empfohlen |
| → alt | ✓ | Text | Beschreibung des Siegels, z.B. "TÜV-zertifiziert" |
| → label | optional | Text | 2-4 Wörter als Beschriftung unter dem Bild |

Varianten:
- columns: 3, 4 oder 5 (Default: 4)
- background: true (surface-Hintergrund) oder false (weißer Hintergrund) (Default: true)

Hinweis: Bilder werden in Originalfarben angezeigt (keine Graustufen). Ideal für TÜV-Siegel, ISO-Zertifikate, Partnerlogos. Alle vorhandenen Items vollständig übernehmen – nie nur eine Auswahl.

---

## BlogPreview
Kategorie: Content
Layout: 3-spaltiges Karten-Grid mit Thumbnail, Datum, Kategorie, Titel und Teaser
Wirkung: Zeigt Blogbeiträge oder News-Artikel als Vorschau. Gut für Startseiten oder Blog-Übersichtsseiten.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 4-8 Wörter, z.B. "Aktuelle Beiträge" |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| posts | ✓ | Liste | 3 oder 6 Einträge (für gleichmäßiges Grid). Je Eintrag: |
| → image | ✓ | Bild | 16:9, mind. 600px breit |
| → title | ✓ | Text | 5-10 Wörter (wird auf 2 Zeilen begrenzt) |
| → date | ✓ | Text | z.B. "15. März 2025" |
| → teaser | ✓ | Text | 2-3 Sätze, 100-200 Zeichen (wird auf 3 Zeilen begrenzt) |
| → href | ✓ | URL | Link zum Artikel |
| → category | optional | Text | 1-2 Wörter, z.B. "News", "Ratgeber" |
| cta | optional | Button | label: 2-4 Wörter, z.B. "Alle Beiträge" |

---

## ComparisonTable
Kategorie: Preise
Layout: Vergleichstabelle mit Spalten und Zeilen, eine Spalte hervorhebbar
Wirkung: Klare Gegenüberstellung von Paketen oder Leistungen. Funktioniert auch ohne Preise.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 4-8 Wörter, z.B. "Unsere Pakete im Vergleich" |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| columns | ✓ | Liste | 2-4 Spalten. Je Eintrag: title (1-3 Wörter), highlighted (optional, eine Spalte) |
| rows | ✓ | Liste | 5-12 Zeilen. Je Eintrag: label (1-5 Wörter) + values: pro Spalte entweder true/false (zeigt ✓/✗) oder kurzer Text (1-3 Wörter) |
| ctas | optional | Buttons | 1 Button pro Spalte, je 2-3 Wörter |

Varianten:
- backgroundVariant: "light" oder "dark" (Default: light)

Hinweis: Auf Mobile horizontal scrollbar. Mindestens 2 Spalten nötig, max. 4 empfohlen.

---

## ContentFullscreenImage
Kategorie: Content
Layout: Vollbreites Bild mit optionalem Text-Overlay
Wirkung: Visuell starke Trennung zwischen Sektionen. Kann auch rein dekorativ ohne Text genutzt werden.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| image | ✓ | Bild | Querformat, mind. 1400px breit |
| headline | optional | Text | 3-7 Wörter (weiß auf Overlay) |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| cta | optional | Button | label: 2-4 Wörter |

Varianten:
- overlayOpacity: 0, 20, 40 oder 60 (Schwarz-Overlay in %, Default: 0). Bei Text mindestens 40 verwenden.
- contentAlign: "left", "center" oder "right" (Default: center)
- height: "sm" (400px), "md" (600px), "lg" (800px), "fullscreen" (100vh) (Default: md)

Hinweis: Ohne headline/subline/cta rein dekoratives Trennbild. Mit Text: overlayOpacity auf 40-60 setzen für Lesbarkeit.

---

## ContentGalleryGrid
Kategorie: Content / Galerie
Layout: Gleichmäßiges quadratisches Bild-Grid mit Lightbox
Wirkung: Zeigt viele Bilder kompakt nebeneinander. Mit Lightbox zum Vergrößern.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 4-8 Wörter |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| images | ✓ | Liste | 6-12 Einträge. Je Eintrag: src + alt |

Varianten:
- columns: 3 oder 4 (Default: 3)
- lightbox: true oder false – Klick öffnet Bild groß mit Navigation (Default: true)

Hinweis: Anzahl Bilder sollte durch columns teilbar sein. Bilder werden im quadratischen Seitenverhältnis dargestellt.

---

## ContentGalleryLarge
Kategorie: Content / Galerie
Layout: 1 großes Bild links (2/3), 2-3 kleine Bilder rechts (1/3) gestapelt
Wirkung: Redaktionelle Galerie-Ansicht. Hebt das wichtigste Bild hervor.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 4-8 Wörter |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| images | ✓ | Liste | 3-4 Einträge. Erstes Bild = Hauptbild, Rest = kleine Bilder rechts. Je Eintrag: src + alt |

Varianten:
- lightbox: true oder false (Default: true)

Hinweis: Genau 3 Bilder empfohlen (1 groß + 2 klein). Bei 4 Bildern werden 3 kleine gestapelt.

---

## ContentGallerySlider
Kategorie: Content / Galerie
Layout: Vollbreiter Bild-Slider im 16:9-Format mit Pfeilen und Dot-Navigation
Wirkung: Zeigt Bilder nacheinander. Gut für Referenzen, Räume, Produkte in Sequenz.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 4-8 Wörter |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| images | ✓ | Liste | 3-10 Einträge. Je Eintrag: src + alt |

Varianten:
- autoplay: true oder false (Default: false)
- autoplayInterval: Millisekunden, z.B. 4000 (Default: 4000)

Hinweis: Touch/Swipe auf Mobile unterstützt. Bei autoplay: Slider pausiert bei Hover.

---

## ContentQuote
Kategorie: Content
Layout: Zentriertes Zitat mit großem dekorativem Anführungszeichen, optionales Autorenbild
Wirkung: Hebt ein wichtiges Zitat hervor. Gut als Trennung zwischen Sektionen oder als Testimonial-Einzel-Highlight.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| quote | ✓ | Text | 1-3 Sätze, 80-200 Zeichen |
| name | optional | Text | Vor- und Nachname des Zitatgebers |
| role | optional | Text | 2-5 Wörter, z.B. "Geschäftsführerin, Muster GmbH" |
| image | optional | Bild | Quadratisch, wird als Kreis dargestellt, mind. 100×100px |

Varianten:
- backgroundVariant: "light" oder "dark" (Default: light)

---

## ContentVideo
Kategorie: Content
Layout: Video-Player im 16:9-Format mit Thumbnail und Play-Button
Wirkung: Bettet YouTube oder Vimeo Videos ein. Lädt das Video erst bei Klick (performance-freundlich).

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 4-8 Wörter |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| videoUrl | ✓ | URL | YouTube- oder Vimeo-URL (youtu.be, youtube.com, vimeo.com) |
| thumbnail | ✓ | Bild | 16:9, mind. 1200px breit – wird bis zum Klick angezeigt |

Varianten:
- backgroundVariant: "light" oder "dark" (Default: light)

Hinweis: Video startet automatisch nach Klick auf Play-Button. Unterstützt YouTube-Shorts-URLs und Vimeo.

---

## EmbedBooking
Kategorie: Embed
Layout: iFrame-Embed im dedizierten Container
Wirkung: Bettet externes Buchungssystem ein (Calendly, Bookingkit, Planday etc.).

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| embedUrl | ✓ | URL | Embed-URL des Buchungssystems |
| headline | optional | Text | 3-6 Wörter, z.B. "Termin online buchen" |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |

Varianten:
- height: "sm" (500px), "md" (700px), "lg" (900px), "auto" (min. 600px) (Default: md)

Hinweis: Nur einsetzen wenn auf der Bestandswebsite bereits ein Buchungssystem vorhanden ist. Niemals neu einführen wenn es bisher keines gab.

---

## EmbedMap
Kategorie: Embed
Layout: Vollbreite Google Maps Einbettung
Wirkung: Zeigt den Standort des Unternehmens interaktiv auf einer Karte.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| embedUrl | ✓ | URL | Google Maps Embed-URL mit konkreter Firmenadresse |
| headline | optional | Text | 3-6 Wörter, z.B. "So finden Sie uns" |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |

Varianten:
- height: "sm" (300px), "md" (450px), "lg" (600px) (Default: md)
- borderRadius: true oder false (Default: true)
- bordered: true oder false – fügt Rahmen hinzu (Default: false)

Hinweis: embedUrl muss die konkrete Firmenadresse enthalten – Format: https://maps.google.com/maps?q=[Adresse URL-encoded]&z=16&output=embed. Niemals Dummy-URL oder ungenaue Ortsangabe. Maximal einmal pro Seite verwenden. Wenn auf derselben Seite ContactSplit mit mapEmbed verwendet wird, darf EmbedMap nicht eingesetzt werden.

---

## EmbedSocial
Kategorie: Embed / Social Media
Layout: Reihe oder Grid mit Social-Media-Icon-Buttons
Wirkung: Verlinkt alle Social-Media-Kanäle des Unternehmens. Gut im Footer-Bereich oder als eigene Sektion.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 3-6 Wörter, z.B. "Folgen Sie uns" |
| subline | optional | Text | 1 Satz |
| links | ✓ | Liste | 1-7 Einträge. Je Eintrag: platform + href. Plattformen: instagram, facebook, linkedin, youtube, tiktok, xing, twitter |

Varianten:
- layout: "row" (nebeneinander) oder "grid" (4-spaltig) (Default: row)
- size: "sm", "md" oder "lg" – Icon-Größe (Default: md)
- useOriginalColors: true (Markenfarben) oder false (Primärfarbe) (Default: false)
- backgroundVariant: "light" oder "dark" (Default: light)

Hinweis: Einsetzen wenn social-Links im Research-Output vorhanden sind. Ausschließlich Kanäle verwenden die tatsächlich existieren – keine erfinden oder hinzufügen.

---

## FAQAccordion
Kategorie: Content
Layout: Vertikale Liste mit aufklappbaren Frage-Antwort-Paaren
Wirkung: Beantwortet häufige Fragen kompakt. Gut für Support, Preisseiten und Angebotsseiten.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 3-6 Wörter, z.B. "Häufig gestellte Fragen" |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| items | ✓ | Liste | 4-10 Einträge. Je Eintrag: |
| → question | ✓ | Text | 5-12 Wörter als vollständige Frage |
| → answer | ✓ | Text | 2-5 Sätze, 100-400 Zeichen |

Varianten:
- allowMultiple: true (mehrere Antworten gleichzeitig offen) oder false (immer nur eine) (Default: false)
- backgroundVariant: "light" oder "dark" (Default: light)

---

## NewsletterBanner
Kategorie: CTA
Layout: Schmaler Banner – Text links, E-Mail-Formular rechts
Wirkung: Newsletter-Anmeldung ohne eigene Seite. Kann zwischen anderen Sektionen platziert werden.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | ✓ | Text | 4-8 Wörter, z.B. "Bleiben Sie auf dem Laufenden" |
| subline | optional | Text | 1 Satz, 60-100 Zeichen |
| placeholder | optional | Text | 2-4 Wörter (Default: "Ihre E-Mail-Adresse") |
| buttonLabel | optional | Text | 1-2 Wörter (Default: "Anmelden") |
| action | optional | URL | Formular-Ziel-URL (Default: "#") |

Varianten:
- backgroundVariant: "light" (surface), "dark" oder "primary" (Markenfarbe) (Default: light)

Hinweis: Kein Datenschutz-Checkbox – es wird nur ein E-Mail-Feld gezeigt. Formular-Integration muss über action-URL erfolgen.

---

## PortfolioGrid
Kategorie: Referenzen
Layout: 2- oder 3-spaltiges Bild-Grid mit Hover-Overlay (Titel + Kategorie)
Wirkung: Zeigt Projekte, Referenzen oder Arbeitsproben visuell. Optional mit Kategorie-Filter.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 4-8 Wörter, z.B. "Unsere Referenzen" |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| projects | ✓ | Liste | 4-9 Einträge. Je Eintrag: |
| → image | ✓ | Bild | Querformat 4:3, mind. 600px breit |
| → title | ✓ | Text | 2-6 Wörter |
| → category | ✓ | Text | 1-2 Wörter, z.B. "Wohnbau", "Gewerbe" |
| → href | optional | URL | Link zur Projektdetailseite |

Varianten:
- columns: 2 oder 3 (Default: 3)
- filter: true (zeigt Kategorie-Filter-Buttons) oder false (Default: false)

Hinweis: Bei filter=true werden Kategorie-Filter automatisch aus den vorhandenen Kategorien generiert. Kategorie-Namen konsistent halten.

---

## StickyCTABar
Kategorie: CTA / Utility
Layout: Fixierter Banner am unteren Bildschirmrand
Wirkung: Dauerhaft sichtbarer CTA der nach dem Scrollen einblendet. Nur für starke einzelne Conversion-Ziele.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| text | ✓ | Text | 5-12 Wörter, z.B. "Jetzt kostenloses Erstgespräch buchen" |
| cta | ✓ | Button | label: 2-4 Wörter |

Varianten:
- showAfterScroll: Pixel-Scrolltiefe ab der der Banner einblendet (Default: 400)
- dismissible: true (Schließen-Button) oder false (Default: true)

Hinweis: Da NavStandard bereits sticky ist und einen CTA enthält, ist StickyCTABar in den meisten Fällen redundant. Nur einsetzen wenn es einen starken einzelnen Conversion-Grund gibt der über die Nav hinausgeht (z.B. 24/7 Notdienst, zeitlich begrenztes Angebot). Im Zweifel weglassen. Immer in Primärfarbe. Kein backgroundVariant. Nur einmal pro Seite.

---

## TeamGrid
Kategorie: Team
Layout: 3- oder 4-spaltiges Karten-Grid mit Foto, Name, Rolle, optionaler Bio
Wirkung: Stellt das Team persönlich vor. Schafft Vertrauen durch echte Gesichter.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 4-8 Wörter, z.B. "Das Team hinter dem Unternehmen" |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| members | ✓ | Liste | 3-8 Einträge. Je Eintrag: |
| → image | ✓ | Bild | Quadratisch 1:1, Porträtfoto mit Fokus oben, mind. 400×400px |
| → name | ✓ | Text | Vor- und Nachname |
| → role | ✓ | Text | 2-5 Wörter, z.B. "Geschäftsführerin" |
| → bio | optional | Text | 1-2 Sätze, 60-120 Zeichen |

Varianten:
- columns: 3 oder 4 (Default: 3)

Hinweis: Nur Personen eintragen die explizit im Research-Output mit Name und Rolle erwähnt werden. Keine Mitarbeiter oder Positionen erfinden. Fotos werden quadratisch mit object-top ausgeschnitten. Bei weniger members als columns werden die Karten zentriert dargestellt.

---

## TestimonialCards
Kategorie: Trust & Social Proof
Layout: 2- oder 3-spaltiges Karten-Grid mit Zitat, Autor, optionaler Sternbewertung
Wirkung: Kundenstimmen als visuelle Karten. Einer der wichtigsten Vertrauensblöcke.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 4-8 Wörter, z.B. "Was unsere Kunden sagen" |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| testimonials | ✓ | Liste | 3 oder 6 Einträge. Je Eintrag: |
| → quote | ✓ | Text | 2-4 Sätze, 100-300 Zeichen |
| → name | ✓ | Text | Vor- und Nachname des Kunden |
| → role | ✓ | Text | 2-5 Wörter, z.B. "Privatkundin aus München" |
| → image | optional | Bild | Quadratisch, wird als Kreis dargestellt, mind. 80×80px |
| → rating | optional | Zahl | 1-5 (zeigt Sterne in Sekundärfarbe) |

Varianten:
- columns: 2 oder 3 (Default: 3)

Hinweis: Ohne image wird automatisch ein farbiger Kreis mit dem Anfangsbuchstaben des Namens angezeigt. Alle vorhandenen Testimonials vollständig übernehmen – nie nur eine Auswahl.

---

## Timeline
Kategorie: Über uns
Layout: Vertikale Zeitachse mit abwechselnd links/rechts versetzten Karten (Desktop)
Wirkung: Zeigt die Geschichte oder Entwicklung eines Unternehmens chronologisch. Gut für "Über uns"-Seiten.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 4-8 Wörter, z.B. "Unsere Geschichte" |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| items | ✓ | Liste | 3-8 Einträge. Je Eintrag: |
| → year | ✓ | Text/Zahl | Jahr oder Zeitraum, z.B. "2010" oder "2015–2018" |
| → title | ✓ | Text | 3-6 Wörter, z.B. "Gründung des Unternehmens" |
| → text | ✓ | Text | 2-4 Sätze, 80-250 Zeichen |

Hinweis: Kein backgroundVariant – immer light. Karten wechseln auf Desktop automatisch die Seite. Auf Mobile vertikale Timeline links.

---

## TrustBadges
Kategorie: Trust & Social Proof
Layout: Reihe oder Grid mit Icon-Karten, je Icon + Kennzahl + Label
Wirkung: Kompakte Vertrauenssignale mit Icon. Gut direkt unterhalb des Heroes oder vor einem CTA.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 3-6 Wörter, klein und in Caps, z.B. "Warum uns wählen" |
| badges | ✓ | Liste | 3-6 Einträge. Je Eintrag: |
| → icon | ✓ | Icon | Siehe Icon-Tabelle – niemals leer lassen |
| → value | optional | Text | Kennzahl als String, z.B. "500+", "4,9 ★" – wird fett über dem Label angezeigt |
| → label | ✓ | Text | 2-5 Wörter, z.B. "Zufriedene Kunden" |

Varianten:
- layout: "row" (nebeneinander, flexibel) oder "grid" (festes 3-4-spaltiges Grid) (Default: row)

Hinweis: Struktur pro Badge zwingend: Icon → value (fett, optional) → label (klein). Erlaubte Inhalte: Vertrauenssignale, Zertifikate, Erfahrungswerte, Kundenzahlen, Bewertungen. NIEMALS: Öffnungszeiten, Telefonnummern, Adressen oder sonstige Kontaktdaten. Immer auf surface-Hintergrund. Kein backgroundVariant.

---

## TrustLogos
Kategorie: Trust & Social Proof
Layout: Horizontale Reihe mit Kundenlogos oder Partnerlogos
Wirkung: "Bekannt aus" oder "Unsere Partner" – etabliert Vertrauen durch bekannte Namen/Marken.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | optional | Text | 3-6 Wörter, klein in Caps, z.B. "Unsere Kunden" oder "Bekannt aus" |
| logos | ✓ | Liste | 4-8 Einträge. Je Eintrag: src + alt |
| → src | ✓ | Bild | Logo mit transparentem Hintergrund (PNG/SVG), Höhe ca. 40px |
| → alt | ✓ | Text | Firmenname des Logos |

Varianten:
- grayscale: true (Logos grau, Hover zeigt Farbe) oder false (Originalfarben) (Default: true)

Hinweis: Immer auf surface-Hintergrund. Kein backgroundVariant. Alle vorhandenen Partner-Logos vollständig übernehmen – nie nur eine Auswahl. Weniger Padding als andere Sektionen – bewusst kompakt gehalten.

---

## CookieBanner
Kategorie: Utility
Layout: Fixierter Banner am unteren Bildschirmrand
Wirkung: DSGVO-konformer Cookie-Consent. Zeigt sich beim ersten Besuch, merkt sich die Entscheidung dauerhaft.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| text | ✓ | Text | 1-2 Sätze, 80-160 Zeichen. Erklärt Cookie-Nutzung kurz. |
| privacyLink | ✓ | Link | label: 1-3 Wörter (z.B. "Datenschutzerklärung"), href: URL zur Datenschutzseite |
| acceptLabel | optional | Text | 1-3 Wörter (Default: "Alle akzeptieren") |
| declineLabel | optional | Text | 1-3 Wörter (Default: "Nur notwendige") |

Hinweis: Kein backgroundVariant. Erscheint automatisch beim Seitenaufruf wenn noch keine Entscheidung getroffen wurde. Entscheidung wird im localStorage gespeichert. Nur einmal pro Seite verwenden.

---

## PageHeader
Kategorie: Navigation / Utility
Layout: Schmaler Header-Bereich mit Seitentitel, optionaler Subline und Breadcrumb-Navigation
Wirkung: Einheitlicher Seitenkopf für Unterseiten (Leistungen, Kontakt, Blog etc.). Direkt nach der NavStandard platzieren.

| Feld | Pflicht | Typ | Richtwert |
|------|---------|-----|-----------|
| headline | ✓ | Text | 2-6 Wörter (Seitenname), z.B. "Unsere Leistungen" |
| subline | optional | Text | 1 Satz, 60-120 Zeichen |
| breadcrumbs | optional | Liste | 2-4 Einträge. Je Eintrag: label (1-3 Wörter) + href (optional, letzter Eintrag ohne href) |

Varianten:
- backgroundVariant: "light" (hell mit Unterstrich), "dark" (dunkelgrau), "primary" (Markenfarbe) (Default: light)

Hinweis: Immer als erste Sektion nach NavStandard auf Unterseiten verwenden. Ersetzt keinen Hero – ist schmaler und weniger prominent.
