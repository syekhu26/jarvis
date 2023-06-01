<template>
  <div>
    <div v-if="showDoc" class="fixed inset-0 z-10 justify-center items-center">
      <div class="min-h-screen px-4 text-center">
        <!-- membuat bg gelap -->
        <div>
          <div class="fixed inset-0 bg-black bg-opacity-50"></div>
        </div>

        <!-- popup form -->

        <div
          class="my-5 inline-block w-full max-w-xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
        >
          <div class="mt-4">
            <div class="flex justify-between items-center">
              <!-- <button
                      class="my-10 bg-green-400 px-3 py-1 rounded-full text-white font-semibold font-sans block hover:bg-sky-700 active:bg-sky-900 focus:ring-sky-300 dark:bg-slate-300 dark:text-slate-800 dark:hover:text-slate-900 dark:hover:bg-slate-100"
                    >
                      100%
                    </button> -->
              <div>
                <h2 class="font-semibold text-black">Semua Document</h2>
              </div>
              <button>
                <div @click="$emit('close')">
                  <p class="text-blue-500">Kembali</p>
                </div>
              </button>
            </div>
          </div>
          <div class="mt-5">
            <!-- <CardDocument /> -->
            <div
              v-for="(file, index) in docCollab.file"
              :key="index"
              class="bg-white py-3 rounded px-5 border-slate-400 border mb-4"
            >
              <div class="flex items-center">
                <iconDocumentIcon />
                <a :href="file" class="text-sky-500 underline px-2">
                  {{ getAllFileName[index] }}
                </a>
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
  props: {
    showDoc: {
      type: Boolean,
      default: false,
    },
    docCollab: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    getAllFileName() {
      if (this.docCollab.file.length > 0) {
        return this.docCollab.file.map((e) => {
          const arr = e.split('/')
          return arr[arr.length - 1]
        })
      }

      return []
    },
  },
}
</script>

<style></style>
