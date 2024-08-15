const { flashcards } = require('../dados.js')

function criarFlashcard(flashcard) {
    flashcard.id = flashcards.length + 1
    flashcards.push(flashcard)
}

module.exports = criarFlashcard