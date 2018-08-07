import {Generator} from '../dist/nerdcreator';

export class BContainer extends Generator{


   
    create(){
        let div=document.createElement('div');
      //  div.className.add('container');
        div.classList.add('container');
   
        div.innerHTML=this.innerHTML;
        this.innerHTML="";
        this.appendChild(div);
        

    }
}
customElements.define('b-container',BContainer);