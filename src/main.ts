import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import { identifyApp } from 'alt1';

identifyApp("./appconfig.json");

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
