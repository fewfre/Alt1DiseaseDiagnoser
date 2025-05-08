<script lang="ts">
    import * as a1lib from 'alt1/base';
    import Diagnosis from './lib/Diagnosis.svelte';
    import Symptom from './lib/Symptom.svelte';
    import { compareStringAgainstMultiplePossibleMatchesFindBestMatch, getImageDialogBoxObj, getImageDialogBoxText, handleImageCaptureFallsbacksIfNeeded } from '../utils/utils';
    import { symptomsAsList } from '../data/symptoms';
	
	const alt1 = window.alt1;
	
	let discoveredSymptoms: typeof symptomsAsList = $state([]);
	let alert: string = $state("");
	let fakeActive: boolean = $state(false);
	let pasteBoxBlurOn: boolean = $state(false);
	let loading: boolean = $state(false);
	
	
	async function detectSymptomFromImage(img?: a1lib.ImgRef) {
		alert = "";
		discoveredSymptoms = [];
		loading = true;
		
		try {
			img = await handleImageCaptureFallsbacksIfNeeded(img);
			const boxTextParts = await getImageDialogBoxText(img);
			const boxText = boxTextParts.join(' ');
			
			const [closestSymptom, matchScore] = compareStringAgainstMultiplePossibleMatchesFindBestMatch(boxText, symptomsAsList, (a)=>a.fullText);
			
			console.log({ boxText, closestSymptom, matchScore });
			
			if(closestSymptom && matchScore > 0.9) {
				// discoveredSymptoms.push(closestSymptom);
				discoveredSymptoms = [closestSymptom];
			} else {
				alert = "Text detected, but symptom not recognized.";
		}
		} catch(error) {
			alert = (error as Error)?.message ?? "Unknown error";
		}
		
		loading = false;
	}
	
	function onFocus() {
		pasteBoxBlurOn = false;
	}

	function onBlur() {
		if (document.hasFocus()) { return; }
		pasteBoxBlurOn = true;
	}
	
	$effect(()=>{
		a1lib.PasteInput.listen(detectSymptomFromImage, e => console.log('PasteInput', e));
		
		if (alt1) {
			a1lib.on("alt1pressed", e => {
				fakeActive = true;
				setTimeout(function () { detectSymptomFromImage(); fakeActive = false; }, 50);
			});
		}
	});
</script>

<svelte:window onfocus={onFocus} onblur={onBlur} />

<div>
	<main>
		<div id="top">
			{#if alt1}
				<button id="unlockbutton" class={["nisbutton", { fakeActive }]} onclick={()=>detectSymptomFromImage()}>Add Symptom</button>
			{:else}
				<div id="solvepaste" class={[{ blur:pasteBoxBlurOn }]}>
					<span id="solvepastestr">📋 Paste a screenshot (ctrl+v)</span>
				</div>
			{/if}
			<!-- <button class="nisbutton2 clear-button" onclick={() => discoveredSymptoms = []}>Clear Symptoms</button> -->
		</div>
		
		<div class="notepad">
			{#if alert}
			<div class="alerts-cont">
				<div class="alert">{alert}</div>
			</div>
			{/if}
			
			{#if loading}
				<div class="loading">⌛ Loading...</div>
			{:else}
				<Diagnosis symptoms={discoveredSymptoms} />
			{/if}
			
			<h2 class="symptom-title">Symptom</h2>
			<ul class="symptoms-list">
				{#each discoveredSymptoms as symptom}
					<li><Symptom {...symptom} /></li>
				{:else}
					<li><div class="no-symptoms">{alt1 ? "Click the button or press alt+1 when a symptom description is visible." : "Paste a screenshot with one of the symptom descriptions visible."}</div></li>
				{/each}
			</ul>
		</div>
	</main>
</div>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
	}
	#top {
		display: grid;
		/* grid-template-columns: 1fr 30%; */
		grid-template-columns: 1fr;
		align-items: stretch;
		gap: 10px;
		
		width: 100%;
		min-height: 32px;
		padding: 6px 20px;
		margin-top: 5px;
		margin-bottom: 5px;
		
		border-bottom: 1px solid #41555F;
		
		.nisbutton { margin: 0; }
		button {
			width: 100%;
		}
	}
	
	#solvepaste {
		font-size: 22px;
		color: var(--nis-col-std);
		text-align: center;
		white-space: nowrap;
	}
	
	.notepad {
		display: grid;
		grid-template-rows: repeat(9, 24.5px);
		
		background-color: #363636;
		background-image: url(/images/notepad-paper/notepad-paper-dark.png);
		background-repeat: repeat-y;
		background-size: 500px;
		border-radius: 8px;
		
		width: 100%;
		max-width: 460px;
		padding: 0 5px;
		margin: 0 8px
	}
	
	.alerts-cont {
		display: flex;
		align-items: flex-end;
	}
	.alert {
		color: red;
	}
	
	.loading {
		grid-row: span 2;
		display: flex;
		align-items: center;
		font-size: 24px;
	}
	
	.symptom-title {
		grid-row: span 2;
		display: flex;
		align-items: flex-end;
		margin: 0;
		font-size: 26px;
	}
	
	.symptoms-list {
		display: grid;
		gap: 5px 5px;
		padding: 5px;
		margin: 0;
		list-style: none;
	}
	
	.no-symptoms {
		opacity: 0.8;
	}
</style>
