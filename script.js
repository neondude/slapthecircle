document.addEventListener('DOMContentLoaded', (event) => {
    document.body.addEventListener('click', replaceWord);
});

function replaceWord() {
    const urlParams = new URLSearchParams(window.location.search);
    let min = parseInt(urlParams.get('min'), 10);
    let max = parseInt(urlParams.get('max'), 10);

    // Validate min and max; if invalid, use default range 2 to 4
    if (isNaN(min) || min < 2) min = 2;
    if (isNaN(max) || max > 4 || max < min) max = 4;

    // Adjusting the length to account for the image
    const wordLength = Math.floor(Math.random() * (max - min + 1)) + min - 1;

    const characters = ["N", "W", "S", "E"];
    let newWord = '';

    for (let i = 0; i < wordLength; i++) {
        newWord += characters[Math.floor(Math.random() * characters.length)];
    }

    // Insert the PNG image at a random position in the new word
    const imageHtml = '<img src="rotating-arrow-symbol.png" alt="Icon" class="word-icon">';
    const position = Math.floor(Math.random() * (newWord.length + 1));
    newWord = newWord.slice(0, position) + imageHtml + newWord.slice(position);

    document.getElementById('word-container').innerHTML = newWord;
}
