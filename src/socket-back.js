import io from "./servidor.js"

io.on("connection", (socket) => {
    console.log(`cliente se conectou id:${socket.id}`)

    socket.on("texto_editor", (texto) => {
        socket.broadcast.emit("texto_editor_clientes", texto)
    })
})

