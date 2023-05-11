<template>
  <div>
    <!-- <CardListNote @click="toggleModal = !toggleModal" /> -->
    <div
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
              <div class="flex items-center justify-between">
                <div
                  @click="$emit('close')"
                  class="w-10 h-10 rounded-full flex absolute top-5 right-5 cursor-pointer"
                >
                  <iconSilangIcon />
                </div>
              </div>
              <div class="flex items-center justify-between mt-11 mb-3">
                <h1 class="font-bold text-xl">{{ itemDetail.subject }}</h1>
                <div class="flex items-center">
                  <div @click="show" class="p-2 text-blue-500 cursor-pointer">
                    Edit
                  </div>
                  <!-- <DeleteNote /> -->
                  <div @click="showDelete" class="text-red-500 cursor-pointer">
                    Hapus
                  </div>
                  <DeleteNote :showDelete="del" @close="hideDelete" />
                </div>
              </div>
              <p class="font-sans mb-3">
                <!-- Beli tiket pesawat untuk tgl 13 Maret 2023 dari Jogja ke
                Jakarta. Pulang tanggal 5 Maret. Segera untuk dipesan. Jangan
                sampai lupa -->
                {{ itemDetail.description }}
              </p>

              <div class="mb-4">
                <div class="flex">
                  <p>Tanggal Acara :</p>
                  <p>{{ itemDetail.event_date }}</p>
                </div>
                <div class="flex">
                  <p>Reminder :</p>
                  <p>{{ itemDetail.reminder }}</p>
                </div>
                <div class="flex">
                  <p>Ringtone :</p>
                  <p class="text-sky-500">{{ itemDetail.ringtone }}</p>
                </div>
              </div>
              <div class="mb-4">
                <h5>Pembuat catatan :</h5>
                <div class="flex items-center">
                  <iconPotoIcon />
                  <p class="px-2">{{ itemDetail.member }}</p>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  @click="showModal"
                  class="float-right inline-flex justify-center rounded border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none"
                >
                  Selesaikan Catatan
                </button>
              </div>
            </div>
          </div>
          <FormNote :show="isOpen" @close="hide" />
          <FinishNote :showModal="modal" @close="hideModal" />
        </div>
        <!-- ok -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemDetail: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isOpen: false,
      toggleModal: false,
      modal: false,
      del: false,
    }
  },
  methods: {
    show() {
      this.isOpen = true
    },
    hide() {
      this.isOpen = false
    },
    showModal() {
      this.modal = true
    },
    hideModal() {
      this.modal = false
    },
    showDelete() {
      this.del = true
    },
    hideDelete() {
      this.del = false
    },
  },
}
</script>
