import Snap from "snapsvg";
import { animate } from "./animate";

export { main };

async function main() {
    const s = Snap("#svg");

    const g = s.group();

    const tux = Snap.load("assets/tux.svg", (frag) => {
        const elem = frag as Snap.Element;
        g.append(elem)
        g.attr({ opacity: 0.5 });
        g.transform('T200,100 s0.2');
    });

    const c1 = s.circle(150, 150, 100);
    const c2 = s.circle(600, 150, 50);

    c2.attr({ fill: "green" });

    // Animate circles one by one
    await animate(c1, { r: 50 }, 1000);
    await animate(c2, { r: 100 }, 1000);

    // Animate circles simultaneously
    await Promise.all([animate(c1, { r: 100 }, 2000), animate(c2, { r: 50 }, 2000)]);
}

