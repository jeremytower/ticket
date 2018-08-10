import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartVariablesProvider } from'../../providers/cart-variables/cart-variables';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
    public total = 0;

    constructor(private cartVariablesProvider: CartVariablesProvider, private http: Http, public navCtrl: NavController) {
  }

    ionViewDidLoad() {
        this.total = this.cartVariablesProvider.getOrderTotal();
        this.cartVariablesProvider.removeAllItems();
  }

    closeModal() {
        this.navCtrl.pop();
    }
}
