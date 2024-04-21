// Sélection des éléments input de mot de passe
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');

// Écouteur d'événement pour vérifier si les valeurs des champs de mot de passe correspondent
confirmPasswordInput.addEventListener('input', function() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        // Si les valeurs ne correspondent pas, ajoutez la classe "invalid" aux deux champs
        passwordInput.classList.add('invalid');
        confirmPasswordInput.classList.add('invalid');
    } else {
        // Si les valeurs correspondent, retirez la classe "invalid" des deux champs
        passwordInput.classList.remove('invalid');
        confirmPasswordInput.classList.remove('invalid');
    }
});
