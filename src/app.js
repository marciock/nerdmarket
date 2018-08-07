import '@webcomponents/custom-elements';


import {Creator} from '../dist/nerdcreator';
import NdCaixa from './caixa/index';
import {BContainer} from '../components/b-container';

export class Apps extends Creator{

  
  render(){
    
  
    return (
      `<div>
      
      
        <b-container>
          <nd-caixa></nd-caixa>

        </b-container>

        
      </div>`
    )
  }

  
  }
  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-app',Apps);
  
 
      
  
  
  
  
  
  