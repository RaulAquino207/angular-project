import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-new-transfer',
    templateUrl:'./new-transfer.component.html',
    styleUrls:['./new-transfer.component.scss']
})

export class NewTransferComponent{

    @Output() whenTransferring = new EventEmitter<any>();
    @Output() errorValues = new EventEmitter<string>();

    value! : number;
    destiny! : number;

    transfer(){
        // console.log(`value : ${this.value}`);
        // console.log(`destiny : ${this.destiny}`);

        if(this.itsValid()){
            alert('Requested new transfer');
            this.whenTransferring.emit({
                value : this.value,
                destiny : this.destiny
            })
        }

        this.clearFields()
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