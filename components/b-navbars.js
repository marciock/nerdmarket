import {Generator} from '../dist/nerdcreator';

export class BNavBar extends Generator{

    create(){
        const nav=document.createElement('nav');
        const span=document.createElement('span');
        const img=document.createElement('img');
        const button=document.createElement('button');
        const spanT=document.createElement('span');
        const a=createElement('a');

        const src=this.getProps('src');
        const href=this.getProps('href');
        const div=document.createElement('div');
        const title=this.getProps('title');
        const type=this.getProps('type');



        if( src !==null){
           
            img.src=src;
            img.classList.add('d-inline-block','align-top');
            a.apppendChild(img);
        }

        if(href !==null){
            a.href=href;
            nav.appendChild(a);

        }else{
            a.href="#";
            nav.appendChild(a);
        }

        if(title !==null){
            span.innerHTML=title;
            nav.apppendChild(span);
        }

        switch (type) {
            case 'light':
                nav.classList.add('bg-light');
                
                break;
            case 'primary':
            nav.classList.add('bg-primary');
            
            break;
            case 'secundary':
                nav.classList.add('bg-secundary');
                
            break;
            case 'danger':
                nav.classList.add('bg-danger');
                
            break;
            case 'success':
                nav.classList.add('bg-success');
                
            break;
            case 'dark':
                nav.classList.add('bg-dark');
                
            break;
    
            default:
            nav.classList.add('bg-light');
                break;
        }


        button.type='button';
        button.setAttribute('data-toogle','collapse');
        button.setAttribute('data-target','#navbarText');
        button.setAttribute('data-target','#navbarText');
        button.setAttribute('aria-controls','navbarText');
        button.setAttribute('aria-expanded','false');
        button.setAttribute('aria-label','Toggle navigation');
        button.classList.add('navbar-toggler');
 
        spanT.classList.add('navbar-toggler-icon');
 
        button.appendChild(spanT);


        nav.classList.add('navbar', 'navbar-expand-lg', 'navbar-light');

        div.classList.add('collapse' ,'navbar-collapse');
        div.id='navbarText';

        div.innerHTML=this.innerHTML;
        this.innerHTML=null;

        nav.appendChild(button);
        nav.appendChild(div);


    }
}
customElements.define('b-navbar',BNavBar);



export class BNavBarNav extends Generator{

    create(){

        const ul=document.createElement('ul');
        ul.classList.add('navbar-nav', 'mr-auto');

        ul.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(ul);
    }
}
customElements.define('b-navbar-nav',BNavBarNav);

export class BNavItem extends Generator{

    create(){
        const li=document.createElement('li');
        const a=document.createElement('a');

        const href=this.getProps('href');
        const status=this.getProps('satus');

        li.classList.add('nav-item');
        a.classList.add('nav-link');

        if(href !==nul){
            a.href=href;
        }else{
            a.href='#';
        }
        if(status !==null){
            li.classList.add(status);
        }
        a.innerHTML=this.innerHTML;

        this.innerHTML=null;
        li.appendChild(a);

        this.appendChild(li);
        

    }
}
customElements.define('b-nav-item',BNavItem);