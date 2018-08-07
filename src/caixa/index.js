import {Creator} from '../../dist/nerdcreator';

import {BRow} from '../../components/b-row';
import {BCol} from '../../components/b-col';


import CodeCamera from '../camera/code-camera';
import TableView from '../tableview/index';
import PgCaixa from '../pagamento/pg-caixa';

export class NdCaixa extends Creator{
    render(){
        return (
            `<div>
             
              
               
            
           
              <b-row>
                <table-view></table-view>

              </b-row>
              <b-row>
              <b-col>
                <pg-caixa></pg-caixa>

              </b-col>
              <b-col>
                <code-camera></code-camera>
              </b-col>
              
              </b-row>

            </div>
            `
        )
    }
    callBack(){
      const alert=document.querySelector('b-alert');
      alert.style.widht="30em";
      
    }
}
customElements.define('nd-caixa',NdCaixa);