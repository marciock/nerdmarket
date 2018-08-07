import {Creator} from '../../dist/nerdcreator';


export class TableView extends Creator{

    render(){
        return (
            `
            <div>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <td>Código</td>
                    <td>Produto</td>
                    <td>Marcar</td>
                    <td>Medida</td>
                    <td>Quantidade</td>
                    <td>Valor Unit.</td>
                    <td>Subtotal</td>
                  </tr>

                </thead>
          </table>
          <div id="body">
          <table class="table table-striped">
              <tbody>
       
                </tbody>
              </table>
              </div>
            </div>
            
            `
        )
    }
    callBack(){
      //const div=this.querySelector('div');
      const body=this.querySelector('#body');
      body.style.height='30em';

        body.style.overflowY='scroll';
    }
}
customElements.define('table-view',TableView);