<riot-md-checkbox>
	<p onclick="{ onClick }">Hallo hallo!</p>

	<script>
		console.log('before `mount` event: ', this.root);

		onClick(e) {
			alert('clicked!');
		}

		this.on('mount', function () {
			console.log('mounted');
		}.bind(this));
	</script>

	<style scoped>
		@import "riot-md-checkbox.sass";
	</style>
</riot-md-checkbox>
