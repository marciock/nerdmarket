import {Generator}  from '../dist/nerdcreator';

export class BCol extends Generator{

    create(){
        const div=document.createElement('div');

        const n=this.getProps('n');
        let nArray=new Array();

        div.classList.add('col');

        if(n !==null){

            nArray=n.split(' ');
            nArray.map((f)=>{
                div.classList.add(f);
            })
            
        }
        
        div.innerHTML=this.innerHTML;
        this.innerHTML="";
        this.appendChild(div);
        

    }
   

}
customElements.define('b-col',BCol);