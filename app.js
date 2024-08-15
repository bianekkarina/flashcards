const prompt = require('prompt-sync')()

const criarBaralho = require('./baralho/criarBaralho')
const listarBaralhos = require('./baralho/listarBaralhos')
const atualizarBaralho = require('./baralho/atualizarBaralho')
const deletarBaralho = require('./baralho/deletarBaralho')

const criarFlashcard = require('./flashcard/criarFlashcard')
const listarFlashcards = require('./flashcard/listarFlashcards')
const listarFlashcardsPorBaralhoId = require('./flashcard/listarFlashcardsPorBaralhoId')
const atualizarFlashcard = require('./flashcard/atualizarFlashcard')
const deletarFlashcard = require('./flashcard/deletarFlashcard')
const buscarFlashcardsPorPergunta = require('./flashcard/buscarFlashcardsPorPergunta')
const buscarFlashcardsPorBaralho = require('./flashcard/buscarFlashcardsPorBaralho')


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
            var id = parseInt(prompt("Escolha um baralho para atualizar: "))
            const novoNome = prompt("Informe o nome do baralho atualizado: ")
            atualizarBaralho(id, {nome: novoNome})
            console.log("Baralho atualizado com sucesso!")
            exibirMenu()
            break
        case '4':
            listarBaralhos()
            id = parseInt(prompt("Escolha um baralho para deletar: "))
            deletarBaralho(id)
            console.log("Baralho removido com sucesso!")
            exibirMenu()
            break
        case '5':
            let pergunta = prompt("Informe a pergunta do flashcard: ")
            let resposta = prompt("Informe a resposta da pergunta: ")
            listarBaralhos()
            idBaralho = parseInt(prompt("Informe o ID do baralho para adicionar: "))
            criarFlashcard({ pergunta, resposta, idBaralho })
            console.log("Flashcard adicionado com sucesso!")
            exibirMenu()
            break
        case '6':
            listarFlashcards()
            exibirMenu()
            break
        case '7':
            listarBaralhos()
            idBaralho = parseInt(prompt("Escolha um baralho para listar os flashcards: "))
            listarFlashcardsPorBaralhoId(idBaralho)
            exibirMenu()
            break
        case '8':
            listarFlashcards()
            id = parseInt(prompt("Escolha um flashcard par atualizar: "))
            let novaPerg = prompt("Informe a nova pergunta: ")
            let novaResp = prompt("Informe a nova resposta: ")
            let novoBaral = prompt("Informe o novo ID do baralho: ")
            atualizarFlashcard(id, { pergunta: novaPerg, resposta: novaResp, idBaralho: novoBaral })
            console.log("Flashcard atualizado com sucesso!")
            exibirMenu()
            break
        case '9':
            listarFlashcards()
            id = parseInt(prompt("Escolha um flashcard para deletar: "))
            deletarFlashcard(id)
            console.log("Flashcard removido com sucesso!")
            exibirMenu()
            break
        case '10':
            let buscarPergunta = prompt("Informe a pergunta do flashcard: ")
            let resultado = buscarFlashcardsPorPergunta(buscarPergunta)
            console.log(resultado)
            exibirMenu()
            break
        case '11':
            listarBaralhos()
            idBaralho = parseInt(prompt("Escolha um baralho para buscar o flashcard: "))
            let flashcardsEncontrados = buscarFlashcardsPorBaralho(idBaralho)
            console.log(flashcardsEncontrados)
            exibirMenu()
            break
        case '12':
            console.log("Até logo! :)")
            break
        default:
            throw new Error("Opção inválida!")
    }
}

exibirMenu()