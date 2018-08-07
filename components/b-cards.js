import {Generator} from '../dist/nerdcreator';
import BButton from './b-button';


export class BCard extends Generator{

    create(){

        const card=document.createElement('div');
        const img=document.createElement('img');
        const cardBody=document.createElement('div');
        const cardTitle=document.createElement('h5');
        const cardText=document.createElement('p');
        const btn=document.createElement('b-btn');

        card.classList.add('card');
        card.style.width='18rem';

        img.classList.add('card-img-top');
        img.src=this.getProps('src');
        img.alt=this.getProps('alt');

        cardBody.classList.add('card-body');
        cardTitle.classList.add('card-title');
        cardText.classList.add('card-text');

        cardTitle.textContent=this.getProps('title');
        cardText.textContent=this.textContent;
        this.textContent=null;
        btn.type=this.getProps('type');
        btn.innerHTML=this.getProps('btn');


        card.appendChild(img);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(btn);
        card.appendChild(cardBody);


        this.appendChild(card);



    }
}
customElements.define('b-card',BCard);
export class BCardText extends Generator{

    create(){
        const card=document.createElement('div');
        const cardBody=document.createElement('div');
        const cardTitle=document.createElement('h5');
        const cardSubTitle=document.createElement('h6');
        const textCard=document.createElement('p');
        const link=document.createElement('a');
        const otherLink=document.createElement('a');

        card.classList.add('card');
        cardBody.classList.add('card-body');
        cardTitle.classList.add('card-title');
        cardSubTitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
        textCard.classList.add('card-text');
        link.classList.add('card-link');
        otherLink.classList.add('card-link');

        card.style.width='18rem';

        cardTitle.textContent=this.getProps('title');
        cardSubTitle.textContent=this.getProps('subtitle');
        textCard.innerHTML=this.innerHTML;

        this.innerHTML=null;
        link.textContent=this.getProps('text-link');
        link.href=this.getProps('url');
        otherLink.textContent=this.getProps('text-outher-link');
        otherLink.href=this.getProps('outher-url');


        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardSubTitle);
        cardBody.appendChild(textCard);
        cardBody.appendChild(link);
        cardBody.appendChild(otherLink);

        card.appendChild(cardBody);

        this.appendChild(card);


    }
}

customElements.define('b-card-text',BCardText);

export class BCardImage extends Generator{

    create(){

        const card=document.createElement('div');
        const img=document.createElement('img');
        const cardBody=document.createElement('div');
        const cardText=document.createElement('p');

        card.classList.add('card');
        card.style.width='18rem';
        
        img.classList.add('card-img-top');
        img.src=this.getProps('src');
        img.alt=this.getProps('alt');

        cardBody.classList.add('card-body');
        cardText.classList.add('card-text');

        cardText.innerHTML=this.innerHTML;
        this.innerHTML=null;

        card.appendChild(img);
        card.appendChild(cardBody);

        cardBody.appendChild(cardText);

        this.appendChild(card);

        


    }
}
customElements.define('b-card-img',BCardImage);