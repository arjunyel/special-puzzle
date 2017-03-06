class SpecialPuzzle extends HTMLElement{

    constructor(){
        super();
        const t = <HTMLTemplateElement>document.currentScript.ownerDocument.getElementById('container-grid');
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(t.content.cloneNode(true));
     }

     connectedCallback() {
         console.log("COnnectd!")
         this.append();
     }

     /**
      * append
      */
     public append() {
            if(this.shadowRoot){
                console.log("shadow root found")
                const output = this.shadowRoot.querySelector('#proverbOut');
                if(output){
                    console.log("out found")
                    output.textContent = this.proverb;
                }
                /*const addToGrid = document.createElement("puzzle-piece");
                document.getElementsByTagName("special-puzzle")[0].appendChild(addToGrid);*/
            }
             /*const output = document.createElement("p");
             output.textContent = this.proverb;
             this.shadowRoot.appendChild(output);*/

        
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