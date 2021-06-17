import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  transfer_infos_list: any[];

  constructor() { 
    this.transfer_infos_list = [];
  }

  get infos(){
    return this.transfer_infos_list;
  }

  add(transfer_infos : any){
    this.hydrate(transfer_infos);
    this.transfer_infos_list?.push(transfer_infos);
  }

  private hydrate(transfer_infos : any){
    transfer_infos.date = new Date();
  }
  

}
