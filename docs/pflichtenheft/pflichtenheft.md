# Anforderungs- und Entwurfsspezifikation ("Pflichtenheft")

## Deep Green - Another Chess Game

### Beteiligte Autoren

* Tobias Koppmann
* Marti Stuwe
* Alexander Scharow
* Torsten Niemeier
* Patrick Reinke

## 1 Einführung

### 1.1 Beschreibung

Deep Green - Another Chess Game

Die Software "Deep Green" lässt das klassische Schachspiel wieder aufleben.
Dabei macht die Software es möglich, gegen menschliche und KI-Gegner anzutreten.
Neben dem einfach zugänglichen schnellen Spiel, existiert auch eine Möglichkeit, über ein Benutzersystem erweiterte Funktionen zu nutzen.
Zu den erweiterten Funktionen gehören zum Beispiel das speichern von Spielen, der Eintrag in einer Rangliste und die Nutzung eines Matchmaking-Systems bei der Suche nach Online-Gegenspielern.
Zusätzlich gibt es die Möglichkeit an Spielen als Zuschauer teilzunehmen.
Unter Nutzung einer Cloud-Infrastruktur ist es möglich auf zahlreichen Endgeräten und zu jeder Zeit gegeneinander zu spielen.
Unter anderem wird dabei neben visuellen Ein-/Ausgabegeräten auch Sprachein-/ausgabe für das Spiel mit dem eigenen, klassischen Spielbrett bereit gestellt.
Die Übernahme einer definierten Spielsituation von einem realen Spielbrett, ist mit Hilfe eines Foto-Uploads und darauf angewendeter Bilderkennung möglich.

### 1.2 Ziele

    - Anwendungsbereiche, Motivation, Umfang, Marktanforderungen, Alleinstellungsmerkmale
    - Informationen zu Zielbenutzergruppen und deren Merkmale (Bildung, Erfahrung, Sachkenntnis)
    - Abgrenzung (Was ist das Softwaresystem _nicht_)

## 2 Anforderungen

### 2.1 Funktionale Anforderungen

* Benutzer kann Schach spielen
* Gegen Menschen spielbar
* Gegen KI spielbar
* Über Desktop spielbar
* Über Smartphone spielbar
* Über Voice Assistant spielbar
* Benutzer kann sich registrieren
* Als Gast spielbar

### 2.2 Use Cases

#### 2.2.1 Startseite
![usecase_start](/images/usecases/deep-green_start.png "Startseite")

#### 2.2.2 Hauptmenü
![usecase_hauptmenu](/images/usecases/deep-green_hauptmenu.png "Hauptmenü")

#### 2.2.3 Stellungseditor (Abzweig aus 'Neues Spiel starten')
![usecase_stellung](/images/usecases/deep-green_stellungseditor.png "Stellungseditor")

#### 2.2.4 Im Spiel (ohne Sprachsteuerung)
![usecase_ingame](/images/usecases/deep-green_ingame.png "Im Spiel")

#### 2.2.5 Im Spiel (Sprachsteuerung)
![usecase_voice](/images/usecases/deep-green_ingameVoice.png "Sprachsteuerung")

### 2.2 Nicht-funktionale Anforderungen

* Kamera kann initiale Spielsituation erstellen
* Benutzer kann Spielen zusehen

#### 2.2.1 Rahmenbedingungen

    - Normen, Standards, Protokolle, Hardware, externe Vorgaben

#### 2.2.2 Betriebsbedingungen

    - Vorgaben des Kunden (z.B. Web Browser / Betriebssystem Versionen, Programmiersprache)

#### 2.2.3 Qualitätsmerkmale

    - Externe Qualitätsanforderungen (z.B. Performance, Sicherheit, Zuverlässigkeit, Benutzerfreundlichkeit)

### 2.3 Graphische Benutzerschnittstelle

#### 2.3.1 Desktop

![Hauptmenü und Login](/images/Mockups/Login_MainMenue.png "Hauptmenü und Login")

