import {Creator} from '../dist/nerdcreator';

export class BCols extends Creator{

    render(){
        return
        (
            `
            <div class="">
                ${this.innerHTML}
            </div>
            `
        )
    }
}