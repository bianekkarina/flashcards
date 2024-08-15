const { flashcards } = require('../dados.js')

function atualizarFlashcard(id, novoFlashcard) {
    let index = flashcards.findIndex(flashcard => flashcard.id === id) 
    if (index !== -1) {
     flashcards[index] = {id: id, ...novoFlashcard}
    }
}

module.exports = atualizarFlashcard