function estPremier(nombre) {
    if (nombre < 2) return false;
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) return false;
    }
    return true;
}

function sommeNombresPremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

window.onload = function() {
    let num1 = parseInt(prompt("Entrez le premier nombre :"));
    let num2 = parseInt(prompt("Entrez le deuxième nombre :"));
    
    let resultat = sommeNombresPremiers(num1, num2);
    
    if (resultat !== false) {
        console.log(`La somme des nombres premiers ${num1} et ${num2} est : ${resultat}`);
    } else {
        console.log("L'un des nombres ou les deux ne sont pas premiers.");
    }
};
