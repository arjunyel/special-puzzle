var clickCount = 0;
var proverbLength = 0;

class SpecialPuzzle extends HTMLElement {

    constructor() {
        super();
        const t = document.currentScript.ownerDocument.getElementById("container-grid") as HTMLTemplateElement;
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.appendChild(t.content.cloneNode(true));
        shadowRoot.getElementById("container").addEventListener("click", this.childClick);
        shadowRoot.getElementById("guess").addEventListener("click", this.alerty);
     }

      public alerty() {
        alert("hi!");
     }

     private connectedCallback() {
         this.renderGrid();
     }

     private renderGrid() {
            if (this.shadowRoot) {
                const proverb = this.proverb;
                proverbLength = 0;
                clickCount = 0;
                const shadow = this.shadowRoot.getElementById("container") as HTMLElement;
                shadow.innerHTML = "";
                for (let i = 0; i < proverb.length; i++) {
                    const piece = document.createElement("puzzle-piece");
                    piece.value = proverb.charAt(i);
                    piece.notRevealed = true;
                    if (proverb.charAt(i) !== " ") {
                        proverbLength++;
                    }
                    shadow.appendChild(piece);
                }
            }
     }

     private get proverbList(): string[] {
         const proverbList: string[] = [
            "Hope for the best but prepare for the worst",
            "Practice makes perfect",
            "A penny saved is a penny earned",
            "When in Rome do as the Romans do",
            "The early bird catches the worm",
            "The cat is out of the bag",
        ];
         return proverbList;
     }

     private get proverb(): string {
         const list = this.proverbList;
         const proverb = list[Math.floor(Math.random() * list.length)];
         return proverb;
     }

     private childClick(e: Event) {
        if (e.target.notRevealed) {
            if (e.target.value !== " ") {
                e.target.notRevealed = false;
                clickCount++;
                if (clickCount > (proverbLength / 2)) {
                    alert("half way!");
                }
            }
        }
     }

};
customElements.define("special-puzzle", SpecialPuzzle);
