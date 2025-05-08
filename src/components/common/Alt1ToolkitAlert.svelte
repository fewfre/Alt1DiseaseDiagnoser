<script lang="ts">
    interface Props { appconfigUrl:string; }
	let { appconfigUrl } : Props = $props();
</script>

<div class="alert">
	This webapp is designed to be used in the <a href="https://runeapps.org/alt1" target="_blank">Alt1 Toolkit</a>.
	If alt1 is installed <a href={`alt1://addapp/${appconfigUrl}`} target="_blank">click here</a> to add this app, or paste this url into the alt1 browser and click "Add app" on the url bar.
</div>

<style>
	.alert {
		margin: 9px 10px 4px;
		padding: 3px 5px;
		background: navy;
		border: 1px solid #DDD;
		border-radius: 3px;
	}
</style>