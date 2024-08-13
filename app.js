const prompt = require('prompt-sync')()

const criarBaralho = require('./baralho/criarBaralho')
const listarBaralhos = require('./baralho/listarBaralhos')
const atualizarBaralho = require('./baralho/atualizarBaralho')
const deletarBaralho = require('./baralho/deletarBaralho')

function exibirMenu() {
    console.log(`
    1. Criar baralho
    2. Listar baralhos
    3. Atualizar baralhos
    4. Deletar baralho
    5. Criar flashcard
    6. Listar flashcards
    7. Listar flashcards por baralho
    8. Atualizar flashcard
    9. Deletar flashcard
    10. Buscar flashcards por Pergunta
    11. Buscar flashcards por Baralho
    12. Sair
    `)

    let escolha = prompt("Escolha uma opção: ")

    switch (escolha) {
        case '1':
            let nome = prompt("Informe o nome do novo baralho: ")
            criarBaralho({ nome })
            console.log("Baralho adicionado com sucesso!")
            exibirMenu()
            break
        case '2':
            listarBaralhos()
            exibirMenu()
            break
        case '3':
            listarBaralhos()
            var id = parseInt(prompt("Escolha um baralho: "))
            const novoNome = prompt("Informe o nome do baralho atualizado: ")
            atualizarBaralho(id, {nome: novoNome})
            console.log("Baralho atualizado com sucesso!")
            exibirMenu()
            break
        case '4':
            listarBaralhos()
            id = parseInt(prompt("Escolha um baralho: "))
            deletarBaralho(id)
            console.log("Baralho removido com sucesso!")
            exibirMenu()
            break
        case '5':
            //criarFlashcard()
            break
        case '6':
            //listarFlashcards()
            break
        case '7':
            //listarFlashcardsPorBaralhoId()
            break
        case '8':
            //atualizarFlashcard()
            break
        case '9':
            //deletarFlashcard()
            break
        case '10':
            //buscarFlashcardsPorPergunta()
            break
        case '11':
            //buscarFlashcardsPorBaralho()
            break
        case '12':
            console.log("Até logo! :)")
            break
        default:
            throw new Error("Opção inválida!")
    }
}

exibirMenu()