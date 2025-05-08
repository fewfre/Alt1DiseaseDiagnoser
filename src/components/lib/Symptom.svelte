<script lang="ts">
	import type { BodyPart, Disease } from "../../data/symptoms";

	interface Props { symptom:string; diagnosis:Array<Disease>, bodyPart:BodyPart }
	let { symptom, diagnosis, bodyPart } : Props = $props();
</script>


<ul class="symptoms-list">
	<li><strong>Inspected Area</strong>: <code>{bodyPart}</code></li>
	<li>"<i>{symptom}</i>"</li>
	<li><strong>Possible Diseases</strong>: {diagnosis.length ? diagnosis.join(' • ') : 'Could be anything'}</li>
</ul>

<style>
	.symptoms-list {
		margin-top: -1px;
		line-height: 24px;
	}
</style>