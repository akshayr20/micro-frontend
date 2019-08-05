// @ts-check
/**
 * @description
 * @class Outlet
 * @extends {HTMLElement}
 * https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks
 * Custom Outlet Element
 */
class Outlet extends HTMLElement {
	// Specify observed attributes so that
	// attributeChangedCallback will work
	static get observedAttributes() {
		return ['tag', 'id'];
	}
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	/**
	 * @description
	 * lifecycle hook
	 * The attributeChangedCallback() callback is run whenever one of the element's attributes is changed in some way
	 */

	attributeChangedCallback(name, oldValue, newValue) {
		switch (name) {
			case 'tag':
				this.loadElement();
				break;
		}
	}

	/**
	 * @description
	 * Loads the custom web component in DOM
	 */
	loadElement() {
		this.removeElement();
		const id = this.getAttribute('id');
		const tagSelector = this.getAttribute('tag');

		if (tagSelector) {
			const webComp = document.createElement(tagSelector);
			webComp.setAttribute('id', tagSelector);
			this.shadow.appendChild(webComp);
			const root = document.getElementById(id);
			root.appendChild(this.shadow);
		}
	}

	/**
	 * @description
	 * Finds and Removes the Web Component from the DOM
	 */
	removeElement() {
		const tagSelector = this.getAttribute('tag');
		if (tagSelector) {
			const webComp = document.getElementById(tagSelector);
			if (webComp) {
				webComp.remove();
			}
		}
	}

	/**
	 * @description
	 * disconnectedCallback: Invoked each time the custom element is disconnected from the document's DOM.
	 */
	disconnectedCallback() {
		this.removeElement();
	}
}

try {
	customElements.define('orxe-outlet', Outlet);
} catch (err) {
	const h3 = document.createElement('h3');
	h3.innerHTML = "This site uses webcomponents which don't work in all browsers! Try this site in a browser that supports them!";
	document.body.appendChild(h3);
}
