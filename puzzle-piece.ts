const importedDoc = document.currentScript.ownerDocument;
/*This lines allows the elment to be created by document.createElement()*/

class PuzzlePiece extends HTMLElement {
    constructor() {
        super();
        console.dir(document.currentScript);
        const t = importedDoc.getElementById("piece-puzzle") as HTMLTemplateElement;
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.appendChild(t.content.cloneNode(true));
     }
};
customElements.define("puzzle-piece", PuzzlePiece);
