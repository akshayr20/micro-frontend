import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent {
  @Input() label = '';
  @Input() className: 'primary' | 'success' | 'danger' = 'primary';
  @Output() action = new EventEmitter<string>();
}
