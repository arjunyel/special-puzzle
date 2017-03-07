class SpecialPuzzle extends HTMLElement{

    constructor(){
        super();
        const t = <HTMLTemplateElement>document.currentScript.ownerDocument.getElementById('container-grid');
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(t.content.cloneNode(true));
     }

     connectedCallback() {
         this.renderGrid();
     }

     /**
      * renderShadow
      */
     public renderGrid() {
            if(this.shadowRoot){
                const proverb = this.proverb;
                console.log(proverb);
                for(let i = 0; i < proverb.length; i++){
                    const piece = document.createElement('p');
                    piece.textContent = proverb.charAt(i);
                    const shadow = this.shadowRoot;
                    shadow.getElementById("container").appendChild(piece);
                }
            }
     }

     public get proverbList() : string[] {
         const proverbList: string[] = [
            "Hope for the best but prepare for the worst",
            "Practice makes perfect",
            "A penny saved is a penny earned",
            "When in Rome do as the Romans do",
            "The early bird catches the worm",
            "The cat is out of the bag"
        ];
        return proverbList;
     }
     
     public get proverb() : string {
         const list = this.proverbList
         const proverb = list[Math.floor(Math.random()*list.length)];
         return proverb;
     }
};
customElements.define('special-puzzle', SpecialPuzzle);