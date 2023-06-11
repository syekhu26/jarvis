<template>
  <div>
    <!-- <CardListNote @click="toggleModal = !toggleModal" /> -->
    <div
      v-if="showDetail"
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
              <div class="flex items-center justify-between mt-2">
                <div class="flex">
                  <div>
                    <span
                      @click="showStory"
                      class="text-blue-500 px-2 cursor-pointer"
                      >lihat progress</span
                    >
                  </div>
                  <History
                    :idNoteToHistory="itemDetail"
                    :showStory="story"
                    @close="hideStory"
                  />
                </div>
                <div @click="$emit('closeModal')" class="cursor-pointer">
                  <iconSilangIcon />
                </div>
              </div>
              <div class="flex items-center justify-between mt-5 mb-3">
                <h1 class="font-bold text-xl">{{ itemDetail.subject }}</h1>
                <div class="flex items-center">
                  <div @click="show" class="p-2 text-blue-500 cursor-pointer">
                    Edit
                  </div>
                  <!-- <DeleteNote /> -->
                  <div @click="showDelete" class="text-red-500 cursor-pointer">
                    Hapus
                  </div>
                  <DeleteNoteTeam
                    :pesan="itemDetail"
                    :id="itemDetail.id"
                    :showDelete="del"
                    @close="hideDelete"
                  />
                </div>
              </div>
              <p class="font-sans mb-3 break-all">
                {{ itemDetail.description }}
              </p>

              <div class="mb-4">
                <div
                  v-for="(member, index) in itemDetail.member.slice(0, 2)"
                  :key="index"
                  class="my-3 bg-sky-500 px-5 py-2 rounded-full text-white text-center font-semibold font-sans max-w-[130px]"
                >
                  {{ member.username }}
                </div>
                <div
                  v-if="itemDetail.member.length > 2"
                  class="flex items-center mt-2"
                >
                  <p>dan {{ sisaMember }} orang lagi.</p>
                  <div
                    @click="showMember"
                    class="text-sky-500 px-1 cursor-pointer"
                  >
                    Lihat semua
                  </div>
                  <PopupMemberCollab
                    :memberCollab="itemDetail"
                    :showMember="member"
                    @close="hideMember"
                  />
                </div>
              </div>
              <!-- <div class="mt-4">
                <Upload :file="itemDetail.file" :idNote="itemDetail.id" />
              </div> -->
              <div class="mb-2">
                <label for="" class="font-bold"> Upload File</label>
                <p>File yang support adalah .jpg , .png atau .pdf</p>
              </div>
              <div>
                <form action="">
                  <input
                    type="file"
                    multiple
                    name="file"
                    id="fileInput"
                    class="overflow-hidden absolute opacity-0"
                    @change="onChange"
                    ref="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    :disabled="isButtonDisabled"
                  />
                </form>
                <div
                  class="text-base bg-white text-black font-semibold py-2 px-5 border border-slate-300 w-44 rounded cursor-pointer disabled:bg-slate-500"
                >
                  <label for="fileInput" class="text-center">
                    <div v-if="files">Upload file</div>
                  </label>
                </div>

                <div class="mt-4" v-if="files.length && !isUpload">
                  <div v-for="file in files" :key="file.name" class="flex mb-5">
                    <div>
                      <img
                        class="w-72 h-44 rounded border"
                        :src="generateThumbnail(file)"
                      />
                      <div
                        class="flex items-center justify-between bg-slate-200 border"
                      >
                        <p class="px-3" :title="file.name">
                          {{ makeName(file.name) }}
                        </p>
                        <div>
                          <button
                            class="ml-2 mt-2"
                            type="button"
                            @click="remove(files.indexOf(file))"
                            title="Remove file"
                          >
                            <iconHapusIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-4 mt-4">
                <div>File Dokumen :</div>
                <!-- <div class="text-sky-500 underline">Bukti transaksi.png</div>
                  <div class="text-sky-500 underline">Tiket pesawat.pdf</div> -->
                <div v-if="itemDetail.file.length > 0">
                  <div
                    v-for="(file, index) in itemDetail.file.slice(0, 2)"
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
                </div>
                <div v-else>Belum ada document</div>
                <div
                  v-if="itemDetail.file.length > 2"
                  class="flex items-center mt-2"
                >
                  <p>dan {{ sisaDoc }} dokument lagi.</p>
                  <div
                    @click="showDoc"
                    class="text-sky-500 px-1 cursor-pointer"
                  >
                    Lihat semua
                  </div>
                  <PopupDocumentCollab
                    :docCollab="itemDetail"
                    :showDoc="doc"
                    @close="hideDoc"
                  />
                </div>
              </div>

              <div class="mb-4">
                <div class="flex">
                  <p class="mr-1">Tanggal Acara</p>
                  <span> : </span>
                  <p class="px-2">{{ formatDate(itemDetail.event_date) }}</p>
                </div>
                <div class="flex">
                  <p class="mr-9">Reminder</p>
                  <span class=""> : </span>
                  <p class="px-2">
                    {{ formatDate(itemDetail.reminder) }}
                  </p>
                </div>
                <div class="flex">
                  <p class="mr-10">Ringtone</p>
                  <span> : </span>
                  <p class="px-2">{{ itemDetail.ringtone }}</p>
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
              <!-- <div>
                <button
                  type="submit"
                  @click="showModal"
                  class="float-right inline-flex justify-center rounded border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none"
                >
                  Selesaikan Catatan
                </button>
              </div> -->
              <div>
                <button
                  type="submit"
                  @click="upload(idNote)"
                  class="float-right inline-flex justify-center rounded border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium disabled:bg-slate-500 text-white hover:bg-blue-600 focus:outline-none"
                >
                  Simpan File
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
    showDetail: {
      type: Boolean,
      default: false,
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
      isUpload: false,
      idNote: this.itemDetail.id
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
    sisaMember() {
      return this.itemDetail.member.length - 2
    },
    sisaDoc() {
      return this.itemDetail.file.length - 2
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
      this.$store.commit('coloms/detailnotes', null)
      this.$store.commit('coloms/setShowDetail', false)
    },
    formatDate(date) {
      return this.$moment(date).format('DD/MM/YYYY HH:mm')
    },
    formatToH() {
      if (this.itemDetail.event_date && this.itemDetail.reminder) {
        const date1 = new Date(this.itemDetail.event_date)
        const date2 = new Date(this.itemDetail.reminder)
        const diffTime = Math.abs(date2 - date1)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return `h-${diffDays}`
      }
      return ''
    },

    onChange(e) {
      this.files = [...this.files, ...this.$refs.file.files]
    },

    generateThumbnail(file) {
      const fileSrc = URL.createObjectURL(file)
      setTimeout(() => {
        URL.revokeObjectURL(fileSrc)
      }, 1000)
      return fileSrc
    },

    makeName(name) {
      return (
        name.split('.')[0].substring(0) +
        '.' +
        name.split('.')[name.split('.').length - 1]
      )
    },

    async upload(idNote) {
      try {
        this.isUpload = true
        const formData = new FormData()
        for (let i = 0; i < this.files.length; i++) {
          // const file = this.files[i]

          formData.append('path[]', this.files[i])
        }
        formData.append('note_id', idNote)

        await this.$axios.post(
          `https://bantuin.fly.dev/api/attaches`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )

        alert('Selamat Anda berhasil upload')
        this.$store.dispatch('notes/fetchNotes')
        this.$store.commit('notes/setShowDetail', false)
        this.$store.commit('notes/detailNotes', null)
        this.$router.go()
      } catch (e) {
        console.log(e)
        console.log('Upload File Failled')
        alert('maaf file anda gagal upload')
      }

      // .finally(() => {
      //   this.isUpload = false
      // })
    },
    remove(i) {
      this.files.splice(i, 1)
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
