document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value; // correction ici
    const password = document.getElementById('password').value;

    // Expression régulière pour vérifier le domaine de l'email
    const emailPattern = /^[^\s@]+@laplateforme\.io$/;

    if (!emailPattern.test(email)) {
        alert("Adresse email invalide. Veuillez utiliser une adresse se terminant par @laplateforme.io."); // correction de la syntaxe
        return;
    }

    // Logique de connexion (à compléter)
    console.log('Email:', email);
    console.log('Mot de passe:', password);
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupération des valeurs du formulaire
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = document.getElementById('role').value;

    // Validation email (doit se terminer par @laplateforme.io)
    const emailPattern = /^[^\s@]+@laplateforme\.io$/;
    if (!emailPattern.test(email)) {
        alert("Adresse email invalide. Veuillez utiliser une adresse se terminant par @laplateforme.io.");
        return;
    }

    // Vérification des champs obligatoires
    if (!first_name || !last_name || !email || !password || !confirmPassword || !role) {
        alert("Tous les champs sont obligatoires.");
        return;
    }

    // Validation mot de passe
    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }

    // Logique d'inscription (à compléter avec une requête vers le serveur)
    console.log("Prénom:", first_name);
    console.log("Nom:", last_name);
    console.log("Email:", email);
    console.log("Mot de passe:", password);
    console.log("Rôle:", role);

    alert("Inscription réussie !");
});

// Savoir ce qu'est le DOM
// Comprendre comment récupérer des information a l'aide de javascript et HTMLµ
// Comprendre comment traiter les information des formulaires