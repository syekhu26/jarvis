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
            <div class="">
              <div class="flex items-center mt-2">
                <div
                  v-if="
                    itemDetail.note_type === 'collaboration' &&
                    $auth.user.id === itemDetail.owner[0]?.id
                  "
                  class="flex"
                >
                  <div class="bg-red-400 rounded-full text-[12px] h-6 px-3">
                    {{ itemDetail.status }}
                  </div>

                  <div>
                    <span
                      @click="showStory"
                      class="text-blue-500 px-2 cursor-pointer"
                      >lihat</span
                    >
                  </div>
                  <History :showStory="story" @close="hideStory" />
                </div>
              </div>
              <div
                @click="handleClose"
                class="flex cursor-pointer float-right -mt-2"
              >
                <iconSilangIcon />
              </div>
              <div class="flex items-center justify-between mt-5 mb-3">
                <h1 class="font-bold text-xl">{{ itemDetail.subject }}</h1>
                <div
                  v-if="$auth.user.id === itemDetail.owner[0]?.id"
                  class="flex items-center"
                >
                  <div @click="show" class="p-2 text-blue-500 cursor-pointer">
                    Edit
                  </div>
                  <!-- <DeleteNote /> -->
                  <div @click="showDelete" class="text-red-500 cursor-pointer">
                    Hapus
                  </div>
                  <DeleteNote
                    :pesan="itemDetail"
                    :id="itemDetail.id"
                    :showDelete="del"
                    @close="hideDelete"
                  />
                </div>
              </div>
              <p class="font-sans mb-3">
                <!-- Beli tiket pesawat untuk tgl 13 Maret 2023 dari Jogja ke
                Jakarta. Pulang tanggal 5 Maret. Segera untuk dipesan. Jangan
                sampai lupa -->
                {{ itemDetail.description }}
              </p>

              <div
                v-if="
                  itemDetail.note_type === 'collaboration' &&
                  $auth.user.id === itemDetail.owner[0]?.id
                "
                class="mb-4"
              >
                <div
                  v-for="(member, index) in itemDetail.member"
                  :key="index"
                  class="my-3 bg-sky-500 px-5 py-2 rounded-full text-white text-center font-semibold font-sans max-w-[130px]"
                >
                  {{ member.username }}
                </div>
                <!-- <div
                  class="my-3 bg-sky-500 px-5 py-2 rounded-full text-white font-semibold font-sans block max-w-[100px]"
                >
                  {{ itemDetail.member }}
                </div> -->
                <!-- <div
                  class="bg-sky-500 px-5 py-2 rounded-full text-white font-semibold font-sans block max-w-[130px]"
                >
                  Kak Jasmine
                </div> -->

                <!-- <div class="flex items-center mt-2">
                  <p>dan 3 orang lagi.</p>
                  <div
                    @click="showMember"
                    class="text-sky-500 px-1 cursor-pointer"
                  >
                    Lihat semua
                  </div>
                  <PopupMemberCollab :showMember="member" @close="hideMember" />
                </div> -->
              </div>

              <div v-if="itemDetail.note_type === 'collaboration'" class="mb-4">
                <div>File Dokumen :</div>
                <!-- <div class="text-sky-500 underline">Bukti transaksi.png</div>
                <div class="text-sky-500 underline">Tiket pesawat.pdf</div> -->
                <div
                  v-for="(file, index) in itemDetail.file"
                  :key="index"
                  class="flex"
                >
                  <a :href="file" class="text-sky-500 underline">
                    {{ getAllFileName[index] }}
                    <!-- <p class="px-3" :title="file.name">
                      {{ makeName(file.name) }}
                    </p> -->
                  </a>
                </div>
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
                  <p class="px-2">{{ itemDetail.event_date }}</p>
                </div>
                <div class="flex">
                  <p>Reminder :</p>
                  <p class="px-2">{{ itemDetail.reminder }}</p>
                </div>
                <div class="flex">
                  <p>Ringtone :</p>
                  <p class="text-sky-500 px-2">{{ itemDetail.ringtone }}</p>
                </div>
              </div>
              <div class="mb-4">
                <h5>Pembuat catatan :</h5>
                <div class="flex items-center">
                  <img
                    class="rounded-full w-5 h-5"
                    :src="$store.state.profile.dataUser.photo"
                    alt=""
                  />
                  <p class="px-2">{{ itemDetail.owner[0].username }}</p>
                </div>
              </div>
              <div v-if="itemDetail.owner[0]?.id !== $auth.user.id">
                <Upload :file="itemDetail.file" :idNote="itemDetail.id" />
              </div>
              <div v-if="$auth.user.id === itemDetail.owner[0]?.id">
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
          <FormNote
            :item="itemDetail"
            edit="true"
            :show="isOpen"
            @close="hide"
          />
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
  emits: ['afterUpload', 'afterDelete'],
  data() {
    return {
      isOpen: false,
      toggleModal: false,
      modal: false,
      member: false,
      doc: false,
      del: false,
      story: false,
      items: [],
      members: [],
      files: [],
    }
  },
  computed: {
    getAllFileName() {
      if (this.itemDetail.file.length > 0) {
        return this.itemDetail.file.map((e) => {
          const arr = e.split('/')
          return arr[arr.length - 1]
        })
      }

      return []
    },
  },
  methods: {
    addMember() {
      if (!this.email) {
        return
      }
      this.items.push(this.email)
      this.email = ''
    },
    hideDetail() {
      this.$emit('afterUpload')
    },
    handleClose() {
      this.$store.commit('notes/detailNotes', null)
      this.$store.commit('notes/setShowDetail', false)
    },
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
    showStory() {
      this.story = true
    },
    hideStory() {
      this.story = false
    },
  },
}
</script>

<!-- column : null description : "woke mantap" event_date :
"2023-05-29T23:25:22.760+07:00" id : 172 member : [] note_type : "collaboration"
owner : [,…] 0 : {id: 31, username: "azwar", email: "stevennorman101@gmail.com",
phone: "0895641564", job: "gabut",…} email : "stevennorman101@gmail.com" id : 31
job : "gabut" phone : "0895641564" photo :
"https://res-5.cloudinary.com/dis2k0keq/image/upload/v1683939492/public/profile_picture/fdeb4fb13b.png"
username : "azwar" reminder : "2023-05-28T23:30:13.432+07:00" ringtone :
"Destiny" status : "in_progress" subject : "tetap dijalan keputus asaan" status
: 200 success : true -->
