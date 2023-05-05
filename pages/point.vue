<template>
  <div class="px-8 mt-5">
    <CardPoint class="mb-40" />
    <div class="mt-8">
      <h3 class="font-semibold">Tawaran Tersedia</h3>
      <div class="flex-1 overflow-x-auto mt-6">
        <div class="inline-flex h-full items-start space-x-4 pb-4">
          <CardTawaran />
          <CardTawaran />
          <CardTawaran />
          <CardTawaran />
        </div>
      </div>
    </div>
    <div class="mt-8">
      <h3 class="font-semibold">Tawaran Tersedia</h3>
      <div class="flex-1 overflow-x-auto mt-6">
        <div class="inline-flex h-full items-start space-x-4 pb-4">
          <CardTawaran />
          <CardTawaran />
          <CardTawaran />
          <CardTawaran />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'navbar',
}
</script>

<style></style>
