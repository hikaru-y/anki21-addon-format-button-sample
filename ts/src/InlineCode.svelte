<script lang="ts">
    import * as NoteEditor from "anki/NoteEditor";

    const { LabelButton } = globalThis.components;
    const { focusedInput, focusedField } = NoteEditor.context.get();
    $: disabled = $focusedInput?.name !== "rich-text";

    function wrapWithCode(sel: Selection): void {
        const text = sel.toString();
        const range = sel.getRangeAt(0);
        range.deleteContents();
        const code = document.createElement("code");
        code.textContent = text;
        range.insertNode(code);
    }

    async function handleClick() {
        const element = await $focusedField?.element;
        const sel = element
            ?.querySelector(".rich-text-editable")
            ?.shadowRoot?.getSelection();
        if (sel?.toString()) {
            wrapWithCode(sel);
        }
    }
</script>

<LabelButton {disabled} class="inline-code-button" on:click={handleClick}
    >&lt;code&gt;</LabelButton
>

<style lang="scss">
    :global(.inline-code-button) {
        border-radius: 5px !important;
        font-family: monospace;
        padding: {
            left: 2px !important;
            right: 2px !important;
        }
    }
</style>
