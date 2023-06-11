<!-- <template>
  <div class="overflow-scroll h-[400px] border border-gray-300 bg-white rounded-md">
    <p class="text-xl p-4">Notifikasi</p>
    <CardNotif
            v-for="notif in notifikasi.data"
            :key="notif.id"
            class="mb-2"
          />
  </div>
  <CardRequest
            v-for="request in reqlist.data"
            :key="request.id"
            :request="request"
            class="mb-2"
          />
</template>
<script>
export default {
  computed: {
    notifikasi() {
      return this.$store.state.notif.notif
    },
    // notes() {
    //   return this.$store.state.notes.notes
    // },
  },
  mounted() {
    this.$store.dispatch('notif/notif')
  },
}
</script> -->

<template>
  <div class="">
    <div class="bg-white max-w-sm w-full rounded p-6 border border-slate-300">
      <p class="text-xl justify-start">Notifikasi</p>
      <!-- <CardNotif/> -->
      <CardNotif
        v-for="notif in notifikasi.data"
        :key="notif.id"
        :itemNotif="notif"
        class="mb-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    notifikasi() {
      return this.$store.state.notif.notif
    },
    client() {
      return this.$store.state.notif.client
    },
    // notes() {
    //   return this.$store.state.notes.notes
    // },
  },
  mounted() {
    this.$store.dispatch('notif/notif')
    this.$store.dispatch('notif/client')
  },
}
</script>

<style>
.editableDiv2 {
  border-bottom: 1px solid gray;
  outline: none;
  margin-top: 20px;
}
.editableDiv2[contentEditable='true']:empty:before {
  content: attr(placeholder);
}
</style>
