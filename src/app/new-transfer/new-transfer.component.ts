import { Component, EventEmitter, Output } from "@angular/core";
import { Transfer } from "../models/transfer.model";
import { MyServiceService } from "../services/my-service.service";

@Component({
    selector:'app-new-transfer',
    templateUrl:'./new-transfer.component.html',
    styleUrls:['./new-transfer.component.scss']
})

export class NewTransferComponent{

    // @Output() whenTransferring = new EventEmitter<any>();
    @Output() errorValues = new EventEmitter<string>();

    value! : number;
    destiny! : number;

    constructor(private service : MyServiceService){}

    transfer_submit(){
        // console.log(`value : ${this.value}`);
        // console.log(`destiny : ${this.destiny}`);

        if(this.itsValid()){
            alert('Requested new transfer');
            // this.whenTransferring.emit({
            //     value : this.value,
            //     destiny : this.destiny
            // })

            const valuesEmit : Transfer = {value : this.value, destiny : this.destiny}
            this.service.add(valuesEmit).subscribe((result) => {
                console.log(result);
                this.clearFields();
            }, (error) => {
                console.log(error);
            })
        }

        // this.clearFields();
    }

    clearFields(){
       this.value = 0;
       this.destiny = 0; 
    }

    private itsValid() {
        const valid = this.value > 0;
        if (!valid) {
            this.errorValues.emit('Enter a valid value');
        }
        return valid;
    }
}