const { baralhos } = require('../dados.js')

function listarBaralhos() {
    if (baralhos === 0){
        throw new Error("Nada aqui!")
    } else {
        baralhos.forEach(baralho => {
            console.log(`
            ID: ${baralho.id}
            Nome: ${baralho.nome}
            `);
        })
    }
}

module.exports = listarBaralhos 