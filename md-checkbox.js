riot.tag2('md-checkbox', '<label class="md-checkbox {has__text: opts.text}"> <input id="{opts.input}" name="{opts.input}" type="checkbox" __checked="{opts.check}" onclick="{onToggle}"> <span class="md-checkbox__fake"></span> <div> {opts.label} <small if="{opts.text}">{opts.text}</small> </div> </label>', '.md-checkbox { position: relative; display: inline-block; font-size: 18px; line-height: 48px; cursor: pointer; } .md-checkbox input { width: 1px; height: 1px; opacity: 0; } .md-checkbox input:checked + .md-checkbox__fake::before { height: 12.5px; border-color: #2196f3; border-top-style: none; border-right-style: none; transform: rotate(-45deg); } .md-checkbox > div { line-height: 18px; display: inline-block; } .md-checkbox__fake { position: relative; display: block; float: left; margin: 10px 9px 10px 10px; cursor: pointer; width: 25px; height: 25px; } .md-checkbox__fake::before, .md-checkbox__fake::after { position: relative; content: \'\'; } .md-checkbox__fake::before { display: block; z-index: 1; width: 100%; height: 100%; border-radius: 2px; border: 2px solid #cccccc; transition: all 0.25s ease-in-out; } .md-checkbox__fake::after { position: absolute; top: 0; left: 0; width: 27.5px; height: 27.5px; background: #fff; cursor: pointer; } .md-checkbox.has__text > div { padding-top: 7px; } .md-checkbox.has__text small { display: block; line-height: 15px; color: #5B5B5B; opacity: 0.65; padding-top: 2px; } .md-checkbox.with__error > div, .md-checkbox.with__error small { color: #d32f2f; } .md-checkbox.with__error .md-checkbox__fake::before { border-color: #d32f2f !important; }', '', function(opts) {
		this.onToggle = function(e) {
			if (opts.ontoggle) {
				opts.ontoggle(e);
			}
			this.el.value = this.el.checked ? (opts.value || 1) : null;
		}.bind(this)

		this.on('mount', function () {
			this.el = this.root.firstElementChild.firstElementChild;
			return this.onToggle();
		}.bind(this));
});
