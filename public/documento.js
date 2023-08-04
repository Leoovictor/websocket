import { emitirTextoEditor, selecionarDocumento } from "./socket-front-document.js";

const paramentros = new URLSearchParams(window.location.search)
const nomeDocument = paramentros.get("nome")

const textoEditor = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento")

tituloDocumento.textContent = nomeDocument || "Document undefined"

selecionarDocumento(nomeDocument)

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor({TEXTO: textoEditor.value, 
        nomeDocument})
});

function atualizarTextoEditor(texto){
    textoEditor.value = texto
}

export { atualizarTextoEditor }