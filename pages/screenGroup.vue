<template>
  <div :style="image" class="h-screen bg-no-repeat bg-cover">
    <!-- navbar top -->
    <!-- <div @shareTeam="dataTeam" >{{ item.title }}</div> -->

    <div class="flex-1 overflow-hidden">
      <div class="flex h-full flex-col">
        <!-- nama grup -->
        <div
          class="flex shrink-0 items-center absolute justify-between p-4 bg-slate-100 w-full bg-transparent backdrop-blur"
        >
          <!-- <h1 class="text-2xl font-bold text-black" @shareTeam="dataTeam(item)" v-for="(item, index) in dataList" :key="index" :item="item">{{ item.title }}</h1> -->

          <div class="flex">
            <img :src="photoGroup" alt="" class="h-9 w-9" />
            <h1 class="text-black font-bold my-auto mx-2">
              {{ team }}
              <!-- {{ detailTeam.data.title }} -->
            </h1>
          </div>

          <div class="flex items-center" @click="show">
            <iconMemberIcon class="mx-4" />
            <!-- <div
              v-for="(member, index) in detailTeam.data.participant.slice(0, 3)"
              :key="index"
              class="flex my-1 relative -mx-2"
            >
              <img
                class="rounded-full w-5 h-5 mx-1 top-0 left-0"
                :src="
                  member.photo ||
                  require('@/assets/img/profile-user-svgrepo-com.png')
                "
                alt=""
              />
            </div> -->
          </div>
        </div>
        <!-- <CardGroup class="w-full w-72 h-72" /> -->
        <div class="flex-1 overflow-x-auto mt-[80px]">
          <div class="inline-flex h-full items-start space-x-4 px-4 pb-4">
            <BoxList
              v-for="colom in coloms"
              :key="colom.id"
              :itemList="colom"
              class="mt-5 px-5"
            />
            <ButtonAddList />
          </div>
        </div>
        <PopupAllMember
          :itemTeam="this.$route.query"
          :show="isOpen"
          @close="hide"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  // async asyncData({ store, $axios, params, query }) {
  //   const groupId = query.page // Mengambil ID dari query parameter "page"
  //   await store.dispatch('team/getDataGroup', groupId) // Mengambil data grup berdasarkan ID
  // },
  // async fetch() {
  //   // Ambil data dari prop bernama 'dataProp'
  //   this.propData = this.$route.params.dataProp;
  // },
  // async asyncData({ store }) {
  //   await store.dispatch('team/fetchGroupList')
  // },
  layout: 'navbar',

  data() {
    return {
      image: {
        backgroundImage:
          'url(https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)',
      },
      dataList: [],
      isOpen: false,
      team: this.$route.query.team,
      id: this.$route.query.id,
    }
  },
  computed: {
    coloms() {
      return this.$store.state.coloms.coloms
    },
    ...mapState('team', ['detailTeam']),

    photoGroup() {
      return require('@/assets/img/Ellipse 1.png')
    },

    // notesTeam() {
    //   return this.$store.state.notesTeam.notesTeam
    // },
  },
  mounted() {
    this.$store.dispatch('coloms/fetchColoms', this.$route.query.id)
    this.$store.dispatch('team/detailTeam', this.$route.query.id)
    // this.$store.dispatch('notesTeam/fetchNotesTeam')
    const id = this.$route.query.id
    const team = this.$route.query.team
    // Lakukan sesuatu dengan data query
    console.log('ID:', id)
    console.log('team:', team)
    // this.itemList = {

    //   // ... Data yang diperoleh dari sumber eksternal atau diubah sesuai kebutuhan
    // }
  },
  methods: {
    // handleData(idColom) {
    //   console.log(idColom) // Output: "Data dari komponen"
    // },
    // async addData() {
    //   try {
    //     await this.$store.dispatch('coloms/addColom', {
    //       title: this.title,
    //       team: this.$route.query.team,
    //       team_id: this.$route.query.id,
    //     })
    //   } catch (error) {
    //     console.log(error)
    //   }

    //   this.$router.go()
    // },
    // async editData() {
    //   try {
    //     await this.$store.dispatch('coloms/updateColom', {
    //       // idColoms: this.itemList.id,
    //       data: {
    //         title: this.title,
    //         team_id: this.$route.query.id,
    //       },
    //     })
    //   } catch (error) {
    //     console.log(error)
    //   }

    //   // this.$router.go()
    // },
    ...mapActions('team', ['detailTeam']),
    // photoGroup() {
    //   return (
    //     this.$store.state.team.teams.photo ||
    //     require('../assets/img/Ellipse 1.png')
    //   )
    // },
    show() {
      this.isOpen = true
    },
    hide() {
      this.isOpen = false
    },
    dataTeam(data) {
      this.title = data.title
      // alert(data);
    },
  },
}
</script>

<style></style>
