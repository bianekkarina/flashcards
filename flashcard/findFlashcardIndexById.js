const { flashcards } = require('../dados.js')

function findFlashcardIndexById(id) {
    return flashcards.findIndex(flashcard => flashcard.id === id)
}

module.exports = findFlashcardIndexById