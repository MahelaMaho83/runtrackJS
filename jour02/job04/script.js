document.addEventListener("keydown", function (event) {
    let textarea = document.getElementById("keylogger");
    let key = event.key;
    
    if (key.length === 1 && key.match(/[a-z]/i)) {
        if (document.activeElement === textarea) {
            textarea.value += key + key;
        } else {
            textarea.value += key;
        }
    }
});
