import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transfer } from '../models/transfer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  // transfer_infos_list: any[];
  url = 'http://localhost:3000';

  constructor(private httpClient : HttpClient) { 
    // this.transfer_infos_list = [];
  }

  // get infos(){
  //   return this.transfer_infos_list;
  // }

  infos() : Observable<Transfer[]>{
    return this.httpClient.get<Transfer[]>(`${this.url}/transfer`);
  }

  add(transfer_infos : Transfer) : Observable<Transfer>{
    this.hydrate(transfer_infos);
    // this.transfer_infos_list?.push(transfer_infos);
    return this.httpClient.post<Transfer>(`${this.url}/transfer`, transfer_infos);
  }

  private hydrate(transfer_infos : any){
    transfer_infos.date = new Date();
  }
  

}
