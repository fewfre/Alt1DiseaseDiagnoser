<script lang="ts">
    import Alt1ToolkitAlert from "./components/common/Alt1ToolkitAlert.svelte";
    import Content from "./components/Content.svelte";
</script>

{#if !window.alt1}
	<Alt1ToolkitAlert appconfigUrl="https://projects.fewfre.com/runescape/alt1-disease-diagnoser/appconfig.json" />
{/if}
<Content />