![Neues Spiel - Teil 1](/images/Mockups/Neues_Spiel.png "Neues Spiel")

![Neues Spiel - Teil 2](/images/Mockups/Neues_Spiel_2.png "Neues Spiel")

![Spiel laden - Teil 1](/images/Mockups/Spiel_Laden.png "Spiel laden")

![Spiel laden - Teil 2](/images/Mockups/Spiel_Laden_2.png "Spiel laden")

![Spielbrett](/images/Mockups/Spielbrett.png "Spielbrett")

![Zuschauer](/images/Mockups/Zuschauen.png "Zuschauer")

### 2.4 Anforderungen im Detail

    - User Stories mit Akzeptanzkritierien
    - Optional: Name (oder ID) und Priorität ("Muss", "Soll", "Kann")

#### 2.4.1 Frontend

| **Name**| **Als**...|   ...**möchte ich**...   | ..., **sodass**... | **erfüllt wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------
| Spiel starten | Spieler | ein neues Spiel starten können | um das Spiel zu spielen | ich auf dem Spielbrett bin und einen Gegenspieler habe | Must
| Spiel laden | Spieler | ein Spiel laden können | ich es fortsetzen kann | ich das gleiche Spielfeld habe, wie es gespeichert wurde | Must
| Spiel speichern | Spieler | ein Spiel speichern können | ich es zu einem anderen Zeitpunkt fortsetzen kann | der Speicherstand erstellt ist | Must
| Spielzug | Spieler | Spielfiguren bewegen können | ich meinen Spielzug tätige | die gewählte Spielfigur auf einem neuen Feld steht | Must
| Spieler Reihenfolge | Spieler | sehen können, welcher Spieler am Zug ist | ich weiß, wann ich meinen Spielzug tätigen muss | ein Indikator anzeigt, welcher Spieler dran ist | Must
| Spiel aufgeben | Spieler | aufgeben können | ich das Spiel frühzeitig beenden kann | das Spiel als verloren und abgeschlossen gilt | Can
| Spielzug rückgängig | Spieler | Spielzüge gegen die KI rückgängig machen können | ich Fehler beheben und daraus lernen kann | sowohl der Spielzug des Spielers als auch der KI rückgängig gemacht wurde | Can
| Spielfigur austauschen | Spieler | die Bauer-Spielfigur gegen eine andere tauschen, wenn der Bauer die andere Seite des Spielbrettes erreicht | die Regel eingehalten wird | der Bauer eine neue Spielfigur ist und wie diese behandelt wird | Must
| Farbe wählen | Spieler | beim Spielen gegen die KI und zu Beginn des Spiels die Farbe der Spielfiguren wählen können | Spielsituationen üben kann | der Spieler die ausgewählte Farbe (Schwarz oder Weiß) spielt | Can
|Registrieren| Spieler | mich registrieren können | das Matchmaking System nutzen kann | der User angelegt ist und er sich einloggen kann | Must
|Einloggen| Spieler | mich einloggen können | das System mit meinem Account nutzen kann | der User eingeloggt und im Hauptmenü ist | Must
| Gastkonto | Spieler | ein Gastkonto haben | ich ohne Registrierung gegen andere Spieler spielen kann | der User ein Gastkonto mit temporärem Namen hat | Must
| Zuschauen | Zuschauer | einem Spiel zuschauen können |  ich selbst entscheide, was ich sehen kann | der Zuschauermodus geladen wurde und das Spielgeschehen angezeigt wird | Can
| Ausloggen | Spieler | mich mit meinem Account ausloggen können | jemand anderes mit seinem Account spielen kann | der Spieler sich ausloggen kann und wider auf der Startseite ist | Can

#### 2.4.2 Bilderkennung

