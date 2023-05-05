<template>
  <div>
    <CardListNoteCollab @click="toggleModal = !toggleModal" />
    <div
      v-if="toggleModal"
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
                <div class="flex items-center">
                  <div
                    class="my-10 bg-green-500 px-5 py-1 rounded-full text-white font-semibold font-sans block mx-auto"
                  >
                    100%
                  </div>
                  <Timeline />
                  <!-- <button>
                    <div @click="$emit('click')" class="text-blue-500 p-2">
                      Lihat
                    </div>
                  </button> -->
                </div>
                <div
                  @click="toggleModal = false"
                  class="w-10 h-10 rounded-full flex absolute mt-7 top-5 right-5 cursor-pointer"
                >
                  <iconSilangIcon />
                </div>
              </div>
              <div class="flex items-center justify-between -mt-6">
                <h1 class="font-bold text-xl">Beli Tiket Pesawat</h1>
                <div class="flex items-center">
                  <div @click="show" class="p-2 text-blue-500 cursor-pointer">
                    Edit
                  </div>
                  <!-- <a href="" class="text-red-500">Hapus</a> -->
                  <DeleteNote />
                </div>
              </div>
              <p class="font-sans">
                Beli tiket pesawat untuk tgl 13 Maret 2023 dari Jogja ke
                Jakarta. Pulang tanggal 5 Maret. Segera untuk dipesan. Jangan
                sampai lupa
              </p>
              <div class="mb-4">
                <div
                  class="my-3 bg-sky-500 px-5 py-2 rounded-full text-white font-semibold font-sans block max-w-[100px]"
                >
                  Kak Lea
                </div>
                <div
                  class="bg-sky-500 px-5 py-2 rounded-full text-white font-semibold font-sans block max-w-[130px]"
                >
                  Kak Jasmine
                </div>

                <div class="flex items-center mt-2">
                  <p>dan 3 orang lagi.</p>
                  <div
                    @click="showMember"
                    class="text-sky-500 px-1 cursor-pointer"
                  >
                    Lihat semua
                  </div>
                  <PopupMemberCollab :showMember="member" @close="hideMember" />
                </div>
              </div>

              <div class="mb-4">
                <div>File Dokumen :</div>
                <div class="text-sky-500 underline">Bukti transaksi.png</div>
                <div class="text-sky-500 underline">Tiket pesawat.pdf</div>
                <div class="flex items-center mt-2">
                  <p>dan 3 dokument lagi.</p>
                  <div
                    @click="showDoc"
                    class="text-sky-500 px-1 cursor-pointer"
                  >
                    Lihat semua
                  </div>
                  <PopupDocumentCollab :showDoc="doc" @close="hideDoc" />
                </div>
              </div>

              <div class="mb-4">
                <div class="flex">
                  <p>Tanggal Acara :</p>
                  <p>13/03/2021</p>
                </div>
                <div class="flex">
                  <p>Reminder :</p>
                  <p>H-2 - 11/03/2021</p>
                </div>
                <div class="flex">
                  <p>Ringtone :</p>
                  <p class="text-sky-500">Aiyaiyaiya</p>
                </div>
              </div>
              <div class="mb-4">
                <h5>Pembuat catatan :</h5>
                <div class="flex items-center">
                  <iconPotoIcon />
                  <p class="px-2">Masbro</p>
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
  data() {
    return {
      isOpen: false,
      toggleModal: false,
      modal: false,
      member: false,
      doc: false,
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
    showMember() {
      this.member = true
    },
    hideMember() {
      this.member = false
    },
    showDoc() {
      this.doc = true
    },
    hideDoc() {
      this.doc = false
    },
  },
}
</script>
