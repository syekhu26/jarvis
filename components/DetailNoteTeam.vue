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
            <div
              @click="$emit('closeModal')"
              class="cursor-pointer float-right"
            >
              <iconSilangIcon />
            </div>
            <div class="">
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
            </div>
          </div>
          <FormNoteTeam
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
      idNote: this.itemDetail.id,
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
