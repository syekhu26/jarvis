<template>
  <div>
    <!-- <ButtonGlobal @click="isOpen = !isOpen" /> -->
    <div>
      <div
        v-if="isOpen"
        class="fixed inset-0 z-10 overflow-y-auto justify-center items-center overflow-x-hidden px-96"
      >
        <div>
          <div class="fixed inset-0 bg-black bg-opacity-50"></div>
        </div>
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
                <form action="" class="w-full">
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
                        v-model="deskripsi"
                        @input="deskripsiValidate"
                        name="deskripsi"
                        placeholder="Masukkan Deskripsi"
                        class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <span v-if="deskripsiError" class="text-red-500">{{
                        deskripsiError
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
                @click="addReminder"
                class="flex items-center mb-3 text-blue-600 cursor-pointer"
              >
                <iconPlusIcon />
                <span class="px-1">Tambah reminder</span>
              </div>
              <div>
                <label class="mb-2 block text-sm" for="date">
                  Pilih Waktu
                </label>
                <div class="flex items-center">
                  <input
                    step="1"
                    name="waktu"
                    type="time-local"
                    placeholder="Jam : Menit"
                    class="border text-black px-4 py-2 w-full mb-3 focus:outline-none focus:border-blue-500"
                  />
                  <select class="border h-11 -mt-3">
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>

              <!-- <div>
                <vue-timepicker
                  input-width="w-4"
                  placeholder="jam:menit"
                ></vue-timepicker>
              </div> -->

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
    return {
      isOpen: false,

      items: [],

      deadlines: [],
      // toggle: false,
      // toggletgl: false,
      // date: null,
      // form input

      subjectError: '',
      deskripsiError: '',
      emailError: '',

      dateError: '',
      datetimeError: '',
      // repeat: '',
      // repeatError: '',
      subject: '',
      deskripsi: '',
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
      if (!this.input) {
        return
      }
      this.items.push(this.input)
      this.input = ''
    },
    remove(i) {
      this.items.splice(i, 1)
    },
    removeDeadline(i) {
      this.deadlines.splice(i, 1)
    },
    addReminder() {
      if (!this.remainder) {
        return
      }
      this.deadlines.push(this.remainder)
      this.remainder = ''
    },
    addNote() {
      if (!this.note) {
        return
      }
      this.dataNote.push(this.note)
      this.note = [
        {
          subject: '',
          deskripsi: '',
          email: '',
          date: '',
          datetime: '',
          pengingat: '',
          voice: '',
        },
      ]
    },
    // addNote() {
    //   if (!this.note) {
    //     return
    //   }
    //   this.dataNote.push(this.note)
    //   this.note = [
    //     {
    //       subject: '',
    //       deskripsi: '',
    //       email: '',
    //       date: '',
    //       datetime: '',
    //       pengingat: '',
    //       voice: '',
    //     },
    //   ]
    // },
  },
  computed: {
    tambahAngka() {
      return this.deskripsi.length
    },
  },
}
</script>
