const listaDocumento = document.getElementById("lista-documentos")
import "./socket-front-index.js"


function inserirLinkDocumento(nomeDocumento){
    listaDocumento.innerHTML += `
    <a href="documento.html?nome=${nomeDocumento}" class="list-group-item list-group-item-action">
        ${nomeDocumento}
    </a>
    `
}

inserirLinkDocumento("JS")