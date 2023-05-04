<template>
  <div class="w-full">
    <div>
      <div class="flex items-center justify-between mt-6 px-8 mt-[99px]">
        <h1 class="text-2xl font-bold mb-3">Permintaan masuk</h1>
        <ButtonGlobal />
      </div>
      <div class="min-w-full px-8 items-center mb-8">
        <p class="text-lg">Belum catatan masuk atau undangan grub</p>
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between mt-6 px-8">
        <h1 class="text-2xl font-bold mb-3">Daftar catatan</h1>
      </div>
      <div class="min-w-full px-8 items-center mb-8">
        <CardListNote />
      </div>
    </div>
  </div>
</template>

<script>
import CardListNote from '~/components/CardListNote.vue'

export default {
  layout: 'home',
  components: {
    CardListNote,
  },
}
</script>
