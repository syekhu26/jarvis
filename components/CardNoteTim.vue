<template>

<div>
  <div
  @click="show"
  class="group relative rounded-md border border-slate-400 bg-white p-3 shadow-lg hover:bg-gray-50"
  >
    <h5 class="font-semibold text-gray-800">{{ itemTeam.subject }}</h5>
        <p>
          {{ itemTeam.description }}
        </p>
        <div class="mt-2">
          <img
            class="rounded-full w-5 h-5 mx-1 top-0 left-0"
            :src="avatar"
            alt=""
          />
        </div>

  </div>
  <DetailNoteTeam :itemDetail="itemTeam" :showDetail="isOpen" @closeModal="hideDetail" />

</div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  props: {
    itemTeam: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    // ...mapState({
    //   isShowDetail: (state) => state.coloms.showDetail,
    // }),
    avatar() {
      return this.itemTeam.owner[0].photo || require('@/assets/img/profile-user-svgrepo-com.png')
    },
  },
  methods: {
    // showDetail() {
    //   this.isOpen = true
    // },

    show() {
      this.isOpen = true
    },
    hideDetail() {
      // this.isOpen = false
      this.isOpen = false
    },
    // hideDetail() {
    //   this.$store.commit('coloms/setShowDetail', false)
    //   this.$store.commit('coloms/detailNotes', null)
    // },
    // showDetail(itemTeam) {
    //   this.$store.commit('coloms/detailNotes', itemTeam)
    //   this.$store.commit('coloms/setShowDetail', true)
    // },
  },
}
</script>

<style></style>
