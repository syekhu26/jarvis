<template>
  <NuxtLink to="/screenGroup">
    <div @click="emitData">
      <div
      class="mx-5 mt-5 border border-slate-300 h-20 w-80 rounded shadow-sm"
      >
        <!-- gambar -->
        <div class="mt-2 flex items-center">
          <div class="px-5">
            <img
              :src="randomImageUrl"
              width="50"
              height="150"
              alt="Random Image"
              class="rounded"
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
              <div class="flex my-1 relative">
                <img
                  class="rounded-full w-5 h-5 mx-1 top-0 left-0"
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt=""
                />
                <img
                  src=" https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Gambar 1"
                  class="rounded-full w-5 h-5 mx-1 top-0 left-0 -ml-3"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Gambar 2"
                  class="rounded-full w-5 h-5 mx-1 -ml-3"
                />
              </div>
              <p class="text-black">+4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    // inputData: {
    //   type: [String, Boolean, Number],
    //   required: true,
    // },
    item: {
      type: Object,
      default: () => ({}),
      required: true
    },
    // ownerId: {
    //   type: Number,
    //   required: true
    // },
  },
  data() {
    return {
      // detail: false,
      imageUrls: [
        'https://images.unsplash.com/photo-1508182314998-3bd49473002f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1682016149111-b6f316f6133c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
        'https://images.unsplash.com/photo-1675849049391-db3d8344b748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
      ],
      randomImageUrl: '',
    }
  },
  mounted() {
    this.randomImageUrl = this.getRandomImageUrl()
  },
  methods: {
    getRandomImageUrl() {
      const randomIndex = Math.floor(Math.random() * this.imageUrls.length)
      return this.imageUrls[randomIndex]
    },
    emitData(){
      this.$emit('shareTeam', this.item)
    },
    // hideDetail() {
    //   this.detail = false
    // },
    // showDetail() {
    //   this.detail = true
    // },
  },
}
</script>
