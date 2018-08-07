import {Generator} from '../dist/nerdcreator';

export class BMediaList extends Generator{


   
    create(){
        const media=document.createElement('li');
        const img=document.createElement('img');
        const mediaBody=document.createElement('div');
        const mediaHead=document.createElement('h5');
        const textMedia=document.createElement('span');

        media.classList.add('media');

        
       
        
        mediaBody.classList.add('media-body');
        mediaHead.classList.add('mt-0','mb-1');
        
        img.src=this.getProps('src');
        img.alt=this.getProps('alt');

        mediaHead.textContent=this.getProps('title');

        textMedia.textContent=this.textContent;

        this.textContent="";

        media.appendChild(img);
        media.appendChild(mediaBody);
        mediaBody.appendChild(mediaHead);
        mediaBody.appendChild(textMedia);

        this.appendChild(media);
      
        

    }
}
customElements.define('b-media-list',BMediaList);

export class BMediaHeading extends Generator{


   
    create(){
        const media=document.createElement('div');
        const img=document.createElement('img');
        const mediaBody=document.createElement('div');
        const mediaHead=document.createElement('h5');
        const textMedia=document.createElement('span');

        media.classList.add('media');

        switch (this.getProps('align')) {
            case 'top':
            img.classList.add('align-self-start','mr-3');
                
                break;
            case 'center':
            img.classList.add('align-self-center','mr-3');

            break;
            case 'bottom':
            img.classList.add('align-self-end','mr-3');
                
                break;
            case 'undefined':
            img.classList.add('mr-3');
                
                break;
        
            default:
            img.classList.add('mr-3');
                break;
        }

       
        
        mediaBody.classList.add('media-body');
        mediaHead.classList.add('mt-0');
        
        img.src=this.getProps('src');
        img.alt=this.getProps('alt');

        mediaHead.textContent=this.getProps('title');

        textMedia.textContent=this.textContent;

        this.textContent="";

        media.appendChild(img);
        media.appendChild(mediaBody);
        mediaBody.appendChild(mediaHead);
        mediaBody.appendChild(textMedia);

        this.appendChild(media);
      
        

    }
}
customElements.define('b-media-heading',BMediaHeading);