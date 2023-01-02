import Snap from "snapsvg";

window.onload = async () => {
    const s = Snap("#svg");
    const c1 = s.circle(150, 150, 100);
    const c2 = s.circle(600, 150, 50);

    c2.attr({ fill: "green" });

    c1.animate({ r: 50 }, 2000);
    c2.animate({ r: 100 }, 2000);
};

window.onunload = () => { };
