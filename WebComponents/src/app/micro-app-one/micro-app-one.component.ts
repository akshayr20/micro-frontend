import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-micro-app-one',
	templateUrl: './micro-app-one.component.html',
	styleUrls: ['./micro-app-one.component.scss']
})
export class MicroAppOneComponent {
	@Input() title: string;
}
