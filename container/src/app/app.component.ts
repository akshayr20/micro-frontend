import { Component } from '@angular/core';
import { RouterService } from './router.service';

@Component({
	selector: 'orxe-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(public routerService: RouterService) {}
}
