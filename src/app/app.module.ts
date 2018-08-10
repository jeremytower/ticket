import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TicketsPage } from '../pages/tickets/tickets';
import { CartPage } from '../pages/cart/cart';
import { HomePage } from '../pages/home/home';
import { TicketDetailPage } from '../pages/ticket-detail/ticket-detail';
import { AddToCartPage } from '../pages/add-to-cart/add-to-cart';
import { CheckoutPage } from '../pages/checkout/checkout';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { TicketProvider } from '../providers/ticket/ticket';

import { HttpClientModule } from '@angular/common/http';
import { CartVariablesProvider } from '../providers/cart-variables/cart-variables'; 

@NgModule({
  declarations: [
    MyApp,
    TicketsPage,
    CartPage,
      HomePage,
      TicketDetailPage,
    AddToCartPage,
      TabsPage,
      CheckoutPage
  ],
  imports: [
      HttpModule,
      HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TicketsPage,
    CartPage,
    HomePage,
      TabsPage,
      TicketDetailPage,
      AddToCartPage,
      CheckoutPage
      
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TicketProvider,
    TicketProvider,
    CartVariablesProvider
  ]
})
export class AppModule {}
