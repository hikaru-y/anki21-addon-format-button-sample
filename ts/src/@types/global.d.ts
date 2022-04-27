// import { components } from "@anki/editor/base";

// declare global {
//     interface Window {
//         components: typeof components;
//     }
// }
declare global {
    // eslint-disable-next-line no-var
    var components: typeof import("@anki/editor/base").components;
}
export {};
