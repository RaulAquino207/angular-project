import { Component, Input, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  transfer_infos? : any[];

  constructor(private service : MyServiceService) { }

  ngOnInit(): void {
    this.transfer_infos = this.service.infos;
  }

}
