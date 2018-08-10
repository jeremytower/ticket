import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TicketProvider } from '../../providers/ticket/ticket';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { TicketDetailPage } from '../ticket-detail/ticket-detail';


@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
  
})
export class TicketsPage {
    public allTickets;
    search:string;
  constructor(private ticketProvider: TicketProvider, private http: Http, public navCtrl: NavController) {

    }

  ionViewDidLoad() {
      this.ticketProvider.getTickets()
          .subscribe((response) => {
              this.allTickets = response;
              this.allTickets.forEach(function (item) {
                  var d = item.Date;
                  
                  d = new Date(parseInt(d.substr(6)));
                  
                 d = d.toLocaleDateString("en-US");
                 item.Date = d;
              });
             
          });
  }

  goToTicketDetailPage(ticket) {
      this.navCtrl.push(TicketDetailPage,
          {
              ticketDetails: ticket
          });
  }

  searchTickets() {
      this.ticketProvider.getTickets()
          .subscribe((response) => {
              this.allTickets = response;
              var newList = [];
              var word = this.search.toLowerCase();
              this.allTickets.forEach(function (item) {

                  
                  var d = item.Date;

                  d = new Date(parseInt(d.substr(6)));

                  d = d.toLocaleDateString("en-US");
                  item.Date = d;
                  if (item.Title.toLowerCase().includes(word) || item.Venue.toLowerCase().includes(word) || item.City.toLowerCase().includes(word) ) {
                      console.log("match");
                      newList.push(item);
                  }
              });
              console.log(newList);
              this.allTickets = newList;
          });
  }

}
