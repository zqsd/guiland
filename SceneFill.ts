import Scene from './Scene';
import SceneManager from './SceneManager';

export default class SceneFill extends Scene {
    startTs: number;
    duration: number;
    color: number;

    constructor(manager: SceneManager) {
        super(manager);

        this.duration = 5;
    }

    start() {
        this.startTs = Date.now() * 0.001;
        this.color = (Math.random() * 255) << 16 | (Math.random() * 255) << 8 | (Math.random() * 255);
    }

    canBeRaised() : boolean {
        return true;
    }

    raise() : void {
        this.start();
    }

    render() : void {
        const renderer = this._manager.renderer;
        const t = (Date.now() * 0.001 - this.startTs);
        const num = Math.min(renderer.length, renderer.length * (t / this.duration));
        for(let i = 0; i < num; i++) {
            renderer.set(i, this.color);
        }
        if(t > this.duration) {
            this.start();
        }
    }
}