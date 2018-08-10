import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CartVariablesProvider } from'../../providers/cart-variables/cart-variables';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { CheckoutPage } from '../../pages/checkout/checkout';
import {  HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
    public cartItems = [];
    public orderTotal;
  constructor(public modalController: ModalController, private cartVariablesProvider: CartVariablesProvider, private http: Http, public navCtrl: NavController) {
      
  }

  ionViewDidLoad() {
      
      
  }
  ionViewWillEnter() {
      this.orderTotal = this.cartVariablesProvider.getOrderTotal();
      this.cartItems = this.cartVariablesProvider.getCartItems();
  }

  removeItem(id) {
      this.cartVariablesProvider.removeItem(id);
      this.orderTotal = this.cartVariablesProvider.getOrderTotal();
  }

  removeAllItems() {
      this.cartVariablesProvider.removeAllItems();
      this.orderTotal = this.cartVariablesProvider.getOrderTotal();
      
  }
  submitOrder() {
      let openCheckoutModal = this.modalController.create(CheckoutPage);
      openCheckoutModal.present();
      this.navCtrl.push(HomePage);
  }
  }

