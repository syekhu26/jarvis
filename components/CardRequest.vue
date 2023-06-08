<template>
  <div>
    <div
      class="border border-slate-300 bg-slate-100 w-full rounded max-w-xl h-[145px]"
    >
      <div class="flex items-center">
        <div>
          <img class="h-10 w-10 rounded-full m-3" :src="avatar" alt="" />
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
          <div class="text-slate-400">{{ formattedTimeAgo }}</div>
        </div>
      </div>
      <div class="flex items-center px-12">
        <div class="flex">
          <iconTaskIcon />
          <div class="font-bold text-blue-600">{{ request.note }}</div>
        </div>
        <!-- <div>
          <iconGroupIcon />
          <div class="font-bold text-blue-600">{{ request.team }}</div>
        </div> -->
      </div>
      <div class="flex justify-end">
        <div v-for="(button, index) in tukarPosisi" :key="button.id">
          <button
            v-if="index === 0"
            class="border border-red-500 hover:bg-red-300 bg-white px-5 py-1 mx-2 rounded"
          >
            <!-- {{ button.action }} -->
            <a :href="button.url">Tolak</a>
          </button>
          <button
            v-else-if="index === 1"
            class="bg-[#0F62FE] hover:bg-blue-400 text-white hover:text-black px-5 py-1 mx-2 rounded"
          >
            <a :href="button.url">Terima</a>
            <!-- {{ button.url }} -->
          </button>
        </div>
        <!-- <div class="border border-red-500 hover:bg-red-300 bg-white px-5 py-1 mx-2 rounded" v-for="request in request.actions" :key="request.id">
          {{ request.action }}
        </div> -->
        <!-- {{ request.action }} -->
      </div>
    </div>
  </div>
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
  data() {
    return {
      waktu: this.request.date_invite,
    }
  },
  computed: {
    ...mapState('notes', ['reqlist']),
    tukarPosisi() {
      const newArray = [...this.request.actions]
      const temp = newArray[0]
      newArray[0] = newArray[1]
      newArray[1] = temp
      return newArray
    },
    avatar() {
      return this.request.photo || require('@/assets/img/profile-user-svgrepo-com.png')
    },

    formattedTimeAgo() {
      const now = this.$moment()
      const time = this.$moment(this.waktu)
      const timeAgo = now.diff(time, 'minutes')
      return this.$moment.duration(timeAgo, 'minutes').humanize(true)
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

<!-- reqlist.data.from reqlist.data[1].from -->