| **Name**| **Als**...|   ...**möchte ich**...   | ..., **sodass**... | **erfüllt wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------
| Erkennung  |Spieler| dass aus einer Fotografie eines realen Schach- oder Damespiels zuverlässig die Spielsituation erkannt wird|ich ohne umfangreiche Korrekturen mit dem Spiel fortfahren kann| nach der Übertragung des Bildes die erkannte Spielsituation möglichst korrekt und verständlich (siehe Bild 'Schachnotation') dargestellt wird | Must
| Fehler  |Spieler| dass ich bei Unklarheiten bezüglich der Spielerkennung aus einer Fotografie deutlich darauf hingewiesen werde|damit ich sofort eventuelle Korrekturen vornehmen kann| nicht oder unklare Figuren in der erkannten Situation kenntlich gemacht werden | Must
| Korrektur  |Spieler| dass die Korrektur einer erkannten Spielsituation leicht möglich ist|damit ich sofort darauf reagieren kann| eine einfache Korrektur der erkannten Situation leicht möglich ist | Must


![schachnotation](/images/schachnotation.jpg "Schachnotation")

#### 2.4.3 Sprachsteuerung
| **Name**| **Als**... |   ...**möchte ich**...   | ..., **sodass**... | **erfüllt wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------
| Im Hauptmenü |
| Spielstart ansagen | Spieler | durch eine Spracheingabe ein Spiel starten können | ich über die Sprachsteuerung ein neues Spiel starten kann | ich über die Sprachsteuerung ein neues Spiel starten kann | Must
| Gegnertyp ansagen | Spieler | durch eine Spracheingabe beim Starten eines neuen Spieles wählen können, ob der Gegner eine KI oder ein Mensch ist | ich über die Sprachsteuerung meinen Gegnertyp auswählen kann | ich eine Partie gegen den ausgewählten Gegnertyp spiele | Must
| KI Schwierigkeit ansagen | Spieler | durch eine Spracheingabe beim Starten eines neuen Spieles gegen die KI dessen Schwierigkeit einstellen | ich über die Sprachsteuerung die Schwierigkeit der KI einstellen kann | ich eine Partie gegen die KI im ausgewählten Schwierigkeitsgrad spiele | Must
| Farbe ansagen | Spieler | durch eine Spracheingabe beim Starten eines neuen Spieles gegen die KI meine Farbe auswählen können | ich über die Sprachsteuerung meine Farbe auswählen kann bei einem Spiel gegen die KI | ich eine Partie gegen die KI mit meiner ausgewählten Farbe spiele | Must
| Im Spiel |
| Spielstart durchsagen | Spieler | durch eine Sprachausgabe hören, dass mein Spiel begonnen hat | ich über die Sprachausgabe informiert werde, dass mein Spiel begonnen hat | eine Sprachausgabe bestimmt, dass das Spiel angefangen hat | Can
| Spielzug ansagen | Spieler | durch eine Spracheingabe meinen Spielzug machen | über die Sprachsteuerung meinen Zug machen kann | ich über die Sprachsteuerung meinen Zug machen kann und der Gegner am Zug ist | Must
| Feedback durchsagen | Spieler | durch eine Sprachausgabe hören, ob mein Zug gültig ist | ich weiß, dass mein Spielzug gültig ist und akzeptiert wurde | ich nach meinem Spielzug Feedback durchgesagt bekomme | Must
| Gegenerzug durchsagen | Spieler | durch eine Sprachausgabe hören, welchen Zug der Gegner gemacht hat | ich weiß, welchen Zug der Gegner gemacht hat und, dass ich am Zug bin | ich den Gegnerzug durchgesagt bekomme und am Zug bin | Must
| Spielerzug durchsagen | Spieler | durch eine Sprachausgabe hören, welcher Spieler am Zug ist | ich weiß, welcher Spieler am Zug ist | durch eine Sprachausgabe der momentane Spieler bestimmt wird | Must
| Momentanen Spieler abfragen | Spieler | durch eine Spracheingabe erfahren, welcher Spieler am Zug ist | ich über eine Sprachausgabe diese Information gewinnen kann | durch eine Spracheingabe abgefragt werden kann, wer am Zug ist und eine Sprachausgabe die Antwort liefert | Must
| Gegnerzug wiederholen | Spieler | durch eine Spracheingabe den letzten Gegnerzug abfragen | ich die Sprachsteuerung diese Information gewinnen kann | durch eine Spracheingabe der letzte Gegnerzug abgefragt kann und eine Antwort als Sprachausgabe zurückkommt | Must
| Schach(matt) durchsagen | Spieler | durch eine Sprachausgabe hören, ob nach dem Spielzug der andere Spieler schach(matt) gesetzt worden ist | ich über die Sprachausgabe auf diese spielentscheidene Situation hingewiesen werde | nach dem Spielzug eine Sprachausgabe informiert, ob ein Spieler schach(matt) gesetzt worden ist | Must
| Spielende ansagen | Spieler | durch eine Spracheingabe, das Spiel beenden können | ich über die Sprachsteuerung die Partie verlassen kann | das Spiel beendet ist und eine Sprachausgabe mir dieses bestätigt | Must
| Speicherabfrage | Spieler | beim beenden des Spiels gefragt werden, ob ich die Partie speichern möchte wenn kein Spieler verloren hat | ich über eine Spracheingabe bestimmen kann, dass die Partie gespeichert werden soll | beim beenden des Spiels gefragt wird wird, ob das Spiel gespeichert werden soll | Must
| Gewinner durchsagen | Spieler | durch eine Sprachausgabe hören, wer gewonnen hat | ich über den Ausgang den Spiels bescheid weiß | eine Sprachausgabe den Gewinner bestimmt | Must

