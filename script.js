document.getElementById("check-btn").addEventListener("click", function() {
    let inputText = document.getElementById("text-input").value;
    let resultElement = document.getElementById("result");

    if (inputText.trim() === "") {
        alert("Please input a value.");
        return;
    }

    let cleanText = inputText.toLowerCase().replace(/[^a-z0-9]/gi, ''); // Eliminar caracteres especiales y espacios
    let reversedText = cleanText.split('').reverse().join('');

    if (cleanText === reversedText) {
        resultElement.textContent = `${inputText} is a palindrome.`;
    } else {
        resultElement.textContent = `${inputText} is not a palindrome.`;
    }

    // Mostrar el mensaje con animación
    resultElement.style.opacity = "1";
});
