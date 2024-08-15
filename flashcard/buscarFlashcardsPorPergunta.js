const { flashcards } = require('../dados.js')

function buscarFlashcardsPorPergunta(pergunta) {
    return flashcards.filter(flashcard => flashcard.pergunta.toLocaleLowerCase().includes(pergunta.toLocaleLowerCase()))
}

module.exports = buscarFlashcardsPorPergunta