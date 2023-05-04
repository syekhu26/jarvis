<template>
  <div class="w-full">
    <div>
      <div class="flex items-center justify-between mt-6 px-8">
        <h1 class="text-2xl font-bold mb-3">Permintaan masuk</h1>
        <FormNote />
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
        <!-- <CardListNote/> -->
        <DetailPersonal />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isOpen : false,
    }
  },
    layout: "home",
}
</script>
