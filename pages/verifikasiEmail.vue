<template>
  <div class="flex justify-center items-center mt-32">
    <div class="w-full max-w-lg">
      <div class="bg-white shadow-lg border rounded px-8 pt-6 pb-8 mb-4">
        <div class="flex item-center justify-center mt-5">
          <img
            src="../assets/img/logoipsum-245 1.png"
            alt="logo"
            class="rounded-full w-[52px] h-[41px] mx-3 my-auto"
          />
          <h1 class="text-2xl text-[#0F62FE] font-[IBM Plex Sans]">Bantu.in</h1>
        </div>
        <div class="mt-8 text-center font-sans">
          <h1 class="text-xl font-bold mb-6 mt-3">Verifikasi Email</h1>
          <p>Kode telah dikirim ke ahmad@gmail.com</p>
        </div>
        <div>
          <form action="">
            <!-- <div class="flex items-center justify-center mt-12 mb-12">
              <input
                type="text"
                class="w-10 h-10 border border-slate-500 text-center m-4"
              />
              <input
                type="text"
                class="w-10 h-10 border border-slate-500 text-center m-4"
              />
              <input
                type="text"
                class="w-10 h-10 border border-slate-500 text-center m-4"
              />
              <input
                type="text"
                class="w-10 h-10 border border-slate-500 text-center m-4"
              />
            </div> -->
            <div class="mt-8 mb-8 px-5 m-14">
              <v-otp-input
                inputClasses="w-12 h-12 border border-slate-500 text-center rounded m-4 p-1.5 text-xl"
                :numInputs="4"
                separator=""
                :shouldAutoFocus="true"
              />
            </div>
            <div class="text-center">
              <h4>
                Tidak menerima kode?
                <span class="text-blue-500">Kirim lagi</span>
              </h4>
            </div>
            <button
              class="text-base bg-slate-500 text-white font-semibold py-3 px-8 w-full rounded hover:shadow-lg hover:bg-slate-700 mt-5"
            >
              Verifikasi
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OtpInput from '@bachdgvn/vue-otp-input'

export default {
  components: {
    'v-otp-input': OtpInput,
  },
  methods: {
    // handleOnComplete(value) {
    //   console.log('OTP: ', value)
    // },
    // handleOnChange(value) {
    //   console.log('OTP: ', value)
    // },
  },
}
</script>
