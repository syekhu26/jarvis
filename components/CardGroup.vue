<template>
  <!-- <NuxtLink to="/screenGroup"> -->
  <!-- "{ path: '/screenGroup', query: { page: `${item.id}` } }" -->
 <div>
  <nuxt-link :to="screenGroup">
    <div
        class="mx-5 mt-5 border border-slate-300 h-20 w-80 rounded shadow-sm"
      >
        <!-- gambar -->
        <div class="mt-2 flex items-center">
          <div class="px-5">
            <img
              :src="photoGroup"
              width="50"
              height="150"
              alt="Random Image"
              class="rounded-full"
            />
          </div>

          <div>
            <!-- judul -->
            <h1 class="text-sm font-bold text-black mb-1">
              {{ item.title }}
            </h1>
            <!-- <h1 class="text-sm font-bold text-black mb-1">
              {{ item.owner.username }}
            </h1> -->
            <div class="flex items-center">
              <div
                v-for="(member, index) in item.participant.slice(0, 3)"
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
                <!-- <img
                  src=" https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Gambar 1"
                  class="rounded-full w-5 h-5 mx-1 top-0 left-0 -ml-3"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Gambar 2"
                  class="rounded-full w-5 h-5 mx-1 -ml-3"
                /> -->
              </div>
              <div v-if="item.participant.length > 3">
                <p class="text-black px-2">+ {{ sisaPoto }}</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
  </nuxt-link>
 </div>
  <!-- </NuxtLink> -->
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('team/fetchGroupList', store.state.team.teams.id)
  },
  props: {
    // inputData: {
    //   type: [String, Boolean, Number],
    //   required: true,
    // },
    item: {
      type: Object,
      default: () => ({}),
      required: true,
    },
    // ownerId: {
    //   type: Number,
    //   required: true
    // },
  },
  data() {
    return {
      // detail: false,
      // imageUrls: [
      //   'https://images.unsplash.com/photo-1508182314998-3bd49473002f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      //   'https://images.unsplash.com/photo-1682016149111-b6f316f6133c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      //   'https://images.unsplash.com/photo-1675849049391-db3d8344b748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
      // ],
      // randomImageUrl: '',
    }
  },
  computed: {
    photoGroup() {
      return this.item.photo || require('@/assets/img/Ellipse 1.png')
    },
    sisaPoto() {
      return this.item.participant.length - 3
    },
    screenGroup() {
      const query = {
        id: this.item.id,
        owner: this.item.owner,
        participant: this.item.participant,
        photo: this.item.photo,
        team: this.item.title,
      }

      return {
        path: '/ScreenGroup',
        query,
      }
    },
  },
  // mounted() {
  //   this.randomImageUrl = this.getRandomImageUrl()
  // },
  methods: {
    // getRandomImageUrl() {
    //   const randomIndex = Math.floor(Math.random() * this.imageUrls.length)
    //   return this.imageUrls[randomIndex]
    // },
    // emitData(){
    //   this.$emit('shareTeam', this.item)
    // },
    // hideDetail() {
    //   this.detail = false
    // },
    // showDetail() {
    //   this.detail = true
    // },
  },
}
</script>
