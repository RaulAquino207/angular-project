import { Component } from '@angular/core';
import { MyServiceService } from './services/my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  constructor(private service : MyServiceService){

  }

  transfer($event: any){
    console.log($event);
    this.service.add($event);
  }

  exibirModalErro(){
    alert('Provide positive values');
  }
}
