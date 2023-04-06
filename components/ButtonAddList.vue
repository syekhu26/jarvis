<template>
  <div>
    <button
      type="button"
      class="flex w-full items-center rounded-md bg-black/10 p-2 text-sm font-medium text-black hover:bg-white/20"
      @click="isOpen = !isOpen"
    >
      <span>Tambah List</span>
    </button>
    <!-- popup -->
    <div>
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
              class="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <div class="text-lg font-medium leading-6 text-gray-900">
                New List
              </div>
              <div class="mt-4">
                <form action="" class="w-full">
                  <input
                    type="text"
                    placeholder="Tambahkan judul"
                    class="border text-black px-4 py-2 w-full"
                    required
                  />
                  <div class="mt-4">
                    <div>
                      <button
                        type="button"
                        class="float-left inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        @click="isOpen = false"
                      >
                        Batal
                      </button>
                    </div>
                    <div>
                      <button
                        type="submit"
                        class="float-right inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      >
                        Buat
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- ok -->
        </div>
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
  methods: {},
}
</script>

<style></style>
