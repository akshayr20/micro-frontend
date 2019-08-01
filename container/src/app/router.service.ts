import { Injectable } from '@angular/core';

export interface Attributes {
	[key: string]: string;
}

@Injectable({
	providedIn: 'root'
})
export class RouterService {
	constructor() {}
	public loadElement(tagSelector, id, attributes: Attributes = null) {
		if (tagSelector) {
			const wrapper = document.createElement('div');
			wrapper.setAttribute('id', tagSelector);
			const webComp = document.createElement(tagSelector);
			if (attributes) {
				Object.keys(attributes).forEach(key => {
					webComp.setAttribute(key, attributes[key]);
				});
			}
			wrapper.appendChild(webComp);
			document.getElementById(id).appendChild(wrapper);
		}
	}

	public removeElement(tagSelector) {
		if (tagSelector) {
			const wrapper = document.getElementById(tagSelector);
			if (wrapper) {
				wrapper.remove();
			}
		}
	}
}
