<template>
  <div>
    <div
      v-if="showModal"
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center"
    >
      <div>
        <div class="fixed inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div class="relative mx-auto w-full max-w-2xl">
        <div class="bg-white w-full rounded shadow-2xl flex flex-col px-8">
          <div class="flex items-center justify-between mt-5">
            <div class="font-bold mb-6 mt-2">Tambah Anggota</div>
            <div @click="$emit('close')">
              <iconSilangIcon class="cursor-pointer" />
            </div>
          </div>

          <!-- <p>{{ tim }}</p> -->
          <form @submit.prevent="tambahEmail">
            <div>
              <div>
                <label for="email" class="mb-2 block text-sm">
                  Masukkan Email Anggota</label
                >
              </div>
              <div class="relative text-gray-600 border">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <iconInviteIcon />
                </span>
                <input
                  type="email"
                  name="email"
                  v-model="email"
                  class="py-2 border text-black pl-10 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Masukkan Email Anggota"
                />
              </div>
              <div>
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
              </div>
              <div
                @click="addEmail"
                class="flex items-center mt-2 mb-3 text-blue-600 cursor-pointer"
              >
                <iconPlusIcon />
                <span class="px-1">Tambah email</span>
              </div>
            </div>
            <div class="mt-11 float-right px-5">
              <button
                type="submit"
                value="Submit"
                class="mt-5 mb-6 bg-blue-600 hover:bg-blue-800 px-4 py-2 text-white font-bold w-full rounded-lg float-right"
              >
                Tambah Anggota
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    itemEmail: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      toggleModal: false,
      email: '',
      items: [],
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

    async tambahEmail() {
      try {
        await this.$store.dispatch('team/tambahEmail', {
          idTeam: this.itemEmail.id,
          data: {
            email: this.items,
          },
        })
        this.$router.go()
        alert('Berhasil menambahkan anggota')
      } catch (error) {
        this.error = error.response.data.data
        this.errorMessage = error.response.data.message
        console.log(error)
        alert('maaf anggota tidak berhasil ditambahkan')
      }
    },
  },
}
</script>

<!-- if (!this.edit) {
} -->
