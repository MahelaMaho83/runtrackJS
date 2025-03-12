function tri(numbers, order) {
    if (order === "asc") {
        return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        return numbers.sort((a, b) => b - a);
    } else {
        return numbers;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("triForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let numbersInput = document.getElementById("numbers").value;
        let order = document.getElementById("order").value;
        
        let numbersArray = numbersInput.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
        let sortedNumbers = tri(numbersArray, order);
        
        document.getElementById("result").innerText = "Tableau trié (" + order + ") : " + sortedNumbers.join(", ");
    });
});