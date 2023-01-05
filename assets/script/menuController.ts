import { _decorator, Camera, Component, EventTouch, Input, input, instantiate, Node, Prefab } from "cc";
const { ccclass, property } = _decorator;

@ccclass("menuController")
export class menuController extends Component {
    @property(Prefab)
    prefab: Prefab;

    @property(Node)
    nodeUI: Node;

    @property(Camera)
    camera: Camera;

    start() {
        let pre = instantiate(this.prefab);
        this.nodeUI.addChild(pre);
        let label = this.nodeUI.getChildByName("Label");
        pre.setPosition(label.position);
        pre.layer = label.layer - 1;

        input.on(Input.EventType.TOUCH_START, this.onTouch, this);

        console.log(">>>camera:" + this.camera.node.getPosition());

    }

    onTouch(event: EventTouch) {
        console.log(event.getUILocation());
    }

    update(deltaTime: number) { }
}
