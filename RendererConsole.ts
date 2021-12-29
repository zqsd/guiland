import Renderer from './Renderer';

export default class RendererConsole extends Renderer {
    data: Uint32Array;

    constructor(length: number) {
        super(length);
        this.data = new Uint32Array(length);
        console.log(''); // starting newline
        this.render();
    }

    get length(): number {
        return this.data.length;
    }

    set(i: number, color: number) {
        this.data[i] = color;
    }

    render() {
        let str: string = '\x1B[F\x1B[2K'; // go up and clear line
        for(let i = 0; i < this.data.length; i++) {
            const c = this.data[i],
                  r = (c >> 16) & 255,
                  g = (c >> 8) & 255,
                  b = c & 255;
            str += `\x1B[48;2;${r};${g};${b}m `;
        }
        str += '\x1B[0m'; // reset to default
        console.log(str);
    }

    renderOne(i: number) {
        //console.log('\x1B[48;2;0;0;0m ')
    }
}