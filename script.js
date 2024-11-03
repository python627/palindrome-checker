function checkPalindrome() {
    const text = document.getElementById("inputText").value;
    const cleanedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');
    const isPalindrome = cleanedText === reversedText;

    document.getElementById("result").innerText = isPalindrome 
        ? `"${text}" is a palindrome!` 
        : `"${text}" is not a palindrome.`;
}
