<template>
  <div>
    <div
      class="border border-slate-300 bg-slate-100 w-full rounded max-w-xl h-[145px]"
    >
      <div class="flex items-center">
        <div>
          <img
            class="h-10 w-10 rounded-full m-3"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div class="flex item-center w-full">
          <!-- history.data.note_created_at -->
          <!-- {{ reqlist.data.from }} -->
          <!-- <div v-for="request in reqlist.data" :key="request.id">
            {{ request.from }}
          </div> -->
          <p class="font-bold text-md">
            {{ request.from }}
          </p>
          <div class="text-black px-1">
            {{ request.message }}
          </div>
          <div class="text-slate-400">5 menit lalu</div>
        </div>
      </div>
      <div class="flex items-center px-12">
        <iconTaskIcon />
        <div class="font-bold text-blue-600">{{ request.note }}</div>
      </div>
      <div class="flex justify-end">
        <div v-for="button in tukarPosisi" :key="button.id">
          <button
          v-if="button.url === 'https://bantuin.fly.dev/api/note/inv/decline_invitation/f1763262f0affa8ed620bcaf159d8baf832b0d96'"
          class="border border-red-500 hover:bg-red-300 bg-white px-5 py-1 mx-2 rounded"
        >
          <!-- Tolak {{ button.url }} -->
          <a :href="button.url">Tolak</a>
        </button>
        <button
        v-else-if="button.url === 'https://bantuin.fly.dev/api/note/inv/accept_invitation/f1763262f0affa8ed620bcaf159d8baf832b0d96'"
          class="bg-[#0F62FE] hover:bg-blue-400 text-white hover:text-black px-5 py-1 mx-2 rounded"
        >
          <a :href="button.url">Terima</a> 
          <!-- Terima {{ button.url }} -->
        </button>
        </div>
        <!-- <div class="border border-red-500 hover:bg-red-300 bg-white px-5 py-1 mx-2 rounded" v-for="request in request.actions" :key="request.id">
          {{ request.action }}
        </div> -->
        <!-- {{ request.action }} -->
      </div>
    </div>
  </div>
  <!-- <div class="mx-2 my-2">
      <div class="border border-gray-300 h-[172px] w-[547px] p-3 bg-[#DDE1E6] rounded-md">
          <div class="flex">
            <img
              class="h-10 w-10 rounded-full m-3"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="flex justify-between">
              <div>
                <p class="text-lg">
                  Nama User Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div class="flex my-2">
                  <iconTeamIcon class="h-[16px] w-[16px] mx-1" />
                  <p class="text-sm text-gray-500 mx-1">Membeli Tiket pesawat</p>
                </div>
                <p class="text-sm opacity-25">5 menit yang lalu</p>
              </div>
          </div>
      </div>
      <div class="flex justify-end">
          <button class="border border-red-500 hover:bg-red-300 bg-white px-5 py-1 mx-2 rounded">tolak</button>
          <button class="bg-[#0F62FE] hover:bg-blue-400 text-white hover:text-black px-5 py-1 mx-2 rounded">terima</button>
      </div>
      </div>
    </div> -->
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {
    request: {
      // type: Number,
      // default: null,
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapState('notes', ['reqlist']),
    tukarPosisi() {
     // Buat array baru dengan posisi index yang ditukar
     const newArray = [...this.request.actions];
      const temp = newArray[0];
      newArray[0] = newArray[1];
      newArray[1] = temp;
      return newArray;
    },
  },
  mounted() {
    this.$store.dispatch('notes/reqlist', this.request.id)
  },
  method: {
    ...mapActions('notes', ['reqlist']),
  },
}
</script>

reqlist.data.from reqlist.data[1].from
