import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AppRoutingModule } from './app.route';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, SearchHotelComponent, UserProfileComponent, CheckoutComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private injector: Injector) {}
  // ngDoBootstrap() {
  //   const myCustomElement = createCustomElement(AppComponent, { injector: this.injector });
  //   customElements.define('app-hotel-booking', myCustomElement);
  // }
}
