# Pflichtenheft


## User-Stories

### Frontend

| **Name**| **Als**...|   ...**möchte ich**...   | ..., **sodass**... | **erfüllt wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------
| Bilderkennung:  |Spiele| dass aus einer Fotografie eines realen Schach- oder Damespiels zuverlässig die Spielsituation erkannt wird|ich ohne umfangreiche Korrekturen mit dem Spiel fortfahren kann| per API-Call die Status der Stellflächen korrekt angezeigt werden (Name?, ist belegt?, wann wurde der Status zuletzt geändert?) | Must
| Stellflächenstatus ändern |Kamera Pi| den Status jeder überwachten Stellfläche ändern können |ich die Auswertung der Stellflächen an das Gateway übertragen kann| per API-Call die Status der Stellflächen (belegt?, wann geändert?) angepasst werden können | Must
| Stellfläche hinzufügen | Parkplatzbetreiber | Stellflächen hinzufügen können |ich z.B. neue Stellflächen hinzufügen kann| neue Stellflächen vom Betreiber ohne eine Umprogrammierung der Software hinzugefügt werden können | Should
| Stellfläche entfernen | Parkplatzbetreiber | Stellflächen entfernen können |ich z.B. nicht mehr vorhandene Stellfläche entfernen kann| Stellflächen vom Betreiber ohne eine Umprogrammierung der Software entfernt werden können | Should|
Stellflächenbezeichnung ändern | Parkplatzbetreiber | den Stellplätzen Bezeichnungen zuweisen können | ich die Stellfläche nach meinen Wünschen benennen und somit auch zuordnen kann| jeder Stellplatz über eine parametrierbare Bezeichnung verfügt | Could
| Neues Parkplatz-Vergleichsbild | Parkplatzbetreiber | ein neues Bild als Vergleichsbild hinzufügen können | z.B. bei Umstrukturierung des Parkplatzes die Funktionsweise der Bilderkennung weiterhin gegeben ist| ein neues Bild als Vergleichsbild hinzugefügt werden kann | Could 

#### Bildverarbeitung:
- Als Benutzer möchte ich, dass aus einer Fotografie eines realen Schach- oder Damespiels zuverlässig die Spielsituation erkannt wird, damit ich ohne umfangreiche Korrekturen mit dem Spiel fortfahren kann.
- Als Benutzer möchte ich, dass ich bei Unklarheiten bezüglich der Spielerkennung aus einer Fotografie deutlich darauf hingewiesen werde, damit ich sofort eventuelle Korrekturen vornehmen kann.
- Als Benutzer möchte ich, dass die Korrektur einer erkannten Spielsituation leicht möglich ist, damit ich sofort darauf reagieren kann, wenn mir selbst ein Fehler auffällt.



### Backend


