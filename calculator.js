import { evaluate } from 'mathjs';

// Variablen
let calculated = false;

// Zahlen und Operatoren hinzufügen
function appendOperation(operation) {
    const area = document.getElementById("calculationArea");
    const history = document.getElementById("calHistory");

    if (calculated) {
        if (!"+-*/".includes(operation) || area.textContent === "Fehler") {
            area.textContent = "";
        }
        history.textContent = "";
        calculated = false;
    }

    area.textContent += operation;
    history.textContent = area.textContent;
}

// Berechnung durchführen
function calculateResult() {
    const area = document.getElementById("calculationArea");
    const history = document.getElementById("calHistory");

    const rawString = area.textContent;
    const mathString = rawString.replaceAll(",", ".");

    if (mathString.trim() === "") {
        return;
    }

    try {
        const result = evaluate(mathString);

        if (typeof result !== "number" || !isFinite(result)) {
            throw new Error("Ungültige Berechnung");
        }

        area.textContent = result.toString().replace(".", ",");
        history.textContent = rawString + " =";
    } catch (error) {
        area.textContent = "Fehler";
    }

    calculated = true;
}

// Letztes Zeichen löschen
function deleteLastCharacter() {
    const area = document.getElementById("calculationArea");
    const history = document.getElementById("calHistory");

    if (calculated) {
        area.textContent = "";
        history.textContent = "";
        calculated = false;
        return;
    }

    area.textContent = area.textContent.slice(0, -1);
    history.textContent = area.textContent;
}

// Gesamten Inhalt löschen
function clearResult() {
    document.getElementById("calculationArea").textContent = "";
    document.getElementById("calHistory").textContent = "";
    calculated = false;
}

// Funktionen für HTML-Buttons verfügbar machen
window.appendOperation = appendOperation;
window.calculateResult = calculateResult;
window.deleteLastCharacter = deleteLastCharacter;
window.clearResult = clearResult;