// Aspetta che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Stato dell'applicazione
    let count = 0;

    // 2. Selezione del punto di ancoraggio
    const appElement = document.getElementById('app');

    // 3. Creazione dinamica degli elementi dell'interfaccia
    const container = document.createElement('div');
    container.classList.add('counter-container');

    const title = document.createElement('h1');
    title.textContent = 'Counter Project';

    const valueDisplay = document.createElement('div');
    valueDisplay.classList.add('counter-value');
    valueDisplay.textContent = count; // Valore iniziale: 0
    valueDisplay.setAttribute('aria-live', 'polite');

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('btn-container');

    const decrementBtn = document.createElement('button');
    decrementBtn.textContent = '−';
    decrementBtn.type = 'button';
    decrementBtn.setAttribute('aria-label', 'Diminuisci il contatore');

    const incrementBtn = document.createElement('button');
    incrementBtn.textContent = '+';
    incrementBtn.type = 'button';
    incrementBtn.setAttribute('aria-label', 'Aumenta il contatore');

    // 4. Funzione per aggiornare l'interfaccia e gestire i colori
    const updateDisplay = () => {
        valueDisplay.textContent = count;
        
        // Cambio colore opzionale basato sul valore
        if (count > 0) {
            valueDisplay.className = 'counter-value positive';
        } else if (count < 0) {
            valueDisplay.className = 'counter-value negative';
        } else {
            valueDisplay.className = 'counter-value';
        }
    };

    // 5. Assegnazione dei Listener per i pulsanti
    incrementBtn.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    decrementBtn.addEventListener('click', () => {
        count--;
        updateDisplay();
    });

    // 6. Assemblaggio del DOM (Append degli elementi)
    buttonContainer.appendChild(decrementBtn);
    buttonContainer.appendChild(incrementBtn);

    container.appendChild(title);
    container.appendChild(valueDisplay);
    container.appendChild(buttonContainer);

    appElement.appendChild(container);
});