import {Generator} from '../dist/nerdcreator';

export class BFluid extends Generator{

    create(){
        let div=document.createElement('div');
      //  div.className.add('container');
        div.classList.add('container-fluid');
        console.log(div.classList);
        div.innerHTML=this.innerHTML;
        this.innerHTML="";
        this.appendChild(div);
        

    }
}

customElements.define('b-fluid',BFluid);