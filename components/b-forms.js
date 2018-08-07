import {Generator} from '../dist/nerdcreator';

export class BInput extends Generator{

    create(){

        const div=document.createElement('div');
        const label=document.createElement('label');
        const input=document.createElement('input');

        const type=this.getProps('type');
        const id=this.getProps('id');
        const placeholder=this.getProps('placeholder');
        const min=this.getProps('min');
        const max=this.getProps('max');

        div.classList.add('form-group');
        input.classList.add('form-control');
        
        if(id !==null){
            label.for=id;
            input.id=id;
        }
        if(type !==null){
            input.type=type;
        }else{
            input.type='text';
        }

        if(placeholder !==null){
            input.placeholder=placeholder;
        }

        label.innerHTML=this.innerHTML;
        this.innerHTML=null;

        div.appendChild(label);
        div.appendChild(input);

        this.appendChild(div);

        let mydiv=this.querySelector('div');
        mydiv.value=this.getProps('value');

        let myinput=this.querySelector('input');
        myinput.addEventListener('change',()=>{
            this.value=myinput.value;
        })
        
      
    }
}
customElements.define('b-input',BInput);

export class BArea extends Generator{
    create(){

        const div=document.createElement('div');
        const label=document.createElement('label');
        const area=document.createElement('textarea');

        const id=this.getProps('id');
        const rows=this.getProps('rows');
       
                
        div.classList.add('form-group');
        area.classList.add('form-control');

        if(id !==null){

            labe.for=id;
            area.id=id;
        }
        if(rows !==null){
            area.rows=rows;
        }
       
            label.innerHTML=this.innerHTML;
           this.innerHTML=null;

           div.appendChild(label);
           div.appendChild(area);
           this.appendChild(div);

           let mydiv=this.querySelector('div');
           mydiv.value=this.getProps('value');
   
           let myarea=this.querySelector('area');
           myarea.addEventListener('change',()=>{
               this.value=myarea.value;
           })


    }
}
customElements.define('b-area',BArea);



