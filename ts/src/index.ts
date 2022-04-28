import * as NoteEditor from "anki/NoteEditor";
import InlineCode from "./InlineCode.svelte";

NoteEditor.lifecycle.onMount(({ toolbar }): void => {
    toolbar.toolbar.append({ component: InlineCode, id: "inline-code" });
});
