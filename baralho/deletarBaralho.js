const { baralhos, flashcards } = require('../dados.js')

function deletarBaralho(id) {
    let index = baralhos.findIndex(baralho => baralho.id === id) 
    if (index !== -1) {
       baralhos.splice(index, 1)
    
        for (let i = flashcards.length -1; i >= 0; i--) {
            if (flashcards[i].idBaralho === id) {
                flashcards.splice(i, 1)
            }
       }
    }
}

module.exports = deletarBaralho