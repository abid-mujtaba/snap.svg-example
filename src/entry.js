import Snap from "snapsvg";

window.onload = async () => {
    const s = Snap("#svg");
    s.circle(150, 150, 100);
};

window.onunload = () => { };
