function citation() {
    let citationText = document.getElementById("citation").textContent;
    console.log(citationText);
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button").addEventListener("click", citation);
});
