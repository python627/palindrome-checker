 function isPalindrome(word) {
    // Convert the word to lowercase
    const lowerCaseWord = word.toLowerCase();
    
    // Reverse the string and check if it matches the original
    const reversed = lowerCaseWord.split('').reverse().join('');
    
    return lowerCaseWord === reversed;
}

// Example usage
const inputWord = prompt("Enter a word:");
if (isPalindrome(inputWord)) {
    alert("It's a palindrome!");
} else {
    alert("Not a palindrome.");
}
