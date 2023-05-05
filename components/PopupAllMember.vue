<template>
  <div>
    <div
      v-if="show"
      class="bg-gray-200 absolute right-0 top-[100px] h-screen z-10"
    >
      <div class="max-w-sm w-full rounded mx-auto shadow-lg">
        <div>
          <!-- <HeaderViewMember /> -->
          <div class="py-3 w-full bg-white shadow-lg">
            <div class="flex items-center justify-between mx-5">
              <div class="flex items-center">
                <div @click="$emit('close')">
                  <iconSilangIcon class="" />
                </div>

                <span class="px-4">All Member</span>
              </div>
              <div @click="showModal">
                <iconAddUserIcon />
              </div>
            </div>
            <FormAddMember :showModal="isOpen" @close="hideModal" />
          </div>
        </div>

        <div class="mx-5 py-5">
          <CardMember />
          <CardMember class="mt-3" />
          <CardMember class="mt-3" />
        </div>
      </div>
    </div>
  </div>
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
  methods: {
    showModal() {
      this.isOpen = true
    },
    hideModal() {
      this.isOpen = false
    },
  },
}
</script>

<style></style>
