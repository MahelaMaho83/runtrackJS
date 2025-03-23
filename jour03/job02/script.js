const imageContainer = document.getElementById("imageContainer");
const shuffleButton = document.getElementById("shuffleButton");
const message = document.getElementById("message");

// Chemins des images (à adapter si nécessaire)
const images = [
    "arc1.png",
    "arc2.png",
    "arc3.png",
    "arc4.png",
    "arc5.png",
    "arc6.png"
];

// Fonction pour mélanger un tableau
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Fonction pour initialiser les images
function initializeImages() {
    let shuffledImages = shuffleArray([...images]);
    let slots = document.querySelectorAll(".image-slot");
    
    slots.forEach((slot, index) => {
        slot.innerHTML = ""; // Nettoyer
        let img = document.createElement("img");
        img.src = shuffledImages[index];
        img.draggable = true;
        img.dataset.originalIndex = images.indexOf(shuffledImages[index]) + 1;
        img.addEventListener("dragstart", dragStart);
        slot.appendChild(img);
    });
}

// Fonction pour vérifier l'ordre
function checkOrder() {
    let slots = document.querySelectorAll(".image-slot");
    let correct = true;

    slots.forEach((slot, index) => {
        let img = slot.querySelector("img");
        if (img) {
            let correctIndex = index + 1;
            if (parseInt(img.dataset.originalIndex) !== correctIndex) {
                correct = false;
            }
        } else {
            correct = false;
        }
    });

    if (correct) {
        message.textContent = "Vous avez gagné ! 🎉";
        message.style.color = "green";
    } else {
        message.textContent = "Vous avez perdu ! 😢";
        message.style.color = "red";
    }
}

// Gestion du drag & drop
let draggedItem = null;

function dragStart(event) {
    draggedItem = event.target;
    setTimeout(() => event.target.style.display = "none", 0);
}

document.querySelectorAll(".image-slot").forEach(slot => {
    slot.addEventListener("dragover", event => event.preventDefault());

    slot.addEventListener("drop", event => {
        event.preventDefault();
        if (draggedItem) {
            event.target.innerHTML = ""; // Nettoyer l'élément
            event.target.appendChild(draggedItem);
            draggedItem.style.display = "block";
            draggedItem = null;
            checkOrder();
        }
    });
});

// Mélanger les images au démarrage et au clic sur le bouton
initializeImages();
shuffleButton.addEventListener("click", initializeImages);