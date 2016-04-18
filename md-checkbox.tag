<md-checkbox>
	<label class="md-checkbox {has__text: opts.text}">
		<input id="{ opts.input }" name="{ opts.input }"
			type="checkbox" checked="{ opts.check }" onclick="{ onToggle }">

		<span class="md-checkbox__fake"></span>

		<div>
			{ opts.label }
			<small if="{ opts.text }">{ opts.text }</small>
		</div>
	</label>

	<script>
		onToggle(e) {
			if (opts.ontoggle) {
				opts.ontoggle(e);
			}
			this.el.value = this.el.checked ? (opts.value || 1) : null;
		}

		this.on('mount', function () {
			this.el = this.root.firstElementChild.firstElementChild;
			return this.onToggle();
		}.bind(this));
	</script>

	<style>
		@import "md-checkbox.sass";
	</style>
</md-checkbox>
