import SceneFill from "./SceneFill";
import SceneManager from "./SceneManager";

const RENDERER: string = process.env.GUI_RENDERER || 'Console';
const LEDS = process.env.GUI_LEDS || process.stdout.columns;
const Renderer = require('./Renderer' + RENDERER).default;
const renderer = new Renderer(LEDS);

const manager = new SceneManager(renderer);
const sceneFill = new SceneFill(manager);

manager.start();
