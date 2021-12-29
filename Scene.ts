import SceneManager from './SceneManager';

export default abstract class Scene {
    _manager : SceneManager;

    constructor(manager: SceneManager) {
        this._manager = manager;
        manager.register(this);
    }

    raise() : void {}
    abstract canBeRaised() : boolean;
    abstract render() : void;
}