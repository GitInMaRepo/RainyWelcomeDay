# Raindrops Kata

## Beschreibung 

Ähnlich wie FizzBuzz ist Raindrops ein Konzentrationsspiel, bei dem
eine Gruppe alle Zahlen von 1 bis ... durchgeht. Nach gewissen Regeln 
muss entweder die aktuelle Zahl selbst oder eine spezielle Wortkombination
ausgerufen werden. Die Regeln sind

* Zahl ist durch 3 teilbar: Der Ruf enthält "Pling"
* Zahl ist durch 5 teilbar: Der Ruf enthält "Plang"
* Zahl ist durch 7 teilbar: Der Ruf enthält "Plong"
* Zahl ist durch keine der drei Zahlen teilbar: Ruf ist ursprüngliche Zahl

Es soll eine Algorithmus geschrieben werden, der es ermöglicht das 
Spiel mit beliebig hohen Zahlen zu spielen

## Steps

* Testfälle aufschreiben
* TDD beachten [https://cucumber.io/images/blog/seb-accu/write-failing-test.png]
* Ersten Test implementieren
* Ersten Test mit **npm test** durchführen
* Test Watcher mit **npm test -- --watch** starten 
* Restliche Testfälle implementieren
