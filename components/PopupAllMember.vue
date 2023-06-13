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
              <div v-if="detailTeam.data.owner[0]?.id === $auth.user.id" @click="showModal">
                <iconAddUserIcon />
              </div>
            </div>
            <FormAddMember
              :itemEmail="detailTeam.data"
              :showModal="isOpen"
              @close="hideModal"
            />
          </div>
        </div>

        <div class="mx-5 py-5">
          <!-- <CardMember :team="itemTeam"/> -->
          <div
            v-for="(member, index) in detailTeam.data.participant"
            :key="index"
            class="bg-white py-3 rounded px-5"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img class="rounded-full w-10 h-10 mx-1" :src="avatar" alt="" />
                <h5 class="px-2">{{ member.username }}</h5>
              </div>
              <div
                v-if="detailTeam.data.owner[0]?.id === $auth.user.id"
                @click="showDel"
              >
                <iconHapusIcon />
              </div>
            </div>

            <DeleteMember
              :dataMember="member"
              :show="del"
              @close="hideDel"
              :idTeam="detailTeam.data.id"
            />
          </div>
          <!-- <BoxList
              v-for="colom in coloms"
              :key="colom.id"
              :itemList="colom"
              class="mt-5 px-5"
            /> -->
          <!-- <div v-for="(member, index) in itemTeam.participant"
              :key="index">
              {{ member.username }}
            </div> -->
          <!-- <CardMember class="mt-3" />
          <CardMember class="mt-3" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import { mapActions, mapState } from 'vuex'
export default {
  // async asyncData({ query }) {
  //   // Mengambil data query dengan props
  //   const queryData = query.data;

  //   // Mengembalikan data yang akan digunakan dalam komponen
  //   return {
  //     queryData
  //   };
  // },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    itemTeam: {
      type: Object,
      default: () => ({}),
    },
    id: {
      type: Number,
      // type: Object,
      // default: () => ({}),
    },
  },
  computed: {
    avatar() {
      return (
        this.detailTeam.data.photo ||
        require('@/assets/img/profile-user-svgrepo-com.png')
      )
    },
    ...mapState('team', ['detailTeam']),
  },
  mounted() {
    this.$store.dispatch('team/detailTeam', this.itemTeam.id)
  },
  // mounted() {
  //   console.log(this.$route.query) // Output query sebagai objek
  // },
  // mounted() {
  //   const queryData = this.$route.query.data;
  //   const parsedData = JSON.parse(queryData);
  //   console.log(parsedData);
  // },
  // created() {
  //   const team = this.$route.query;
  //   console.log(team);
  // },
  // computed: {
  //   parsedData() {
  //     const queryData = this.$route.query.participant;
  //     return JSON.parse(queryData);
  //   },
  // },
  data() {
    return {
      isOpen: false,
      participant: this.$route.query.participant,
      del: false,
      // participant:[]
    }
  },
  methods: {
    ...mapActions('team', ['detailTeam']),
    showModal() {
      this.isOpen = true
    },
    hideModal() {
      this.isOpen = false
    },
    showDel() {
      this.del = true
    },
    hideDel() {
      this.del = false
    },
  },
}
</script>

<style></style>
