document.getElementById('checkButton').addEventListener('click', function() {
    const word = document.getElementById('wordInput').value;
    const reversed = word.split('').reverse().join('');
    
    if (word === reversed) {
        document.getElementById('result').textContent = "It's a palindrome!";
    } else {
        document.getElementById('result').textContent = "Not a palindrome.";
    }
});
