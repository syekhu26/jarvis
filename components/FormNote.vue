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
                    >subject {{ error.subject[0] }}</span
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
                  <!-- <p v-if="teksDeskripsi" class="text-red-500">
                        Maaf, inputan anda melewati batas.
                      </p> -->
                </div>
              </div>

              <label for="email" class="text-sm mb-2 flex items-start">
                Masukan email anggota</label
              >
              <div
                v-for="anggota in item.member"
                :key="anggota"
                class="bg-slate-200 rounded mb-2 px-2 flex items-center"
              >
                {{ anggota.email }}
                <div>
                  <button
                    v-if="item"
                    class="ml-2 mt-2"
                    type="button"
                    @click="hapus"
                    title="Remove"
                  >
                    <iconSilangIcon class="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div>
                <div
                  v-for="item in items"
                  :key="item"
                  class="bg-slate-200 rounded mb-2 px-2 flex items-center"
                >
                  {{ item }}
                  <div>
                    <button
                      v-if="item"
                      class="ml-2 mt-2"
                      type="button"
                      @click="remove"
                      title="Remove"
                    >
                      <iconSilangIcon class="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="relative text-gray-600 border">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <iconInviteIcon />
                </span>
                <input
                  type="email"
                  name="email"
                  v-model="email"
                  @input="emailValidate"
                  class="py-2 border text-black pl-10 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Masukan email"
                />
              </div>
              <span v-if="emailError" class="text-red-500">{{
                emailError
              }}</span>
              <div
                @click="addEmail"
                class="flex items-center mt-2 text-blue-600 cursor-pointer"
              >
                <iconPlusIcon />
                <span class="px-1">Tambah email</span>
              </div>
              <div>
                <div class="flex">
                  <label
                    class="block text-sm flex items-start mt-3 mb-2"
                    for="date"
                  >
                    Masukan Tanggal Acara
                  </label>
                  <div class="text-red-500 px-1 mt-3">*</div>
                </div>
                <div class="border w-full h-10">
                  <div class="">
                    <vc-date-picker
                      class=""
                      v-model="date"
                      @input="kalenderValidate"
                      :min-date="new Date()"
                      mode="dateTime"
                      :minute-increment="1"
                    >
                      <template #default="{ inputValue, inputEvents }">
                        <div class="flex">
                          <iconKalenderIcon class="mt-3 mx-2" />

                          <input
                            :value="inputValue"
                            v-on="inputEvents"
                            class="w-full mt-2 border-hidden px-2 mb-2 outline-none"
                            placeholder="mm-dd-yyyy"
                          />
                        </div>
                        <span v-if="dateError" class="text-red-500">{{
                          dateError
                        }}</span>
                      </template>
                    </vc-date-picker>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex">
                  <label
                    for="remainder"
                    class="block text-sm mt-3 mb-2 flex items-start"
                  >
                    Tambahkan pengingat</label
                  >
                  <div class="text-red-500 px-1 mt-3">*</div>
                </div>
                <div class="border w-full w-10 h-10 px-2">
                  <vc-date-picker
                    v-model="datetime"
                    @input="remainderValidate"
                    mode="dateTime"
                    :max-date="date"
                    :min-date="new Date()"
                    :minute-increment="1"
                  >
                    <template #default="{ inputValue, inputEvents }">
                      <div class="flex item-center">
                        <iconAlarmIcon class="mt-3" />

                        <input
                          :value="inputValue"
                          v-on="inputEvents"
                          :disabled="remainderDisabled"
                          class="w-full mt-2 px-4 outline-none"
                          placeholder="Pilih waktu reminder"
                        />
                      </div>
                      <span v-if="datetimeError" class="text-red-500">{{
                        datetimeError
                      }}</span>
                    </template>
                  </vc-date-picker>
                </div>
              </div>
              <div>
                <label class="mb-2 block text-sm flex items-start" for="date">
                  Tambahkan pengingat ulangan
                </label>
                <div>
                  <select
                    v-model="ulangan"
                    class="border w-full h-10 mb-3 focus:border-blue-500"
                  >
                    <option value="tidak_diulang">Tidak diulang</option>
                    <option value="harian">Harian</option>
                    <option value="bulanan">Mingguan</option>
                    <option value="mingguan">Bulanan</option>
                  </select>
                </div>
                <div class="-mt-2 mb-4 text-sm flex items-start">
                  Disesuaikan dengan tanggal acara
                </div>
              </div>

              <div>
                <div class="flex">
                  <label
                    for="voice"
                    class="mb-2 block text-sm flex items-start"
                  >
                    Pilih nada dering</label
                  >
                  <div class="text-red-500 px-1">*</div>
                </div>
                <div>
                  <select
                    v-model="voice"
                    class="border w-full h-10 mb-3 focus:border-blue-500 flex items-start"
                  >
                    <option disabled selected value="">
                      Pilih nada dering
                    </option>
                    <option
                      v-for="option in options"
                      :key="option.id"
                      :value="option.id"
                    >
                      {{ option.name }}
                    </option>
                  </select>
                  <div v-if="voiceError" class="text-red-500">
                    {{ voiceError }}
                  </div>
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
              <EditNote
                :form="item"
                v-if="isShowEdit"
                @close="hideEdit"
                @edit="confirmEdit"
              />
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
      // coba: this.anggota.email,
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
      email: this.item.items ?? '',
      date: this.item.event_date ?? '',
      datetime: this.item.reminder ?? '',
      ulangan: this.item.frequency ?? 'tidak_diulang',
      voice: this.item.ringtone_id ?? '',

      voiceError: '',
      // teksDeskripsi: false,
    }
  },
  async created() {
    await this.ringtone()
  },
  methods: {
    cobaEmail() {
    for (let i = 0; i < this.item.member; i++) {
      console.log(this.item.member[i]) // Lakukan sesuatu dengan setiap item dalam dataArray
    }
  },
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
    emailValidate() {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.email.match(emailRegex)) {
        this.emailError = 'Email yang anda masukkan tidak valid'
      } else {
        this.emailError = ''
      }
    },
    kalenderValidate() {
      if (!this.date) {
        this.dateError = 'Anda belum memasukkan tanggal acara.'
      } else {
        this.dateError = ''
      }
    },
    remainderValidate() {
      if (!this.datetime) {
        this.datetimeError = 'Anda belum menambahkan pengingat.'
      } else {
        this.datetimeError = ''
      }
    },
    voiceValidate() {
      if (this.voice === '') {
        this.voiceError = 'Anda belum menambahkan pengingat.'
      } else {
        this.voiceError = ''
      }
    },
    async handleSubmit() {
      if (this.edit && this.item.note_type === 'collaboration') {
        this.isShowEdit = true
      }
      if (this.edit && this.item.note_type !== 'collaboration') {
        await this.$store
          .dispatch('notes/updateNote', {
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
          .finally(() => this.$router.go())
        alert('Catatan berhasil tersimpan')
      }
      if (!this.edit) {
        try {
          await this.$store.dispatch('notes/addNote', {
            subject: this.subject,
            description: this.description,
            // email: this.items && this.email,
            email: this.items,
            event_date: this.date,
            reminder: this.datetime,
            frequency: this.ulangan,
            ringtone_id: this.voice,
          })
          this.$router.go('/catatan')
          alert('Catatan berhasil dibuat')
        } catch (error) {
          this.error = error.response.data.data
          this.errorMessage = error.response.data.message
          console.log(error)
          alert('maaf catatan anda gagal dibuat')
        }
      }
      // this.$router.go()
    },
    async hapus() {
      try {
        await this.$store.dispatch('notes/remove', {
          id: this.item.id,
          data : {
            email: this.anggota.email,
          }
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
    // async updateNote(note) {
    //   await this.$store.dispatch('notes/updateNote', note)
    // },
    // async addNote() {
    //   try {
    //     await this.$axios
    //       .post('https://bantuin.fly.dev/api/notes', {
    //         data: {
    //           subject: this.subject,
    //           description: this.description,
    //           event_date: this.date,
    //           reminder: this.datetime,
    //           ringtone_id: this.voice,
    //         },
    //       })

    //       .then((response) => {
    //         console.log(response.data)
    //         alert('Catatan berhasil disimpan!')
    //       })
    //   } catch (error) {
    //     console.error(error)
    //     alert('Terjadi kesalahan saat menyimpan catatan.')
    //   }
    // },
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
