<template>
  <div class="py-3 w-full bg-white shadow-lg">
    <div class="flex items-center justify-between mx-5">
      <div class="flex items-center">
        <div @click="$emit('close')">
          <iconSilangIcon class="" />
        </div>

        <span class="px-4">All Member</span>
      </div>
      <div @click="isOpen = !isOpen">
        <iconAddUserIcon />
      </div>
    </div>
    <FormAddMember v-if="isOpen" />
  </div>
  <!-- <div class="max-w-md">
      <CardMember />
    </div> -->
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
