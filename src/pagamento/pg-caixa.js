import {Creator} from '../../dist/nerdcreator';
import {BInput} from '../../components/b-forms';
import {BButtonOutline} from '../../components/b-buttons';

export class PgCaixa extends Creator{
    render(){
        return (
             `
             <div>
                <b-input id="pagamento" type="text">Pagamento</b-input>
                <b-input id="troco" type="text">Troco</b-input>
                <b-btn-otl type="success">Pagar</b-btn-otl>

             </div>

             `
        )
    }
}
customElements.define('pg-caixa',PgCaixa);