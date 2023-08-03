import { emitirTextoEditor } from "./socket-front-document.js";


const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor(textoEditor.value)
});

function atualizarTextoEditor(texto){
    textoEditor.value = texto
}

export { atualizarTextoEditor }