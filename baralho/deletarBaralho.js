const { baralhos } = require('../dados.js')

function deletarBaralho(id) {
    let index = baralhos.findIndex(baralho => baralho.id === id) 
    if (index !== -1) {
       baralhos.splice(index, 1)
    }
}

module.exports = deletarBaralho