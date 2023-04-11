<template>
  <div class="text-blue-500 p-2">
    <button type="button" @click="isOpen = !isOpen">
      <span>lihat</span>
    </button>
    <div
      v-if="isOpen"
      class="fixed inset-0 z-10 overflow-y-auto justify-center items-center overflow-x-hidden"
    >
      <div class="min-h-screen px-4 text-center">
        <!-- membuat bg gelap -->
        <div>
          <div class="fixed inset-0 bg-black bg-opacity-50"></div>
        </div>

        <!-- popup form -->
        <div>
          <div
            class="my-5 inline-block w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
          >
            <div class="-mt-7">
              <div class="flex justify-between items-center">
                <button
                  class="my-10 bg-green-400 px-3 py-1 rounded-full text-white font-semibold font-sans block hover:bg-sky-700 active:bg-sky-900 focus:ring-sky-300 dark:bg-slate-300 dark:text-slate-800 dark:hover:text-slate-900 dark:hover:bg-slate-100"
                >
                  100%
                </button>
                <button>
                  <div @click="isOpen = false">
                    <p class="text-blue-500">Kembali</p>
                  </div>
                </button>
              </div>
              <div class="relative max-w-2xl">
                <div
                  class="absolute top-0 h-full border-r-2 border-gray-500 left-3"
                ></div>
                <ul class="space-y-2">
                  <li>
                    <div class="flex items-center">
                      <span class="w-6 h-6 bg-gray-500 rounded-full"></span>
                      <p class="ml-4 font-sans">
                        CEO membuat catatan untuk bag.sekretaris dan keuangan.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center">
                      <span
                        class="w-6 h-6 bg-gray-500 rounded-full mt-5"
                      ></span>
                      <p class="ml-4 font-sans mt-5">
                        Bag.bendahara mengirim uang ke bag.sekretaris.
                        <a href="" class="text-blue-500">Lihat disini</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center">
                      <span class="w-7 h-6 bg-gray-500 rounded-full"></span>
                      <p class="ml-4 font-sans mt-5">
                        Bag.sekretaris memesan tiket pesawat. Tiket pesawat
                        telah tersedia.
                        <a href="" class="text-blue-500">Lihat disini</a>
                      </p>
                    </div>
                  </li>
                </ul>
                <div class="mb-32"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- ok -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style></style>
