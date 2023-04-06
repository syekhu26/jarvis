<template>
  <div class="w-full">
    <div class="flex items-center justify-between px-8 mt-6">
      <h1 class="font-bold">TIM</h1>
      <FormCreateGrup />
    </div>
    <hr />
    <p class="p-8">Belum ada tim yang dibuat</p>

    <CardGroup />

    <!-- <p>{{ output }}</p> -->

    <!-- <div
      v-if="toggleModal"
      class="absolute z-40 insert-0 opacity-25 bg-black"
    ></div> -->
  </div>
</template>

<script>
export default {
  layout: 'home',
}
</script>

<style></style>
