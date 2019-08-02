import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-micro-app-two',
	templateUrl: './micro-app-two.component.html',
	styleUrls: ['./micro-app-two.component.scss']
})
export class MicroAppTwoComponent {
	@Input() title: string;
}
