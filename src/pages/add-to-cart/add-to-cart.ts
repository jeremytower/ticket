import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TicketsPage } from '../tickets/tickets';
import { CartVariablesProvider } from'../../providers/cart-variables/cart-variables';

/**
 * Generated class for the AddToCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-to-cart',
  templateUrl: 'add-to-cart.html',
})
export class AddToCartPage {
    qty: any;
    public ticketDetails = {};

    constructor(private cartVariablesProvder: CartVariablesProvider, public navCtrl: NavController, public navParams: NavParams) {
        this.ticketDetails = this.navParams.get("ticketDetails");
       
    }

    addTicketsToCart() {
        
        var item = this.ticketDetails;
        this.cartVariablesProvder.addCartItem(item, this.qty);
        this.navCtrl.push(TicketsPage);
    }

}
