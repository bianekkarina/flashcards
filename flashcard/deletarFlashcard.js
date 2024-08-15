const { flashcards } = require('../dados.js')

function deletarFlashcard(id) {
    let index = flashcards.findIndex(flashcard => flashcard.id === id) 
    if (index !== -1) {
       flashcards.splice(index, 1)
    }
}

module.exports = deletarFlashcard