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
          class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none p-3 h-80',
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

<div class="border-2 border-stone-300 rounded-lg">
  
  {#if editor}
    <div class="border-b-2 border-stone-300 p-1">
      <button
        on:click={() => editor.chain().focus().toggleBold().run()}
        class:active={editor.isActive('bold')}
        class="font-bold"
      >
        B
      </button>
      <button
        on:click={() => editor.chain().focus().toggleItalic().run()}
        class:active={editor.isActive('italic')}
        class="italic"
      >
        I
      </button>      
      <button
        on:click={() => editor.chain().focus().toggleItalic().run()}
        class:active={editor.isActive('italic')}
        class="underline"
      >
        U
      </button>
      <button
        on:click={() => editor.chain().focus().toggleBlockquote().run()}
        class:active={editor.isActive('blockquote')}
        class=""
      >
        ❝
      </button>
      <button
        on:click={() => editor.chain().focus().setLink().run()}
        class:active={editor.isActive('link')}
        class=""
      >
      LINK
      </button>

      <button
        on:click={() => editor.chain().focus().toggleHeading({ level: 1}).run()}
        class:active={editor.isActive('heading', { level: 1 })}
        class=" "
      >
        H1
      </button>
      <button
        on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        class:active={editor.isActive('heading', { level: 2 })}
        class=" "
      >
        H2
      </button>
      <button 
        on:click={() => editor.chain().focus().setParagraph().run()} 
        class:active={editor.isActive('paragraph')}
        class=" "
      >
        P
      </button>
    </div>
  {/if}

  <div bind:this={element} class="bg-white"/>
</div>

<style>
  button{
    @apply py-1 px-3 font-semibold;
  }
  button.active { 
    @apply bg-stone-300;
  }
</style>