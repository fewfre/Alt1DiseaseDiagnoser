<script lang="ts">
    interface Props { checked: boolean; color?:"green"|"red"|"blue"; size?:"md"|"lg", round?:boolean; }
	let { checked = $bindable(), color="green", size="md", round } : Props = $props();
</script>

<label class={["switch", { [size]:true }]}>
	<input type="checkbox" bind:checked />
	<span class={["slider", { [color]:true, round }]}></span>
</label>

<style>
/* https://codepen.io/alvarotrigo/pen/VwJeMwy */
/* https://alvarotrigo.com/blog/toggle-switch-css/ */
.switch {
  position: relative;
  display: inline-block;
  width: var(--width);
  height: var(--height);
  --slider-size: calc(var(--height) - var(--pad) * 2);
}
.switch.lg {
  --width: 60px;
  --height: 34px;
  --pad: 4px;
}
.switch.md {
  --width: 44px;
  --height: 26px;
  --pad: 4px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  /* -webkit-transition: .4s; */
  transition: .4s cubic-bezier(0,1,0.5,1);
  border-radius: var(--pad);
}

.slider:before {
  position: absolute;
  content: "";
  height: var(--slider-size);
  width: var(--slider-size);
  left: var(--pad);
  bottom: var(--pad);
  background-color: white;
  /* -webkit-transition: .4s; */
  transition: .4s cubic-bezier(0,1,0.5,1);
  border-radius: 3px;
}

input:checked + .slider {
  background-color: #52c944;
}

input:focus + .slider {
  box-shadow: 0 0 4px #7efa70;
}

input:checked + .slider:before {
  /* -webkit-transform: translateX(calc(var(--width) - var(--slider-size) - var(--pad) * 2));
  -ms-transform: translateX(calc(var(--width) - var(--slider-size) - var(--pad) * 2)); */
  transform: translateX(calc(var(--width) - var(--slider-size) - var(--pad) * 2));
}

/* Rounded sliders */
.slider.round {
  border-radius: var(--height);
}

.slider.round:before {
  border-radius: 50%;
}

input:checked + .slider.red {
  background-color: crimson;
}

input:focus + .slider.red {
  box-shadow: 0 0 4px crimson;
}

input:checked + .slider.blue {
  background-color: #424bf5;
}

input:focus + .slider.blue {
  box-shadow: 0 0 4px #424bf5;
}
</style>