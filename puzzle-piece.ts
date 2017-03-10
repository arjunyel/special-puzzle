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
         return ["value", "revealed"];
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

     public get revealed() {
         return this.hasAttribute("revealed");
     }

     public set revealed(val) {
         if (val) {
             this.setAttribute("revealed", "");
         } else {
             this.removeAttribute("revealed");
         }
     }

     private attributeChangedCallback(attr: string, oldValue: string|boolean, newValue: string|boolean) {
         if (attr === "value" ) {
             this.value = newValue as string;
         } else if ((newValue === true || newValue === false) && attr === "revealed") {
             this.revealed = newValue;
         }
     }
};
customElements.define("puzzle-piece", PuzzlePiece);
