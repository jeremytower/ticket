import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CartVariablesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartVariablesProvider {
   private cartItems = [];

  constructor(public http: HttpClient) {
      this.cartItems = [];
    }

  addCartItem(item, qty) {
      var newItem = true;
      qty = parseInt(qty);
      this.cartItems.forEach(function (obj) {
          if (obj.Title == item.Title) {
              newItem = false;
              obj.Quantity += qty;
              obj.Total = (obj.Quantity * obj.Price); 
          }
      });

      if (newItem == true) {
          item.Quantity = qty;
          item.Total = (item.Price * qty);
          this.cartItems.push(item);
      }
      
      
      
  }

  getCartItems() {
      return this.cartItems;
  }

  removeItem(id) {
      
      this.cartItems.splice(id, 1);
      
  }

  removeAllItems() {
      this.cartItems.splice(0, this.cartItems.length);
  }

  getOrderTotal() {
      var total = 0;
      this.cartItems.forEach(function (obj) {
          total += obj.Total;
      });
      return total;

  }

}
