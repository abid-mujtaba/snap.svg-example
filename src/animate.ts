import Snap from "snapsvg";

export { animate, load };

// Convert Snap.Element.animate to async/await by wrapping it
async function animate(
    element: Snap.Element,
    attrs: { [attr: string]: string | number | boolean | any },
    duration: number,
    easing?: (num: number) => number): Promise<Snap.Element> {

    return new Promise(resolve => {
        const result = element.animate(attrs, duration, easing, () => {
            resolve(result);
        })
    });
}

async function load(url: string, group: Snap.Paper): Promise<void> {
    return new Promise(resolve => {
        Snap.load(url, (frag: Snap.Element) => {
            group.append(frag);
            group.attr({ opacity: 0 });  // Make group invisible to begin with

            resolve();
        });
    });
}
