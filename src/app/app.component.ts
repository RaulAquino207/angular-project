import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  transfer_infos? : any[] = [];

  transfer($event: any){
    console.log($event);
    const values = {...$event, date: new Date()};
    this.transfer_infos?.push(values);
  }

  exibirModalErro(){
    alert('Provide positive values');
  }
}
