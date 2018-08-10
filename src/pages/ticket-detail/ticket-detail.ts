import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddToCartPage } from '../add-to-cart/add-to-cart';

/**
 * Generated class for the TicketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-ticket-detail',
  templateUrl: 'ticket-detail.html',
})
export class TicketDetailPage {
    public ticketDetails = {};

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.ticketDetails = this.navParams.get("ticketDetails");
     
  }


  goToAddToCartPage(ticket) {
      this.navCtrl.push(AddToCartPage,
          {
              ticketDetails: ticket
          });
  }

}
