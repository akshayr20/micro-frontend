import { BrowserModule } from '@angular/platform-browser';

import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent, ButtonComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [ButtonComponent],
  bootstrap:[AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const button = createCustomElement(ButtonComponent, { injector: this.injector });
    customElements.define('app-button', button);
  }
}
