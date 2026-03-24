const input1 = document.getElementById('nombre1')
const input2 = document.getElementById('nombre2')
const btnPlus = document.getElementById('btnPlus')
const btnMoins = document.getElementById('btnMoins')
const btnFois = document.getElementById('btnFois')
const btnDivise = document.getElementById('btnDivise')
const seeresultat = document.getElementById('seeresultat')

btnPlus.addEventListener('click', () => {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    const resultat = num1 + num2;
    seeresultat.textContent = resultat;
});

btnMoins.addEventListener('click', () => {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    const resultat = num1 - num2;
    seeresultat.textContent = resultat;
});

btnFois.addEventListener('click', () => {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    const resultat = num1 * num2;
    seeresultat.textContent = resultat;
});

btnDivise.addEventListener('click', () => {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    const resultat = num1 / num2;
    seeresultat.textContent = resultat;
});