#### 2.4.4 Backend

| **Name**| **Als**...|   ...**möchte ich**...   | ..., **sodass**... | **erfüllt wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------
|Zug prüfen|Spieler|meine Züge auf Korrektheit geprüft werden|die Spielregeln des Spiels eingehalten werden|die Züge korrekt auf Gültigkeit geprüft werden| Must
|Spielende prüfen|Spieler|die Spielsituation bewertet|das Ende des Spiels (Gewinn/Verlust) erkannt wird|das Spielende korrekt erkannt wird| Must
|Frontend-Kommunikation|Frontend|Nachrichten an das Backend senden und von diesem empfangen|das Backend die Eingaben der Spieler erkennt und weitergibt|eine stabile Schnittstelle implementiert ist| Must

#### 2.4.5 Künstliche Intelligenz

| **Name**| **Als**...|   ...**möchte ich**...   | ..., **sodass**... | **erfüllt wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------
| Gegner | Spieler | gegen einen voll funktionstüchtigen KI-Gegner spielen können | ich mich im Spiel gegen die KI messen kann | eine vollständige Partie gegen die KI gespielt werden kann | Must
| Strategie | Spieler | gegen eine strategisch vorgehende KI spielen können | Spielsituationen entstehen, die auch gegen "echte" Spieler entstehen können | die Strategie der KI über Zufalls-Züge hinaus geht | Must
| Schwierigkeitsgrad | Spieler | die Stärke des KI-Gegners einstellen können | ich die KI an meine Fähigkeiten anpassen kann | drei Schwierigkeitsgrade (Leicht, Mittel, Schwer) existieren | Must
| Schwierigkeitsgrad während eines Spiels | Spieler | während einer Partie gegen die KI den Schwierigkeitsgrad anpassen können | ich, wenn mir die KI zu stark ist, keine neue Partie anfangen muss um den Schwierigkeitsgrad zu verändern | während einer Partie eine Möglichkeit besteht die Schwierigkeit des KI-Gegners zu verändern | Can
| Gegner wechseln | Spieler | eine Partie gegen die KI speichern können | ich die Partie zu einem anderen Zeitpunkt gegen einen "echten" Gegner weiterspielen kann | bei einer gespeicherten Partie das Gegenüber von KI zu "echtem" Gegner gewechselt werden kann | Should

## 3 Technische Beschreibung

### 3.1 Systemübersicht

