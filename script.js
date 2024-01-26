document.addEventListener('DOMContentLoaded', (event) => {
    document.body.addEventListener('click', replaceWord);
});

function replaceWord() {
    const urlParams = new URLSearchParams(window.location.search);
    let min = parseInt(urlParams.get('min'), 10);
    let max = parseInt(urlParams.get('max'), 10);

    // Validate min and max; if invalid, use default range 2 to 4
    if (isNaN(min)) min = 3;
    if (isNaN(max)) max = 3;

    const characters = [
        // "N", 
        // "W", 
        // "S", 
        // "E", 
        '<img src="rotating-arrow-symbol.png" alt="Icon" class="word-icon" style="width:0.7em; height:0.7em;">',
        '<img src="vertical-arrow.png" alt="Icon" class="word-icon">',
        '<img src="double-arrow.png" alt="hori" class="word-icon">',
    ];
    let newWord = '';

    const wordLength = Math.floor(Math.random() * (max - min + 1)) + min;
    for (let i = 0; i < wordLength; i++) {
        newWord += characters[Math.floor(Math.random() * characters.length)];
    }

    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = newWord;

    // Remove the animation class and re-add it to trigger the animation
    wordContainer.classList.remove('animate-grow');
    // Trigger reflow to restart the animation
    void wordContainer.offsetWidth;
    wordContainer.classList.add('animate-grow');
}
