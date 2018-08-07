import {Generator} from '../dist/nerdcreator';

export class BBadge extends Generator{

    create(){
      
        const span=document.createElement('span');

        switch (this.getProps('type')) {
            case 'primary':
                span.classList.add('badge','badge-primary')
                break;
            case 'secondary':
                span.classList.add('badge','badge-secondary')
                break;
            case 'success':
                span.classList.add('badge','badge-success')
                break;
            case 'danger':
                span.classList.add('badge','badge-danger')
                break;
            case 'warning':
                span.classList.add('badge','badge-warning')
                break;
            case 'info':
                span.classList.add('badge','badge-info')
                break;
            case 'light':
                span.classList.add('badge','badge-light')
                break;
            case 'dark':
                span.classList.add('badge','badge-dark')
                break;
            case 'undefined':
                span.classList.add('badge','badge-primary')
                break;
        
            default:
            span.classList.add('badge','badge-primary')
                break;
        }
       

        span.innerHTML=this.innerHTML;
        this.innerHTML=null;
        
        this.appendChild(span);

    }
}

customElements.define('b-badge',BBadge);


export class BBadgeScale extends Generator{

    create(){
      //  const div=document.createElement('div');
        const span=document.createElement('span');

        switch (this.getProps('type')) {
            case 'primary':
                span.classList.add('badge','badge-primary')
                break;
            case 'secondary':
                span.classList.add('badge','badge-secondary')
                break;
            case 'success':
                span.classList.add('badge','badge-success')
                break;
            case 'danger':
                span.classList.add('badge','badge-danger')
                break;
            case 'warning':
                span.classList.add('badge','badge-warning')
                break;
            case 'info':
                span.classList.add('badge','badge-info')
                break;
            case 'light':
                span.classList.add('badge','badge-light')
                break;
            case 'dark':
                span.classList.add('badge','badge-dark')
                break;
            case 'undefined':
                span.classList.add('badge','badge-primary')
                break;
        
            default:
            span.classList.add('badge','badge-primary')
                break;
        }
        span.textContent=this.getProps('badge');
        let conca=`h${this.getProps('h')}`;
        let h=document.createElement(conca);

        h.innerHTML=this.innerHTML;
        this.innerHTML=null;
        h.appendChild(span);
        this.appendChild(h);

    }
}

customElements.define('b-badge-scale',BBadgeScale);

export class BBadgeLink extends Generator{

    create(){
      
        const a=document.createElement('a');

        switch (this.getProps('type')) {
            case 'primary':
                a.classList.add('badge','badge-primary')
                break;
            case 'secondary':
                a.classList.add('badge','badge-secondary')
                break;
            case 'success':
                a.classList.add('badge','badge-success')
                break;
            case 'danger':
                a.classList.add('badge','badge-danger')
                break;
            case 'warning':
                a.classList.add('badge','badge-warning')
                break;
            case 'info':
                a.classList.add('badge','badge-info')
                break;
            case 'light':
                a.classList.add('badge','badge-light')
                break;
            case 'dark':
                a.classList.add('badge','badge-dark')
                break;
            case 'undefined':
                a.classList.add('badge','badge-primary')
                break;
        
            default:
            a.classList.add('badge','badge-primary')
                break;
        }
       
        a.href=this.getProps('href');
        a.innerHTML=this.innerHTML;
        this.innerHTML=null;
        
        this.appendChild(a);

    }
}

customElements.define('b-badge-link',BBadgeLink);

export class BPillBadge extends Generator{

    create(){
      
        const span=document.createElement('span');

        switch (this.getProps('type')) {
            case 'primary':
                span.classList.add('badge','badge-pill','badge-primary')
                break;
            case 'secondary':
                span.classList.add('badge','badge-pill','badge-secondary')
                break;
            case 'success':
                span.classList.add('badge','badge-pill','badge-success')
                break;
            case 'danger':
                span.classList.add('badge','badge-pill','badge-danger')
                break;
            case 'warning':
                span.classList.add('badge','badge-pill','badge-warning')
                break;
            case 'info':
                span.classList.add('badge','badge-pill','badge-info')
                break;
            case 'light':
                span.classList.add('badge','badge-pill','badge-light')
                break;
            case 'dark':
                span.classList.add('badge','badge-pill','badge-dark')
                break;
            case 'undefined':
                span.classList.add('badge','badge-pill','badge-primary')
                break;
        
            default:
            span.classList.add('badge','badge-pill','badge-primary')
                break;
        }
       

        span.innerHTML=this.innerHTML;
        this.innerHTML=null;
        
        this.appendChild(span);

    }
}

customElements.define('b-pill-badge',BPillBadge);