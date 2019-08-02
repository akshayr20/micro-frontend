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
		return ['tag', 'id', 'label'];
	}
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: 'open' });
		this.wrapper = document.createElement('div');
		shadow.appendChild(this.wrapper);
	}

	/**
	 * @description
	 * connectedCallback: Invoked each time the custom element is appended into a document-connected element
	 */
	connectedCallback() {
		this.loadElement();
	}

	/**
	 * @description
	 * lifecycle hook
	 * The attributeChangedCallback() callback is run whenever one of the element's attributes is changed in some way
	 */
	attributeChangedCallback() {
		this.loadElement();
	}

	/**
	 * @description
	 * Loads the custom web component in DOM
	 */
	loadElement() {
		this.removeElement();
		const id = this.getAttribute('id');
		const label = this.getAttribute('label');
		const tagSelector = this.getAttribute('tag');

		if (tagSelector) {
			this.wrapper.setAttribute('id', tagSelector);
			const webComp = document.createElement(tagSelector);
			webComp.setAttribute('label', label);
			this.wrapper.appendChild(webComp);
			document.getElementById(id).appendChild(this.wrapper);
		}
	}

	/**
	 * @description
	 * Finds and Removes the Web Component from the DOM
	 */
	removeElement() {
		const tagSelector = this.getAttribute('tag');
		if (tagSelector) {
			const wrapper = document.getElementById(tagSelector);
			if (wrapper) {
				let child = wrapper.lastElementChild;
				while (child) {
					wrapper.removeChild(child);
					child = wrapper.lastElementChild;
				}
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
