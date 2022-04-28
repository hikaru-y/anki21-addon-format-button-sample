declare global {
    interface DocumentOrShadowRoot {
        getSelection(): Selection | null;
    }

    // eslint-disable-next-line no-var
    var components: typeof import("@anki/editor/base").components;
}

export {};
