import url from "url" //modulo node
import path from "path" //modulo node
import express from "express" //express
import http from "http"
import { Server } from "socket.io"


const app = express()
const porta = process.env.porta || 3000 //roda na porta 3000 caso haja apontamento caso contrario roda na padrão

const caminhoAtual = url.fileURLToPath(import.meta.url) //tras o caminho atual
const diretorioPublico = path.join(caminhoAtual, "../..", "public") //acessando a raiz da raiz
app.use(express.static(diretorioPublico))

const servidorHttp = http.createServer(app)
servidorHttp.listen(porta, () => console.log(`Sevidor 127.0.0.1:${porta}`))

const io = new Server(servidorHttp)

io.on("connection", () => {
    console.log("cliente se conectou")
})

// app.listen(porta, () => console.log(`Servidor rodando ${porta}`))