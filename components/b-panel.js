import {Generator} from '../dist/nerdcreator';

export class BPanel extends Generator{

    create(){

        const card=document.createElement('div');
        card.classList.add('card');
        card.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(card);
    }
}
customElements.define('b-panel',BPanel);


export class BPanelHeader extends Generator{

    create(){
        const cardHeader=document.createElement('div');
        const cardTitle=document.createElement('h5');

        cardHeader.classList.add('card-header');
       

        cardHeader.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(cardHeader);
    }
}
customElements.define('b-panel-header', BPanelHeader);

export class BPanelFooter extends Generator{

    create(){
        const cardFooter=document.createElement('div');
        cardFooter.classList.add('card-footer');
        cardFooter.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(cardFooter);


    }
}
customElements.define('b-panel-footer',BPanelFooter);

export class BPanelBody extends Generator{

    create(){
        const cardBody=document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(cardBody);


    }
}
customElements.define('b-panel-body',BPanelBody);
