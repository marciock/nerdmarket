import {Creator} from '../../dist/nerdcreator';

import {BRow} from '../../components/b-row';
import {BCol} from '../../components/b-col';
import {BButtonOutline} from '../../components/b-buttons';
import {BPanel,BPanelBody,BPanelFooter,BPanelHeader} from '../../components/b-panel';


import Instascan from 'instascan';

export class CodeCamera extends Creator{

    render(){
        return (
            `
             <b-panel>
             <b-panel-header>
                Leitor
              </b-panel-header>
              <b-panel-body>
              
              </b-panel-body>
                <video id="preview"></video>
              <b-panel-footer>
               <b-row id="foot">
                <b-col><b-btn-otl type="success" id="leitor">Leitor</b-btn-otl></b-col>
                <b-col><b-btn-otl type="warning" id="parar">Parar</b-btn-otl></b-col>
               </b-row>
              </b-panel-footer>
             </b-panel>
             `
        )
    }
    callBack(){
     const cancelar=this.querySelector('#parar');
     const foot=this.querySelector('#foot');

     foot.style.marginTop='2em';
        const ok=this.querySelector("#leitor");

        let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
         scanner.addListener('scan', function (content) {
         console.log(content);
        });

      ok.addEventListener('click',()=>{
       Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
        scanner.start(cameras[0]);
       } else {
        console.error('No cameras found.');
       }
       }).catch(function (e) {
        console.error(e);
       });

      })
       
        cancelar.addEventListener('click',()=>{
            scanner.stop();
        })
      
    }
}
customElements.define('code-camera',CodeCamera);