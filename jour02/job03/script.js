let count = 0;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button").addEventListener("click", function () {
        count++;
        document.getElementById("compteur").textContent = count;
    });
});
