<template>
  <div>
    <div
      @click="$emit('click')"
      class="max-w-lg border border-slate-200 rounded-xl m-8 p-5 shadow-md font-sans group dark:hover:bg-slate-300"
    >
      <div class="flex items-center justify-between font-semibold">
        <h5>Pesan tiket pesawat</h5>
        <h5>File belum diupload</h5>
      </div>
      <p class="mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        doloremque culpa architecto. Velit, excepturi! Earum, quaerat.
        Asperiores magni repellat eum?
      </p>
    </div>
  </div>
</template>
