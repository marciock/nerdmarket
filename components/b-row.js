import {Generator} from '../dist/nerdcreator';


export class BRow extends Generator{
   
   
    create(){
        let div=document.createElement('div');
      //  div.className.add('container');
        div.classList.add('row');
        console.log(div.classList);
        div.innerHTML=this.innerHTML;
        this.innerHTML="";
        this.appendChild(div);
        

    }
}
customElements.define('b-row', BRow);