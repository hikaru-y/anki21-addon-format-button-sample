// https://github.com/ankitects/anki/pull/1626#issuecomment-1024622000
declare module "anki/NoteEditor" {
    type NoteEditorAPI = import("@anki/editor/NoteEditor.svelte").NoteEditorAPI;
    export const context: import("@anki/sveltelib/context-property").ContextProperty<NoteEditorAPI>;
    export const lifecycle: import("@anki/sveltelib/lifecycle-hooks").LifecycleHooks<NoteEditorAPI>;
    export const instances: NoteEditorAPI[];
}

declare module "*.svg" {
    const content: string;
    export default content;
}
