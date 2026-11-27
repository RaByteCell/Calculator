# Taschenrechner

Ein Taschenrechner für den Browser, gebaut mit [Vite](https://vite.dev/) und [math.js](https://mathjs.org/).

## Funktionen

- Grundrechenarten: Addition, Subtraktion, Multiplikation und Division
- Punkt-vor-Strich-Rechnung, ausgewertet mit math.js
- Dezimalzahlen mit Komma als Trennzeichen
- Verlaufsanzeige: Die zuletzt berechnete Rechnung wird über dem Ergebnis angezeigt
- Weiterrechnen mit dem Ergebnis: Nach `=` direkt einen Operator drücken
- **DEL** löscht das letzte Zeichen, **C** löscht die gesamte Eingabe
- Fehlermeldung bei ungültigen Eingaben oder Division durch 0

## Verwendete Technologien

- **Vite**: Entwicklungsserver und Build-Tool
- **math.js**: Auswertung der Rechenausdrücke
- HTML, CSS und JavaScript

## Projektstruktur

```
Calculator/
├── index.html       # Aufbau der Oberfläche
├── calculator.js    # Rechenlogik
├── style.css        # Gestaltung
├── package.json     # Abhängigkeiten und Scripts
└── README.md
```

## Voraussetzungen

- [Node.js](https://nodejs.org/) (inklusive npm)

## Installation

Repository klonen:

```bash
git clone https://github.com/RaByteCell/Calculator.git
cd Calculator
```

Abhängigkeiten installieren:

```bash
npm install
```

## Starten

```bash
npm run dev
```

Anschließend die im Terminal angezeigte Adresse (meist `http://localhost:5173`) im Browser öffnen.

## Build

```bash
npm run build
```

Die fertigen Dateien landen im Ordner `dist`. Mit `npm run preview` lässt sich der Build lokal testen.

## Autor

[RaByteCell](https://github.com/RaByteCell)
