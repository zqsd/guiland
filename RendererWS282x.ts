// @ts-ignore
import ws281x from 'rpi-ws281x-native';
import Renderer from './Renderer';

export default class RendererWS281X extends Renderer {
    intBuffer: Uint32Array;

    constructor(length: number) {
        super(length);
        this.intBuffer = ws281x(length, {
            brightness: 255,
        }).array;
    }

    reset() {
        ws281x.reset();
    }

    set(i: number, color: number) : void {
        this.intBuffer[i] = color;
    }

    getBuffer() : Uint32Array {
        return this.intBuffer;
    }

    render() {
        ws281x.render();
    }
}