const { flashcards } = require('../dados.js')

function listarFlashcards() {
    if (flashcards === 0){
        throw new Error("Nada aqui!")
    } else {
        flashcards.forEach(flashcard => {
            console.log(`
            ID: ${flashcard.id}
            Pergunta: ${flashcard.pergunta}
            Resposta: ${flashcard.resposta}
            ID do -Baralho: ${flashcard.idBaralho}
            `);
        })
    }
}

module.exports = listarFlashcards 