<template>
    <div>
      <div
        v-if="showImg"
        class="bg-opacity-50 bg-black fixed inset-0 justify-center items-center overflow-y-auto overflow-x-hidden z-20"
      >
        <div class="w-full mx-auto">
          <center class="relative my-28">
              <div class="w-fit border border-gray-400 bg-white shadow rounded-md inset-y-24">
                  <p class="my-2">Pilih foto latar</p>
                  <div class="flex">
                      <img
                        v-for="image in images"
                        class="h-[100px] w-[100px] mx-1 my-2 hover:h-[120px] hover:w-[120px]"
                        :key="image"
                        :src="image"
                        @click="selectImage(image)"
                      />
                  </div>
              </div>
          </center>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: {
      showImg: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        images: [],
        selectedImage: null,
      }
    },
    mounted() {
      const imageFiles = require.context(
        '~/assets/img/wall',
        false,
        /\.(png|jpe?g|svg)$/
      )
      this.images = imageFiles.keys().map(imageFiles)
    },
    methods: {
      selectImage(image) {
        this.selectedImage = image
      },
    },
  }
  </script>