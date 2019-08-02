import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { ProfileComponent } from './profile/profile.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.route';

@NgModule({
  declarations: [AppComponent, SearchFlightComponent, ProfileComponent, CheckoutComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const myCustomElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-flight-booking', myCustomElement);
  }
}
