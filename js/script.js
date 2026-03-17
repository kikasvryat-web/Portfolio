// ====== mode sombre persistant ====
const btnTheme = document.getElementById('btnTheme');

// Charger la préférence au demarage 
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (btnTheme) btnTheme.textContent = '☀️';
}

//toggle au clic 
if (btnTheme) {
    btnTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        //Sauvegarder dans localStorage
        if(document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            btnTheme.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            btnTheme.textContent = '🌙';
        }
    })
}

// ========== VALIDATION FORMULAIRE CONTACT ==========
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche l'envoi réel du formulaire
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validation : champs vides
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            showMessage('Tous les champs sont requis !', 'error');
            return;
        }
        
        // Validation : email doit contenir @
        if (!email.includes('@')) {
            showMessage('Email invalide !', 'error');
            return;
        }
        
        // Validation : message minimum 10 caractères
        if (message.trim().length < 10) {
            showMessage('Le message doit contenir au moins 10 caractères !', 'error');
            return;
        }
        
        // Succès (simulation d'envoi)
        showMessage('Message envoyé avec succès ! Je vous répondrai bientôt.', 'success');
        contactForm.reset(); // Vide le formulaire
    });
}

function showMessage(text, type) {
    if (formMessage) {
        formMessage.textContent = text;
        formMessage.className = 'mt-md'; // Reset classes
        
        if (type === 'success') {
            formMessage.style.backgroundColor = '#d4edda';
            formMessage.style.color = '#155724';
            formMessage.style.border = '1px solid #c3e6cb';
        } else {
            formMessage.style.backgroundColor = '#f8d7da';
            formMessage.style.color = '#721c24';
            formMessage.style.border = '1px solid #f5c6cb';
        }
        
        formMessage.style.display = 'block';
        formMessage.style.padding = '12px';
        formMessage.style.borderRadius = '8px';
        formMessage.style.textAlign = 'center';
        
        // Masquer après 5 secondes
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}