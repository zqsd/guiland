import Renderer from './Renderer';
import Scene from './Scene';

export default class SceneManager {
    renderer: Renderer;
    frameRate: number;
    scenes: Scene[] = [];
    scene?: Scene = null;

    constructor(renderer: Renderer) {
        this.frameRate = 60;
        this.renderer = renderer;
    }

    register(scene: Scene): void {
        this.scenes.push(scene);
    }

    start() : void {
        if(!this.scene) {
            this.scene = this.scenes[0];
            this.scene.raise();
        }

        this.scene.render();
        this.renderer.render();

        setTimeout(() => {
            this.start();
        }, 1000 / this.frameRate);
    }
}