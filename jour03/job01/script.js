// Sélection des éléments
const showButton = document.getElementById("showButton");
const hideButton = document.getElementById("hideButton");
const quote = document.getElementById("quote");

// Ajout d'un événement au bouton "Afficher"
showButton.addEventListener("click", () => {
    quote.textContent = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.";
    quote.style.display = "block";
});

// Ajout d'un événement au bouton "Cacher"
hideButton.addEventListener("click", () => {
    quote.style.display = "none";
});