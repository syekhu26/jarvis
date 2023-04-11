<template>
  <div class="w-full">
    <div class="flex items-center justify-between mt-6 px-8">
      <h1 class="text-2xl font-bold mb-3">Catatan</h1>
      <FormNote />
    </div>
    <div class="flex-none min-w-full px-8 items-center mb-8">
      <ul
        class="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200"
      >
        <li>
        

          <h2 class="">
            <a
              href=""
              class="flex text-md leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-sky-500 border-current"
              >Catatanku</a
            >
          </h2>
        </li>
        <li>
          <h2
            class="flex text-md leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-black border-transparent hover:border-slate-300 dark:hover:border-slate-700 cursor-pointer"
          >
            Catatan Masuk
          </h2>
        </li>
      </ul>
    </div>
    <DetailNote />

    <!-- <div
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
    </div> -->

    <!-- <Upload /> -->
  </div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
