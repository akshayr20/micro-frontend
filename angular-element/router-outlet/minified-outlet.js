!(function(e) {
	var t = {};
	function n(r) {
		if (t[r]) return t[r].exports;
		var o = (t[r] = { i: r, l: !1, exports: {} });
		return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
	}
	(n.m = e),
		(n.c = t),
		(n.d = function(e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
		}),
		(n.r = function(e) {
			'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(n.t = function(e, t) {
			if ((1 & t && (e = n(e)), 8 & t)) return e;
			if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
				for (var o in e)
					n.d(
						r,
						o,
						function(t) {
							return e[t];
						}.bind(null, o)
					);
			return r;
		}),
		(n.n = function(e) {
			var t =
				e && e.__esModule
					? function() {
							return e.default;
					  }
					: function() {
							return e;
					  };
			return n.d(t, 'a', t), t;
		}),
		(n.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(n.p = ''),
		n((n.s = 0));
})([
	function(e, t) {
		class n extends HTMLElement {
			static get observedAttributes() {
				return ['tag', 'id'];
			}
			constructor() {
				super();
				const e = this.attachShadow({ mode: 'open' });
				(this.wrapper = document.createElement('div')), e.appendChild(this.wrapper);
			}
			connectedCallback() {
				this.loadElement();
			}
			attributeChangedCallback() {
				this.loadElement();
			}
			loadElement() {
				this.removeElement();
				const e = this.getAttribute('id'),
					n = this.getAttribute('tag');
				if (n) {
					this.wrapper.setAttribute('id', n);
					const r = document.createElement(n);
					this.wrapper.appendChild(r), document.getElementById(e).appendChild(this.wrapper);
				}
			}
			removeElement() {
				const e = this.getAttribute('tag');
				if (e) {
					const t = document.getElementById(e);
					if (t) {
						let e = t.lastElementChild;
						for (; e; ) t.removeChild(e), (e = t.lastElementChild);
					}
				}
			}
			disconnectedCallback() {
				this.removeElement();
			}
		}
		try {
			customElements.define('orxe-outlet', n);
		} catch (e) {
			const t = document.createElement('h3');
			(t.innerHTML = "This site uses webcomponents which don't work in all browsers! Try this site in a browser that supports them!"), document.body.appendChild(t);
		}
	}
]);
