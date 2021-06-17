import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from '../models/transfer.model';
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
    this.service.infos().subscribe((transfer_infos : Transfer[]) => {
      console.table(transfer_infos);
      this.transfer_infos = transfer_infos
    })
  }

}
