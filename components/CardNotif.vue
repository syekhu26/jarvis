<template>
  <div class="flex border border-gray-400 bg-gray-300 h-[115px] p-3">
    <!-- <img
      class="w-9 h-9 rounded-full mx-3"
      :src="avatar"
      alt=""
    /> -->
    <div
      class="w-12 h-7 rounded-full mx-3 border border-slate-400 bg-white text-center"
    >
      {{ itemNotif.sender.charAt(0).toUpperCase() }}
    </div>
    <div class="pr-3">
      <p class="text-sm">
        {{ itemNotif.sender }}
        <span class=""> {{ itemNotif.title }} </span>
        <span v-if="itemNotif.notif_type === 'collab'">
          undangan catatan dari anda.
        </span>
        <span v-if="itemNotif.notif_type === 'team'">
          undangan grup dari anda.
        </span>
        <span class="opacity-50 mx-1">{{ itemNotif.send }}</span>
      </p>
      <!-- <div class="flex text-blue-600 my-2">
        <iconNoteIcon class="h-5 w-5" />
        <p class="text-sm">{{ itemNotif.sender_place }}</p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemNotif: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    avatar() {
      return this.itemNotif.sender.charAt(0).toUpperCase()
    },
  },
}
</script>
