<template>
  <NuxtLink to="/screenGroup">
    <div
      class="w-72 border border-slate-200 rounded-xl m-8 p-5 shadow-md font-sans"
    >
      <div class="flex items-center">
        <div>
          <img
            :src="randomImageUrl"
            width="50"
            height="150"
            alt="Random Image"
            class="rounded"
          />
        </div>
        <div class="px-3">
          <h1 class="text-2xl font-bold text-black">{{ inputData }}</h1>
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
  </NuxtLink>
</template>

<script>
export default {
  props: {
    inputData: {
      type: [String, Boolean, Number],
      required: true,
    },
  },
  data() {
    return {
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
  },
}
</script>
