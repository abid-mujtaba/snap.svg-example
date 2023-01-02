import Snap from "snapsvg";

export { animate };

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
