export default abstract class Renderer {
    _length: number;

    constructor(length: number) {
        this._length = length;
    }

    get length(): number {
        return this._length;
    }

    abstract set(i: number, color: number) : void;

    abstract render();
}