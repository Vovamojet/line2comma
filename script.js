
//фокус на вводе
window.onload = function() {
    document.getElementById('inputText').focus();
};


// Конвертация текста
document.getElementById('convertButton').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let outputText = inputText.split('\n').filter(Boolean).join(',');
    document.getElementById('outputText').value = outputText;
});

// Копирование результата в буфер обмена
document.getElementById('copyButton').addEventListener('click', function() {
    let outputText = document.getElementById('outputText');
    
    // Выбираем текст для копирования
    outputText.select();

    // Копируем текст в буфер обмена
    document.execCommand('copy');
});
