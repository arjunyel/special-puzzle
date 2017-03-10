const importedDoc = document.currentScript.ownerDocument;
/*This lines allows the elment to be created by document.createElement()*/

class PuzzlePiece extends HTMLElement {

    constructor() {
        super();
        const t = importedDoc.getElementById("piece-puzzle") as HTMLTemplateElement;
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.appendChild(t.content.cloneNode(true));
     }

     static get oberservedAttributes() {
         return ["value", "notRevealed"];
     }

     public set value(v: string) {
         if (v) {
             this.setAttribute("value", v);
             if (this.value === " ") {
                 console.log("found space");
                 this.shadowRoot.querySelector(".box").className = "space";
             }
             this.shadowRoot.querySelector("#out").textContent = this.getAttribute("value");
         } else {
             this.removeAttribute("value");
         }
     }

     public get value(): string {
        const val = this.getAttribute("value");
        if (val) {
            return val;
        }
        return "";
     }

     public get notRevealed() {
         return this.hasAttribute("notRevealed");
     }

     public set notRevealed(val) {
         if (val) {
             this.setAttribute("notRevealed", "");
         } else {
             this.removeAttribute("notRevealed");
             this.shadowRoot.querySelector("#out").className = "";
         }
     }

     private attributeChangedCallback(attr: string, oldValue: string|boolean, newValue: string|boolean) {
         if (attr === "value" ) {
             this.value = newValue as string;
         } else if ((newValue === true || newValue === false) && attr === "notRevealed") {
             this.notRevealed = newValue;
         }
     }

};
customElements.define("puzzle-piece", PuzzlePiece);
