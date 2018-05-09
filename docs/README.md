# Project Deep Green
[Pflichtenheft](https://deep-green.github.io/deep-green/)

### Beschreibung
Mit Hilfe von Deep Green kann man Brettspiele (z.B. Schach, Dame etc.) konfigurieren und ausführen und als Spieler oder Zuschauer teilnehmen.
Es ist möglich, sowohl gegen einen realen Spieler, als auch gegen eine KI zu spielen.
Die Bedienung des Spiels ist über diverse Eingabegeräte (Smartphones, Desktop-PCs, Spracheingabe z.B. Google Home) möglich.
Die initiale Spielsituation auf den Spielflächen kann über Kamera eingelesen werden.
Die Darstellung für die Spieler und Zuschauer des Spiels findet sowohl über Display-Geräte (das umfasst auch VR), als auch über Audio statt.
Es gibt die Möglichkeit, Zuschauer zuzulassen, bzw. als Zuschauer ein Spiel zu beobachten.
Es gibt die Möglichkeit, sich zu registrieren oder als Gastspieler an einem Spiel teilzunehmen.
Für registrierte Spieler gibt es ein System, das gleichstarke Spieler gegeneinander spielen lässt.

## Frontend

### Desktop (Nicola)
Eingabe: GUI über Tastatur und Maus
Ausgabe: GUI

### Mobil (Nicola evtl.)
Eingabe: GUI über Touch
Ausgabe: GUI

### Web (Nicola evtl.)
Eingabe: GUI über Tastatur und Maus
Ausgabe: 

### Spielfeld Snapshots / Bilderkennung (Torsten)
Eingabe: Bild über zu definierende Schnittstelle
Ausgabe: über andere Frontend-Parts gelöst

### Sprache / Google Home (Julien, Alex, Max)
Eingabe: Sprache
Ausgabe: Sprache

## Backend
- Serverbasiert

### Logik (Tobias, Hendrik)
- Verarbeitet eingehende Spielereingaben
- wendet die Spiellogik auf die Spielereingaben an
- informiert das Frontend über Änderungen der Spielsituation

### Datenbank (siehe Team Sprachsteuerung)
- hält Userdaten
- ordnet Spiele den Usern zu
- hält für jedes Spiel eine Historie vor

### KI (Patrick, Marti, Luis, Phillip)
- ist als Spieler verwendbar
- ihre Spielkompetenz ist einstellbar

### Webserver (Tobias, Hendrik)
- Bereitstellung von Webassembly-Paketen(?)
- leitet Anfragen an das Backend weiter

### SchnittstelleN (alle)
- Kommunikation von Client mit Backend
- diverse / noch zu definieren
