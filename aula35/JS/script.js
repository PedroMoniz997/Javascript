class NPC {
    static alert = false;
    constructor(energe) {
        this.energe = `${energe}%`;
    }
    static alerter = () => {
        NPC.alert = true;
    };
    inf = () => {
        console.log(`Energe: ${this.energe}`);
        console.log(`Alert:${NPC.alert ? " On" : " Off"}`);
        console.log("-------------");
    };
}

const npc1 = new NPC(100);
const npc2 = new NPC(90);
const npc3 = new NPC(80);

NPC.alert = false;

npc1.inf();
npc2.inf();
npc3.inf();
