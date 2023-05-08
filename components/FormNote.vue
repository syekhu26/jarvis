<template>
  <div>
    <!-- <ButtonGlobal @click="isOpen = !isOpen" /> -->
    <div>
      <div class="">
        <div
          v-if="show"
          class="bg-opacity-50 bg-black fixed inset-0 justify-center items-center overflow-y-auto overflow-x-hidden z-20"
        >
          <div class="mt-10 my-10">
            <div
              class="bg-white max-w-2xl w-full rounded p-6 mx-auto shadow-lg"
            >
              <!-- fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center -->
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Buat Catatan
                </h3>
                <div
                  @click="$emit('close')"
                  class="w-10 h-10 rounded-full flex mt-3 top-5 right-5 cursor-pointer"
                >
                  <iconSilangIcon />
                </div>
              </div>

              <div class="mt-4">
                <form action="" @submit.prevent="handleSubmit" class="w-full">
                  <div>
                    <label for="subjek" class="mb-2 block text-sm">
                      Subjek</label
                    >
                    <div class="mb-3">
                      <input
                        type="text"
                        name="subjek"
                        v-model="subject"
                        @input="subjectValidate"
                        placeholder="Masukkan Subjek"
                        required
                        class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <span v-if="subjectError" class="text-red-500">{{
                        subjectError
                      }}</span>
                    </div>
                  </div>
                  <div>
                    <div class="flex items-center justify-between">
                      <label for="deskripsi" class="mb-2 block text-sm"
                        >Tulis Deskripsi
                      </label>
                      <p class="font-sans">{{ tambahAngka }}/100</p>
                    </div>
                    <div class="mb-3">
                      <textarea
                        v-model="description"
                        @input="descriptionValidate"
                        name="deskripsi"
                        placeholder="Masukkan Deskripsi"
                        class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <span v-if="descriptionError" class="text-red-500">{{
                        descriptionError
                      }}</span>
                    </div>
                  </div>
                  <div>
                    <label for="email" class="mb-2 block text-sm">
                      Pilih Bagian Yang Terlibat</label
                    >
                  </div>
                  <div class="relative text-gray-600 border">
                    <span
                      class="absolute inset-y-0 left-0 flex items-center pl-2"
                    >
                      <iconInviteIcon />
                    </span>
                    <input
                      type="email"
                      name="email"
                      v-model="email"
                      @input="emailValidate"
                      class="py-2 border text-black pl-10 w-full focus:outline-none focus:border-blue-500"
                      placeholder="Masukkan Email"
                    />
                  </div>
                  <span v-if="emailError" class="text-red-500">{{
                    emailError
                  }}</span>
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

                  <div
                    @click="addEmail"
                    class="flex items-center mt-2 mb-3 text-blue-600 cursor-pointer"
                  >
                    <iconPlusIcon />
                    <span class="px-1">Tambah email</span>
                  </div>
                  <div>
                    <label class="mb-2 block text-sm" for="date">
                      Tanggal Acara
                    </label>
                    <!-- <div>
                      <div
                        @click="toggletgl = !toggletgl"
                        class="border-2 w-10 h-10 w-full focus:outline-none focus:border-blue-500 mb-3"
                        contentEditable="true"
                        placeholder="yyyy-mm-d"
                      >
                    
                      </div>
                    </div> -->
                    <!-- <div
                      class="mt-2 px-2 border-2 w-10 h-10 w-full focus:outline-none focus:border-blue-500 mb-3"
                    >
                      <div class="flex item-center">
                        <iconKalenderIcon class="mt-3" />
                        <div v-if="date" class="px-4">
                            {{ getTime }}
                          </div>
                        <div>
                          <datetime
                            class="mt-2 px-4"
                            type="datetime"
                            v-model="date"
                            @input="kalenderValidate"
                            placeholder="yyyy-mm-d"
                          ></datetime>
                        </div>
                        <span v-if="kalenderError" class="text-red-500">{{
                          kalenderError
                        }}</span>
                      </div>
                    </div> -->
                    <div class="border w-full w-10 h-10 px-2">
                      <div class="">
                        <vc-date-picker
                          class=""
                          v-model="date"
                          @input="kalenderValidate"
                          :min-date="new Date()"
                          mode="dateTime"
                          :minute-increment="5"
                        >
                          <template #default="{ inputValue, inputEvents }">
                            <div class="flex item-center">
                              <iconKalenderIcon class="mt-3" />

                              <input
                                :value="inputValue"
                                v-on="inputEvents"
                                class="w-full mt-2 border-hidden px-4 mb-2 outline-none"
                                placeholder="yyyy-mm-dd"
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
                    <label for="remainder" class="mb-2 block text-sm mt-6">
                      Tambahkan Pengingat</label
                    >
                    <!-- 
                    <div
                      class="mt-2 px-2 border-2 w-10 h-10 w-full focus:outline-none focus:border-blue-500 mb-3"
                    >
                      <div class="flex item-center">
                        <iconAlarmIcon class="mt-3" />
                       
                        <datetime
                          type="datetime"
                          v-model="datetime"
                          class="mt-2 px-4"
                          placeholder="Pilih Waktu Remainder"
                        ></datetime>
                      </div>
                    </div> -->
                    <div class="border w-full w-10 h-10 px-2">
                      <vc-date-picker
                        v-model="datetime"
                        @input="remainderValidate"
                        mode="dateTime"
                        :max-date="date"
                        :min-date="new Date()"
                        :minute-increment="5"
                      >
                        <template #default="{ inputValue, inputEvents }">
                          <div class="flex item-center">
                            <iconAlarmIcon class="mt-3" />

                            <input
                              :value="inputValue"
                              v-on="inputEvents"
                              :disabled="remainderDisabled"
                              class="w-full mt-2 px-4 outline-none"
                              placeholder="Pilih Waktu Remainder"
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
                    <div
                      v-for="deadline in deadlines"
                      :key="deadline"
                      class="bg-slate-200 rounded mb-2 px-2 flex items-center"
                    >
                      {{ deadline }}
                      <div>
                        <button
                          v-if="deadline"
                          class="ml-2 mt-2"
                          type="button"
                          @click="removeDeadlines"
                          title="Remove"
                        >
                          <iconSilangIcon class="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    @click="addRemainder"
                    class="flex items-center mb-3 text-blue-600 cursor-pointer mt-6"
                  >
                    <iconPlusIcon />
                    <span class="px-1">Tambah reminder</span>
                  </div>
                  <div>
                    <label class="mb-2 block text-sm" for="date">
                      Pilih pengingat ulangan
                    </label>
                    <div>
                      <select
                        class="border w-full h-10 mb-3 focus:border-blue-500"
                      >
                        <option>Tidak Diulang</option>
                        <option>Ulangi</option>
                        <option>Tidak Tahu</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label for="voice" class="mb-2 block text-sm">
                      Pilih Voice Reminder</label
                    >
                    <div>
                      <select
                        v-model="voice"
                        class="border w-full h-10 mb-3 focus:border-blue-500"
                      >
                        <option value="">Pilih Ringtone</option>
                        <option value="1">hahahihi</option>
                        <option value="2">aiyaaiya</option>
                        <option value="3">oke</option>
                      </select>
                      <div v-if="voiceError" class="text-red-500">
                        {{ voiceError }}
                      </div>
                    </div>
                  </div>

                  <div class="mb-10">
                    <div>
                      <button
                        type="submit"
                        value="submit"
                        class="float-right text-base bg-sky-500 text-white font-semibold py-2 px-5 rounded hover:shadow-lg hover:bg-sky-700"
                      >
                        Buat Catatan
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
// import 'vue2-timepicker/dist/VueTimepicker.css'
export default {
  // components: { VueTimepicker },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const date = new Date()
    date.setMinutes(0, 0, 0)
    return {
      isOpen: false,

      items: [],

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
      // repeat: '',
      // repeatError: '',
      subject: '',
      description: '',
      email: '',
      date: '',
      datetime: '',
      pengingat: '',
      voice: '',
      voiceError: '',
      // dataNote: [],
      // note: [
      //   {

      //   },
      // ],
    }
  },

  methods: {
    addEmail() {
      if (!this.email) {
        return
      }
      this.items.push(this.email)
      this.email = ''
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
      await this.$store.dispatch('notes/addNote', {
        subject: this.subject,
        description: this.description,
        event_date: this.date,
        reminder: this.datetime,
        ringtone_id: this.voice,
      })
    },
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
      return this.$moment(this.date).format('MMM DD,YYYY hh:mm A')
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
