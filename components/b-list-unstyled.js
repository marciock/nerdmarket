import {Generator} from '../dist/nerdcreator';

export class BListUnstyled extends Generator{

    create(){
        const listUn=document.createElement('ul');

        listUn.classList.add('list-unstyled');

        listUn.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(listUn);


    }
}

customElements.define('b-list-un', BListUnstyled);