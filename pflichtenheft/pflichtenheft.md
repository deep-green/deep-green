
# Pflichtenheft

## textliche Anforderungsanalyse

### Beschreibung

* Mit Hilfe von Deep Green kann man Brettspiele (z.B. Schach, Dame etc.) konfigurieren und ausführen und als Spieler oder Zuschauer teilnehmen.
* Es ist möglich, sowohl gegen einen realen Spieler, als auch gegen eine KI zu spielen.
* Die Bedienung des Spiels ist über diverse Eingabegeräte (Smartphones, Desktop-PCs, Spracheingabe z.B. Google Home) möglich.
* Die initiale Spielsituation auf den Spielflächen kann über Kamera eingelesen werden.
* Die Darstellung für die Spieler und Zuschauer des Spiels findet sowohl über Display-Geräte (das umfasst auch VR), als auch über Audio statt.
* Es gibt die Möglichkeit, Zuschauer zuzulassen, bzw. als Zuschauer ein Spiel zu beobachten.
* Es gibt die Möglichkeit, sich zu registrieren oder als Gastspieler an einem Spiel teilzunehmen.
* Für registrierte Spieler gibt es ein System, das gleichstarke Spieler gegeneinander spielen lässt.

## Anforderungen

#### __Muss__
__Funktional:__
* Benutzer kann Schach spielen
* Gegen Menschen spielbar
* Gegen KI spielbar
* Über Desktop spielbar
* Über Smartphone spielbar
* Über Voice Assistant spielbar
* Benutzer kann sich registrieren
* Als Gast spielbar

__Nicht Funktional:__
* Kamera kann initiale Spielsituation erstellen

#### __Optional__
* Benutzer kann Spielen zusehen

## User-Stories

#### Frontend

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
|Registrieren| User | mich registrieren können | das Matchmaking System nutzen kann | der User angelegt ist und er sich einloggen kann | Must
| Gastkonto | User | ein Gastkonto haben | ich ohne Registrierung gegen andere Spieler spielen kann | der User ein Gastkonto mit temporärem Namen hat | Must
| Zuschauen | User | einem Spiel zuschauen können |  ich selbst entscheide, was ich sehen kann | der Zuschauermodus geladen wurde und das Spielgeschehen angezeigt wird | Can

#### Bilderkennung

| **Name**| **Als**...|   ...**möchte ich**...   | ..., **sodass**... | **erfüllt wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------
| Erkennung  |Spieler| dass aus einer Fotografie eines realen Schach- oder Damespiels zuverlässig die Spielsituation erkannt wird|ich ohne umfangreiche Korrekturen mit dem Spiel fortfahren kann| nach der Übertragung des Bildes die erkannte Spielsituation möglichst korrekt und verständlich (siehe Bild 'Schachnotation') dargestellt wird | Must
| Fehler  |Spieler| dass ich bei Unklarheiten bezüglich der Spielerkennung aus einer Fotografie deutlich darauf hingewiesen werde|damit ich sofort eventuelle Korrekturen vornehmen kann| nicht oder unklare Figuren in der erkannten Situation kenntlich gemacht werden | Must
| Korrektur  |Spieler| dass die Korrektur einer erkannten Spielsituation leicht möglich ist|damit ich sofort darauf reagieren kann| eine einfache Korrektur der erkannten Situation leicht möglich ist | Must


![schachnotation](./images/schachnotation.jpg "Schachnotation")

#### Backend

#### Sprachsteuerung
| **Name**| **Als**...|   ...**möchte ich**...   | ..., **sodass**... | **erfüllt wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------
||Spieler|durch eine Spracheingabe einen Spielzug machen||| Must

||Spieler|durch eine Spracheingabe das Spiel beenden können||| Must

||Spieler|durch eine Spracheingabe ein Spiel starten können||| Must

||Spieler|durch eine Spracheingabe beim Starten eines neuen Spieles wählen können, ob der Gegner eine KI oder ein Mensch ist||| Must

||Spieler|durch eine Sprachausgabe hören, ob mein Zug gültig ist||| Must

||Spieler|durch eine Sprachausgabe hören, welchen Zug der Gegner gemacht hat||| Must

||Spieler|durch eine Sprachausgabe hören, welcher Spieler am Zug ist||| Must

||Spieler|durch eine Sprachausgabe hören, dass mein Spiel begonnen hat||| Can

||Spieler|durch eine Sprachausgabe hören, wer gewonnen hat||| Should

## Mock Ups
![Desktop](./images/mockups/DesktopMockups.png "Desktop")
![Mobile](./images/mockups/MobilpMockups.png "Mobile")


