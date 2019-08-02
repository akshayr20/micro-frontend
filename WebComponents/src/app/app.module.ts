import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { createCustomElement } from '@angular/elements';
import { MicroAppOneComponent } from './micro-app-one/micro-app-one.component';
import { MicroAppTwoComponent } from './micro-app-two/micro-app-two.component';

@NgModule({
	declarations: [AppComponent, AvatarComponent, MicroAppOneComponent, MicroAppTwoComponent],
	imports: [BrowserModule],
	providers: [],
	entryComponents: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	// constructor(private injector: Injector) {}

	// ngDoBootstrap() {
	// 	const button = createCustomElement(ButtonComponent, { injector: this.injector });
	// 	customElements.define('app-button', button);
	// }
}
