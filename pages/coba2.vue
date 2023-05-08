<template>
  <div>
    <div class="relative w-full">
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
        placeholder="Masukkan Email"
        required
      />
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
    // ToggleButton() {
    //   this.inputType = this.inputType === "password" ? "text" : "password";
    // },
    ToggleButtonIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === 'password' ? 'text' : 'password'
    },
  },
  computed: {},
}
</script>
