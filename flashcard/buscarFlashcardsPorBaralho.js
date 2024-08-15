const { flashcards } = require('../dados.js')

function buscarFlashcardsPorBaralho(idBaralho) {
    return flashcards.filter(flashcard => flashcard.idBaralho === idBaralho)
}

module.exports = buscarFlashcardsPorBaralho