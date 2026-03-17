// MODE SOMBRE (seulement si le bouton existe)
const btnTheme = document.getElementById('btnTheme');
if (btnTheme) {  // ← Vérifie que l'élément existe
    btnTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            btnTheme.textContent = '☀️ Mode Clair';
        } else {
            btnTheme.textContent = '🌙 Mode Sombre';
        }
    });
}

// COMPTEUR DE MOTIVATION (seulement sur index.html)
const bouton = document.getElementById('btnMotivation');
const affichageCompteur = document.getElementById('compteurMotivation');

if (bouton && affichageCompteur) {  // ← Vérifie que les éléments existent
    let nombreClics = 0;
    
    bouton.addEventListener('click', () => {
        nombreClics++;
        affichageCompteur.textContent = nombreClics;
        
        if (nombreClics >= 10) {
            affichageCompteur.classList.add('actif');
        }
    });
}

// TOGGLE PASSIONS (seulement sur apropos.html)
const btnTogglePassions = document.getElementById('btnTogglePassions');
const sectionPassions = document.getElementById('sectionPassions');

if (btnTogglePassions && sectionPassions) {  // ← Vérifie que les éléments existent
    btnTogglePassions.addEventListener('click', () => {
        sectionPassions.classList.toggle('cache');
        
        if (sectionPassions.classList.contains('cache')) {
            btnTogglePassions.textContent = 'Afficher mes passions';
        } else {
            btnTogglePassions.textContent = 'Masquer mes passions';
        }
    });
}

const btnCouleur = document.getElementById('btnCouleur');

if (btnCouleur) {
    const couleurs = ['#55bed1', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#ecf0f1'];

    btnCouleur.addEventListener('click', () => {
        const indexAleatoire = Math.floor(Math.random() * couleurs.length);

        document.body.style.backgroundColor = couleurs[indexAleatoire];
    });
}