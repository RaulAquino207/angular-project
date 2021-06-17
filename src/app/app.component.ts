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

  exibirModalErro(){
    alert('Provide positive values');
  }
}
