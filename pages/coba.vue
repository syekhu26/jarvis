<!-- <template>
  <div>
    <Mencoba />
    <div v-for="file in uploadedFiles" :key="file.name">
      <a :href="file.url">{{ file.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadedFiles: [],
    }
  },
}
</script> -->

<template>
  <div>
    <div class="lg:flex lg:flex-row-reverse lg:min-h-screen">
      <!-- Sidebar -->
      <div class="lg:w-1/4 bg-gray-200">
        <!-- Konten Sidebar -->
        <div>woke</div>
      </div>

      <!-- Konten Utama -->
      <div class="lg:w-3/4">
        <!-- Konten Utama -->
        <div>selamat pagi</div>
      </div>
    </div>

    <!-- Navbar Bottom -->
    <div class="lg:hidden fixed inset-x-0 bottom-0 z-10 bg-gray-200">
      <!-- Konten Navbar Bottom -->
    </div>
  </div>
</template>
