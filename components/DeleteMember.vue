<template>
  <div>
    <!-- <ButtonGlobal @click="isOpen = !isOpen" /> -->
    <div>
      <div class="">
        <div
          v-if="show"
          class="bg-opacity-50 bg-black fixed inset-0 justify-center items-center overflow-y-auto overflow-x-hidden"
        >
          <div class="mt-10 my-10">
            <!-- <div
              class="bg-white max-w-2xl w-full rounded p-6 mx-auto shadow-lg"
            >
              
            </div> -->
            <div
              class="w-[460px] h-[150px] bg-white justify-center p-3 rounded max-w-sm border-slate-300 border mx-auto mt-[150px]"
            >
              <p class="text-lg font-semibold text-center">
                Apakah anda yakin ingin mengeluarkan anggota ini?
              </p>
              <div class="flex justify-center my-4">
                <button
                  @click="$emit('close')"
                  class="bg-white border rounded w-[200px] py-2 mx-2"
                >
                  Batal
                </button>
                <button
                  class="bg-red-500 text-white rounded w-[200px] py-2 mx-2"
                >
                  Ya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
