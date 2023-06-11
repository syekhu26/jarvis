<template>
  <div class="bg-white py-3 rounded px-5">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img
          class="rounded-full w-10 h-10 mx-1"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
        <h5 class="px-2">Nabil Ahmad</h5>
      </div>
      <div @click="show">
        <iconHapusIcon />
      </div>
    </div>
    <DeleteMember :show="isOpen" @close="hide" />
  </div>
</template>

<script>
export default {
  props: {
    team: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    show() {
      this.isOpen = true
    },
    hide() {
      this.isOpen = false
    },
  },
}
</script>
