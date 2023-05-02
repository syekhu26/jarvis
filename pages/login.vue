<template>
  <div class="flex justify-center items-center mt-24">
    <div class="w-full max-w-lg">
      <div class="bg-white shadow-lg border rounded px-8 pt-6 pb-8 mb-4">
        <div class="flex item-center justify-center mb-5">
          <img
            src="../assets/img/logoipsum-245 1.png"
            alt="logo"
            class="rounded-full w-[52px] h-[41px] mx-3 my-auto"
          />
          <h1 class="text-2xl text-[#0F62FE] font-[IBM Plex Sans]">Bantu.in</h1>
        </div>
        <!-- <h1 class="text-lg font-bold mb-6 mt-3">Masuk</h1> -->
        <div>
          <form action="">
            <div class="">
              <label for="username" class="text-sm font-medium dark:text-white"
                >Email</label
              >
              <div class="mb-3">
                <input
                  class="border text-black px-4 py-2 w-full"
                  placeholder="Masukkan Email"
                  required
                />
              </div>
              <label for="password" class="text-sm font-medium dark:text-white"
                >Kata Sandi</label
              >
              <!-- <div class="relative text-gray-600 border">
                <input
                  class="border text-black px-4 py-2 col-span-2"
                  placeholder="Masukkan Kata Sandi"
                  required
                />
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <iconInviteIcon />
                </span>
              </div> -->
              <!-- <div class="relative w-full">
                <input
                  :type="inputTypeIcon"
                  class="border text-black px-4 py-2 col-span-2 w-full"
                  placeholder="Masukkan Kata Sandi"
                  required
                />
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-4"
                  @click.prevent="ToggleIcon"
                >
                  <i v-if="inputTypeIcon == 'password'"><iconEyeShow /></i>
                  <i v-else><iconEyeHide /></i>
                </div>
              </div> -->
              <div class="mb-3">
                <input
                  :type="inputTypeIcon"
                  class="border text-black px-4 py-2 w-full"
                  placeholder="Masukkan Password"
                  required
                />
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-[445px] -mt-20"
                  @click.prevent="ToggleIcon"
                >
                  <i v-if="inputTypeIcon == 'password'"><iconEyeShow /></i>
                  <i v-else><iconEyeHide /></i>
                </div>
              </div>
              <div class="float-right mb-8">
                <NuxtLink to="/#" class="text-blue-500"
                  >Lupa Kata Sandi?</NuxtLink
                >
              </div>
            </div>

            <button
              class="text-base bg-blue-600 text-white font-semibold py-3 px-8 w-full rounded hover:shadow-lg hover:bg-slate-700"
            >
              Masuk
            </button>
          </form>
        </div>
        <div class="mb-8 mt-8 justify-center items-center flex">
          Belum punya akun?
          <NuxtLink to="/register" class="text-blue-500">Daftar</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputTypeIcon: 'password',
    }
  },
  methods: {
    ToggleIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === 'password' ? 'text' : 'password'
    },
  },
}
</script>
