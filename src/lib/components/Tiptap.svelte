<script>
  import { onMount, onDestroy } from 'svelte'
  import { Editor } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'

  export let content = '<p>Hello World! 🌍️ </p>'
  let element
  let editor

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [
        StarterKit,
      ],
      editorProps: {
        attributes: {
          class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none border-2 border-stone-300 rounded-lg p-3 h-80',
        },
      },      
      content: content,
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editor = editor
      },
      onUpdate: ({editor}) => {
        content = editor.getHTML()
      }
    })
  })

  onDestroy(() => {
    if (editor) {
      editor.destroy()
    }
  })
</script>

{#if editor}
  <div class="">
    <button
      on:click={() => editor.chain().focus().toggleHeading({ level: 1}).run()}
      class:active={editor.isActive('heading', { level: 1 })}
      class="btn"
    >
      H1
    </button>
    <button
      on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      class:active={editor.isActive('heading', { level: 2 })}
      class="btn"
    >
      H2
    </button>
    <button 
      on:click={() => editor.chain().focus().setParagraph().run()} 
      class:active={editor.isActive('paragraph')}
      class="btn"
    >
      P
    </button>
  </div>
{/if}

<div bind:this={element} />

<style>
  button.active { 
    background: black;
    color: white;
  }
</style>