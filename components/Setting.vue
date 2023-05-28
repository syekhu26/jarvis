<template>
  <div @click="isOpen = !isOpen" class="mt-6 px-6 cursor-pointer">
    <div
      class="border border-slate-300 rounded shadow flex items-center justify-center max-w-md w-[159px] h-[32px]"
    >
      <iconSettingIcon />
      <div class="px-1">Semua</div>
    </div>
    <div v-if="isOpen" class="">
      <div class="fixed inset-0 z-20">
        <div class="mt-10 my-10">
          <div
            class="bg-white w-[360px] h-[229] rounded p-3 shadow border border-slate-200 mt-[315px] mx-[365px]"
          >
            <div class="border-b mb-1">Semua</div>
            <div class="border-b mb-1">Selesai</div>
            <div class="border-b mb-1">Telat</div>
            <div>Pemilik</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
