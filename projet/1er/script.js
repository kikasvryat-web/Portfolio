console.log('JS chargé !');  /* Teste en console */

const titre = document.querySelector('h1');  /* Sélectionne h1 */
titre.style.color = 'green';  /* Change couleur via JS (override CSS) */

const bouton = document.getElementById('bouton-change');
bouton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightgreen';  /* Change fond sur clic */
    alert('Fond changé !');  /* Popup simple */
});

const boutonTexte = document.getElementById('change');  // Bouton pour texte
const para = document.getElementsByClassName('moche')[0];  // Prend le premier [0] de la collection

boutonTexte.addEventListener('click', () => {  // Listener sur le bon bouton
    para.textContent = 'Cela est donc moins moche mais on est uniquement à la leçon numéro 5 !';  // Change texte (corrigé ortho)
    console.log('Texte changé !');  // Log
});

const form = document.getElementById('mon-form');
const resultat = document.getElementById('resultat');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nom = document.getElementById('nom').value;
    if (nom.length < 3) {
        alert('Nom trop court ! Minimum 3 lettres.');
        return;
    }
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Email invalide - manque @ !');
        return;
    }
    resultat.textContent = `Bonjour, ${nom} ! Email validé : ${email}`;
    console.log(`Nom soumis : ${nom}, Email : ${email}`);
    // Perso devoir : Clear form après submit (vide les champs)
    document.getElementById('nom').value = '';
    document.getElementById('email').value = '';
});
