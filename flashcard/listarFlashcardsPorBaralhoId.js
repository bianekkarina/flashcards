const { flashcards } = require('../dados.js')

function listarFlashcardsPorBaralhoId(idBaralho) {
    flashcards.filter(flashcard => flashcard.idBaralho === idBaralho).forEach(flashcard => {
        console.log(`
        ID: ${flashcard.id}
        Pergunta: ${flashcard.pergunta}
        Resposta: ${flashcard.resposta}
        `)
    })
}

module.exports = listarFlashcardsPorBaralhoId