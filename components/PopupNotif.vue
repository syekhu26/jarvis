<template>
  <div class="overflow-scroll h-[400px] border border-gray-300 rounded-md">
    <p class="text-xl p-4">Notifikasi</p>
    <CardNotif v-for="(value, index) in 5" :key="index"/>
  </div>
</template>
