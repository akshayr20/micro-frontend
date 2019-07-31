import { BrowserModule } from '@angular/platform-browser';

import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent, ButtonComponent, AvatarComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [AvatarComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const avatar = createCustomElement(AvatarComponent, { injector: this.injector });
    customElements.define('app-avatar', avatar);
  }
}
