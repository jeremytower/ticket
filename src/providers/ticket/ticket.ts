import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TicketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TicketProvider {

  constructor(public http: HttpClient) {
    
  }
  getTickets() {
      return this.http.get("http://localhost:64675/Tickets/GetTicketsJson");
  }
}
