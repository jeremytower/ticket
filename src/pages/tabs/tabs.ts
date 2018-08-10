import { Component } from '@angular/core';

import { TicketsPage } from '../tickets/tickets';
import { CartPage } from '../cart/cart';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TicketsPage;
  tab3Root = CartPage;

  constructor() {

  }
}
