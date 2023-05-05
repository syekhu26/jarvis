<template>
  <div>
    <!-- <div
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
    </div> -->
    <template>
      <div class="mx-2 my-3">
        <div
          class="border border-1 h-[124px] w-[547px] flex flex-row items-center p-3 rounded-md"
        >
          <div class="border-right w-[37px] m-2 flex flex-col">
            <p class="text-3xl font-semibold place-self-center">2</p>
            <p class="text-xl place-self-center">Bulan</p>
          </div>
          <div class="h-[80px] w-[1px] bg-gray-300 mx-2"></div>
          <div class="flex justify-between p-3">
            <div>
              <p class="text-xl font-bold">Subject</p>
              <p class="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div class="flex my-1">
                <iconUserIcon class="h-5 w-5 mx-1" />
                <p class="text-sky-500">Personal</p>
                <img
                  class="rounded-full w-5 h-5 mx-1"
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt=""
                />
                <p class="text-gray-500 mx-1 text-xs">Masbro</p>
              </div>
            </div>
            <div class="bg-red-400 rounded-full text-[12px] w-24 h-6 px-3 mt-2">
              Anda Telat
            </div>
            <!-- <div
              class="my-10 bg-red-400 px-3 py-1 rounded-full text-white font-semibold font-sans block hover:bg-sky-700 active:bg-sky-900 focus:ring-sky-300 dark:bg-slate-300 dark:text-slate-800 dark:hover:text-slate-900 dark:hover:bg-slate-100"
            >
              Anda Telat
            </div> -->
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
