<template>
  <div class="">
    <div
      v-if="show"
      class="bg-opacity-50 bg-black fixed inset-0 justify-center items-center overflow-y-auto overflow-x-hidden z-20"
    >
      <div class="mt-10 my-10">
        <div class="bg-white max-w-2xl w-full rounded p-6 mx-auto shadow-lg">
          <!-- fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center -->
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              {{ this.edit ? 'Edit Catatan' : 'Buat Catatan' }}
            </h3>
            <div
              @click="showCancel"
              class="w-10 h-10 rounded-full flex mt-3 top-5 right-5 cursor-pointer"
            >
              <iconSilangIcon />
            </div>
          </div>

          <CancelEdit
            v-if="isShowCancelEdit"
            @close="hideCancel"
            @delete="handleBuang"
          />

          <div class="mt-4">
            <form action="" @submit.prevent="handleSubmit" class="w-full">
              <div>
                <div class="flex">
                  <label
                    for="subjek"
                    class="mb-2 block text-sm flex items-start"
                  >
                    Subjek</label
                  >
                  <div class="text-red-500 px-1">*</div>
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    name="subjek"
                    v-model="subject"
                    @input="subjectValidate"
                    placeholder="Tulis Subjek"
                    required
                    class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                  <span v-if="subjectError" class="text-red-500">{{
                    subjectError
                  }}</span>
                  <span v-if="error.subject" class="text-red-500"
                    >username {{ error.subject[0] }}</span
                  >
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between">
                  <div class="flex">
                    <label for="deskripsi" class="mb-2 block text-sm"
                      >Deskripsi
                    </label>
                    <div class="text-red-500 px-1">*</div>
                  </div>
                  <p class="font-sans">{{ tambahAngka }}/250</p>
                </div>

                <div class="mb-3">
                  <textarea
                    v-model="description"
                    @input="descriptionValidate"
                    name="deskripsi"
                    placeholder="Tulis Deskripsi Catatan"
                    class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                  <span v-if="descriptionError" class="text-red-500">{{
                    descriptionError
                  }}</span>
                  <span v-if="error.description" class="text-red-500">{{
                    error.description
                  }}</span>
                </div>
              </div>

              <div class="flex justify-end mt-8">
                <button
                  type="submit"
                  value="submit"
                  class="text-base w-[300px] bg-blue-500 text-white font-semibold py-2 px-5 rounded"
                >
                  {{ this.edit ? 'Simpan Catatan' : 'Buat Catatan' }}
                </button>
              </div>
              <!-- <EditNote
                :form="item"
                v-if="isShowEdit"
                @close="hideEdit"
                @edit="confirmEdit"
              /> -->
              <!-- coba -->
              <!-- <div class="flex justify-end mt-8">
                      <button
                        @click="showEdit"
                        type="submit"
                        value="submit"
                        class="text-base w-[300px] bg-blue-500 text-white font-semibold py-2 px-5 rounded"
                      >
                        Edit Catatan
                      </button>
                    </div>
                    <EditNote/> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // components: { VueTimepicker },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => ({}),
    },
    edit: {
      Boolean,
      default: false,
    },

    colomn: {
      type: Object,
      default: () => ({}),
    },
    // label: {
    //   type: String,
    //   required: true,
    // },
  },
  data() {
    const date = new Date()
    date.setMinutes(0, 0, 0)
    return {
      isShowEdit: false,
      isShowCancelEdit: false,
      error: {},
      errorMessage: null,

      items: [],
      options: [],

      deadlines: [],
      // toggle: false,
      // toggletgl: false,
      // date: null,
      // form input

      subjectError: '',
      descriptionError: '',
      emailError: '',

      dateError: '',
      datetimeError: '',
      subject: this.item.subject,
      description: this.item.description ?? '',

      voiceError: '',
      // teksDeskripsi: false,
    }
  },
  async created() {
    await this.ringtone()
  },

  methods: {
    addEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (emailRegex.test(this.email)) {
        this.items.push(this.email)
        this.email = ''
      }
    },
    remove(i) {
      this.items.splice(i, 1)
    },
    addRemainder() {
      if (!this.datetime) {
        return
      }
      this.deadlines.push(
        this.$moment(this.datetime).format('MMM DD,YYYY hh:mm A')
      )

      this.datetime = ''
    },
    removeDeadlines(i) {
      this.deadlines.splice(i, 1)
    },
    subjectValidate() {
      if (!this.subject) {
        this.subjectError = 'Anda belum mengisi subject.'
      } else {
        this.subjectError = ''
      }
    },
    descriptionValidate() {
      if (!this.description) {
        this.descriptionError = 'Anda belum mengisi deskripsi.'
      }
      if (this.description.length > 250) {
        // this.teksDeskripsi = true
        // Menghapus karakter ke-101 dan seterusnya
        this.description = this.description.slice(0, 250)
      } else {
        this.descriptionError = ''
      }
    },
    async handleSubmit() {
      if (this.edit && this.item.note_type === 'collaboration') {
        this.isShowEdit = true
      }
      if (this.edit && this.item.note_type !== 'collaboration') {
        await this.$store.dispatch('notesTeam/updateNote', {
          idNote: this.item.id,
          data: {
            subject: this.subject,
            description: this.description,
          },
        })
        .finally(() => this.$router.go())
      }
      try {
        await this.$store.dispatch('notesTeam/addNoteTeam', {
          column_id: this.colomn.id,
          subject: this.subject,
          description: this.description,
        })
        // this.$router.push('/catatan')
        //   this.$router.go()
      } catch (error) {
        this.error = error.response.data.data
        this.errorMessage = error.response.data.message
        console.log(error)
        alert('maaf catatan anda gagal dibuat')
      }

      this.$router.go()
    },
    async hapus() {
      try {
        await this.$store.dispatch('notes/remove', this.item.id, {
          email: this.item.member,
        })
      } catch (error) {
        console.log(error)
      }
    },
    async ringtone() {
      try {
        const response = await this.$axios.$get(
          'https://bantuin.fly.dev/api/ringtones'
        )
        this.options = response.data
      } catch (error) {
        console.log(error)
      }
    },

    showCancel() {
      if (this.edit) {
        this.isShowCancelEdit = true
      } else {
        this.$emit('close')
      }
    },
    confirmEdit() {
      this.$store.dispatch('notes/updateNote', {
        idNote: this.item.id,
        data: {
          subject: this.subject,
          description: this.description,
          email: this.items,
          // email: (this.email = []),
          event_date: this.date,
          reminder: this.datetime,
          ringtone_id: this.voice,
        },
      })
    },
    hideCancel() {
      this.isShowCancelEdit = false
    },
    handleBuang() {
      if (this.edit) this.$emit('close')
    },

    // showEdit() {
    //   if (this.edit) {
    //     this.isShowEdit = true
    //   } else {
    //     this.$emit('close')
    //   }
    // },
    hideEdit() {
      this.isShowEdit = false
    },
    handleEdit() {
      if (this.edit) this.$emit('close')
    },
  },
  computed: {
    tambahAngka() {
      return this.description.length
    },
    getTime() {
      // return this.date.split(' ')
      return this.$moment(this.date).format('type MMM DD,YYYY hh:mm A')
    },
    // getAlarm() {
    //   // return this.date.split(' ')
    //   return this.$moment(this.remainder).format('MMM DD,YYYY hh:mm A')
    // },
    remainderDisabled() {
      return this.date === ''
    },
  },
}
</script>

<style>
.editableDiv2 {
  border-bottom: 1px solid gray;
  outline: none;
  margin-top: 20px;
}
.editableDiv2[contentEditable='true']:empty:before {
  content: attr(placeholder);
}
</style>
