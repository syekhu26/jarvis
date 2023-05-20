<template>
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
</script>
