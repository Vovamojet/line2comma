
window.onload = function() {
    document.getElementById('inputText').focus();
};


document.getElementById('convertButton').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let outputText = inputText.split('\n').filter(Boolean).join(',');
    document.getElementById('outputText').value = outputText;
});

document.getElementById('copyButton').addEventListener('click', function() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('inputText').focus();
});