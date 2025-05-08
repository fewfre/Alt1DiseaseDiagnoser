<script lang="ts">
    import DiagnosisIcon from "../../assets/DiagnosisIcon.svg.svelte";
    import type { symptomsAsList } from "../../data/symptoms";

	interface Props { symptoms:typeof symptomsAsList }
	let { symptoms } : Props = $props();
	
	const diagnosis2dArray = $derived(symptoms.map(s=>s.diagnosis));
	const diagnoses = $derived(!diagnosis2dArray.length ? [] : diagnosis2dArray[0].filter(item => diagnosis2dArray.every(list => list.includes(item))));
</script>

<div class="diagnosis-wrapper">
	{#if diagnoses.length === 1}
		<div class="diagnosis found">
			<DiagnosisIcon size={36} />
			<strong class="large-label">Diagnosis:</strong>
			<div class="right-flex correct-disease-large">{diagnoses[0]}</div>
		</div>
	{:else if diagnoses.length > 1}
		<div class="diagnosis multi">
			<strong class="large-label">Diagnosis:</strong>
			<div class="right-flex correct-disease-large">Inconclusive</div>
		</div>
	{:else}
		<div class="diagnosis none">No Diagnosis Ascertainable</div>
	{/if}
</div>

<style>
	.diagnosis-wrapper {
		grid-row: span 2;
		display: flex;
		align-items: center;
	}
	.diagnosis {
		flex: 1;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		gap: 3px;
		font-size: 16px;
		
		padding: 1px 8px 1px 4px;
		
		background: #888;
		border: 2px solid #555;
		border-radius: 8px;
		border-color: green;
		&.found {
			background: #11b93baa;
			border-color: green;
		}
		&.multi {
			background: #6c8000aa;
			border-color: yellow;
		}
		&.none {
			background: #6c8000aa;
			border-color: #707070;
		}
	}
	
	.large-label {
		font-size: 24px;
	}
	.right-flex {
		flex: 1;
		text-align: right;
	}
	.correct-disease-large {
		font-size: 24px;
	}
</style>