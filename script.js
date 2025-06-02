// Get word + charcounter from textArea 2.0
let input = document.getElementById("notepad"),
    words = document.getElementById('words'),
    characters = document.getElementById('characters');

// A string of characters that count towards your word / character count.
// Includes a-z, A-Z, and 0-9.
const charactersThatCount = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNOPQRSTUVWYXZ0123456789";

function countWords() {
  var text = input.value;
  var wordCount = 0;
  var isWord = false;
  
  // Removed the "=" in "<=" to prevent an extra word from being counted.
  for (var i = 0; i < text.length; i++) {
    const letter = text.charAt(i);
    
    if (charactersThatCount.includes(letter)) {
      isWord = true;
    } else {
      // This only gets fired if the previous letter is in "charactersThatCount"
      if (isWord) wordCount++;
      
      isWord = false;
    }
  }
  
  // If your input ends in a letter, count it as a word. (E.G. "Two words")
  if (isWord) wordCount++;
  
  words.innerText = wordCount;
}

function countCharacters() {
  var text = input.value;
  var letterCount = 0;
  
  for (var i = 0; i <= text.length - 1; i++) {
    const letter = text.charAt(i);
    
    // If the letter is in "charactersThatCount", then add a letter.
    if (charactersThatCount.includes(letter)) letterCount++;
  }
  
  characters.innerText = letterCount;
}

// Merged both event listeners into one.
input.addEventListener('keyup', function (e) {
  // Removed "e.value", as "var text = input.value;" overwrites it.
  countWords();
  countCharacters();
});
