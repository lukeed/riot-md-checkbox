<md-checkbox class="md-checkbox">
	<input id="{ opts.input }" name="{ opts.input }"
		type="checkbox" checked="{ opts.check }" onclick="{ onToggle }">

	<span class="md-checkbox__fake"></span>

	<div class="{md-checkbox__text: opts.text}">
		{ opts.label }
		<small if="{ opts.text }">{ opts.text }</small>
	</div>

	<script>
		onToggle(e) {
			if (opts.ontoggle) {
				opts.ontoggle(e);
			}
			this.el.value = this.el.checked ? (opts.value || 1) : null;
		}

		this.on('mount', function () {
			this.el = this.root.firstElementChild;
			return this.onToggle();
		}.bind(this));
	</script>
</md-checkbox>