#### 3.1.1 Systemarchitekturdiagramm

![Systemarchitektur](/images/sysArch.png "Systemarchitektur")

#### 3.1.2 Schnittstellenbeschreibung
##### 3.1.2.1 Backend ←→ KI
Verbindung via [socket.io](#411-allgemein) ([Beispiel](https://github.com/deep-green/ki2)).  

__Emit__
| Channel | Namespace | Data |
|:--------|:----------|:-----|
| getMove | /         | FEN  |

__Listen__
| Channel | Namespace | Data |
|:--------|:----------|:-----|
| getMove | /         | Move |

#### 3.1.3 Kommunikationsprotokolle, Datenformate

__Kommunikationsprotokolle:__
Es gibt zwei gängige Protokolle zur Übermittlung von Daten zwischen Frontend und Backend.
- _CECP - Chess Engine Communication Protocol_
- _UCI - Universal Chess Interface_

__Datenformate:__
Als relevante Datenformate werden die gängigen Standards für Schachsoftware verwendet.
- _FEN - Forsyth-Edwards Notation_ zur Darstellung der Spielsituation auf einem Spielbrett
- _Elo Zahlen_ zur Klassifizierung der Spieler nach ihrer Stärke

### 3.2 Softwarearchitektur

#### 3.2.1 Softwarearchitekturdiagramm

![Softwarearchitektur](/images/swarch.png "Softwarearchitektur")

#### 3.2.2 Google Assistant Strukturdiagramm

![googleAssistantStrukturdiagramm](/images/googleAssistantStrukturdiagramm.png "Google Assistant Strukturdiagramm")

### 3.3 Datenmodell

    - Konzeptionelles Analyseklassendiagramm

### 3.4 Abläufe

#### 3.4.1 Zustandsdiagramm

![zustands](/images/Zustand_deep_green.png "Zustandsdiagramm")

    - Aktivitätsdiagramme für relevante Use Cases
    - Aktivitätsdiagramm für den Ablauf sämtlicher Use Cases

### 3.5 Entwurf

    - Detaillierte UML-Diagramme für relevante Softwarebausteine

## 4 Projektorganisation

### 4.1 Annahmen

    - Nicht durch den Kunden definierte spezifische Annahmen, Anforderungen und Abhängigkeiten
    - Verwendete Technologien (Programmiersprache, Frameworks, etc.)
    - Einschränkungen, Betriebsbedingungen und Faktoren, die die Entwicklung beeinflussen (Betriebssysteme, Entwicklungsumgebung)
    - Interne Qualitätsanforderungen (z.B. Softwarequalitätsmerkmale wie z.B. Erweiterbarkeit)
#### 4.1.1 Allgemein  
Framework(s) / Bibliothek(en): 
* [socket.io](https://socket.io/) - Real-time bidirektionale und eventbasierte Kommunikation

#### 4.1.2 KI
Programmiersprache(n): 
* [Python](https://www.python.org/) - eine leicht lesbare Programmiersprache
 
Framework(s): 
* [Tensorflow](https://www.tensorflow.org/) - ein Open-Source Framework für das maschinelle Lernen

Methode(n) und Algorithmen:
* [MiniMax-Algorithmus](https://de.wikipedia.org/wiki/Minimax-Algorithmus) - ein Algorithmus zu Filterung von optimalen Spielzügen mit Tiefensuche
* [Reinforcment Learning](https://de.wikipedia.org/wiki/Best%C3%A4rkendes_Lernen) - eine Methode des maschinellen Lernens zu trainierung das Handeln für eine maximale Belohnung 
* [Neuronale Netze](https://de.wikipedia.org/wiki/K%C3%BCnstliches_neuronales_Netz) - ein Algorithmus der ein Netz aus künstlichen Neuronen bildet zum erlernen von Handlungen

#### 4.1.3 Backend / Zuggenerator
Programmiersprache(n):
* [Javascript](http://ecma-international.org/) - eine dynamisch typisierte Skriptsprache 
* [Rust](https://www.rust-lang.org/en-US/) - eine moderne Systemprogrammiersprache

Framework(s):
* [Node.js®](https://nodejs.org/) - Javascript Runtime für den Server
* [neon-bindings](https://www.neon-bindings.com/) - Bindings für in Rust geschriebene Node.js-Module
* [mongoose](http://mongoosejs.com/) - Anbindung von mongoDB-Datenbanken an Node.js-Anwendungen
* [rayon](https://crates.io/crates/rayon) - Eine Parallelisierungs-Bibliothek für Rust-Projekte

Methode(n) und Algorithmen: -

#### 4.1.4 Datenbank
Framework(s) / Bibliothek(en):
* [mongoDB](https://www.mongodb.com/) - ein dokumentenorientiertes Datenbank-System

### 4.2 Verantwortlichkeiten

#### 4.2.1 Rollendefinitionen

#### 4.2.2 Zuordnung von Personen zu Softwarebausteinen aus Kapitel 3.1 und 3.2 und Rollen


### 4.3 Grober Projektplan

    - Meilensteine

## 5 Anhänge

### 5.1 Glossar
    - Definitionen, Abkürzungen, Begriffe

__AWS__  
Amazon Web Services, Cloud-Computing-Anbieter

__CECP - Chess Engine Communication Protocol__  
Ein standardisiertes Protokoll zum Datenaustausch zwischen Schach-Frontend und -Backend

__Elo-Zahl__  
Eine Bewertungsfunktion

__Engine__  
Menge aller notwendigen Services, um das Spiel lauffähig zu machen und mit dem Frontend zu kommunizieren

__FIDE - Fédération Internationale des Échecs (französisch: Internationaler Schachverband)__  
Weltschachbund, nach dessen regularien weltweit Turniere abgehalten werden und die Weltrangliste geführt wird

__Gast__  
Ein nicht registriertes Individuum, das an einer Partie teilhaben möchte.

__Gegnertyp__  
Als Gegnertyp zählt entweder die KI oder ein Spieler.

__KI / AI__  
Künstliche Intelligenz / Artificial Intelligence
Teilgebiet der Informatik das sich mit der Automatisierung intelligenten Verhaltens und dem Maschinenlernen befasst.

__ML - Maschinelles Lernen / Machine Learning__  
Ein Konzept zum lernen aus Erfahrungen und Beispielen. Ein Teilgebiet der künstlichen Intelligenz.

__Matchmaking__  
Ein System um Spieler mit ähnlichen Fähigkeiten zusammen spielen zu lassen.

__Spieler__  
Ein Benutzer mit der Intention ein Spiel zu spielen.

__UCI - Universal Chess Interface__  
Ein standardisiertes Protokoll zum Datenaustausch zwischen Schach-Frontend und -Backend

__User / Benutzer__  
Ein bei Deep-Green registriertes Individuum ohne die direkte Intention ein Spiel zu spielen.

__Zuggenerator__    
Ein Dienst der Engine, der aus der aktuellen Stellung der Spielfiguren auf dem Spielbrett alle möglichen, regelkonformen Züge berechnet

__Zuschauer__  
Ein Benutzer der das Spielgeschehen nur betrachten möchte.

### 5.2 Referenzen
- [CECP - Chess Engine Protocol](https://www.gnu.org/software/xboard/engine-intf.html)
- [UCI - Universal Chess Interface](http://www.shredderchess.de/schach-info/features/uci-universal-chess-interface.html)
- [FEN - Forsyth Edwards Notation](https://de.wikipedia.org/wiki/Forsyth-Edwards-Notation)
- [Weltschachverband (FIDE)](https://www.fide.com/)
- [FIDE Schachregeln](http://www.fide.com/fide/handbook.html?id=32&view=category)
- [FIDE Elo-Zahl Berechnung](https://www.fide.com/fide/handbook.html?id=197&view=article)

### 5.3 Index
