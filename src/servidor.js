import url from "url" //modulo node
import path from "path" //modulo node
import express from "express" //express

const app = express()
const porta = process.env.porta || 3000 //roda na porta 3000 caso haja apontamento caso contrario roda na padrão

const caminhoAtual = url.fileURLToPath(import.meta.url) //tras o caminho atual
const diretorioPublico = path.join(caminhoAtual, "../..", "public") //acessando a raiz da raiz
app.use(express.static(diretorioPublico))

app.listen(porta, () => console.log(`Servidor rodando ${porta}`))