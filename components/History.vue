<!-- <template>
  <timeline>
    <timeline-item>item1</timeline-item>
    <timeline-item :hollow="false">item2</timeline-item>
    <timeline-item :hollow="false">item3</timeline-item>
  </timeline>
</template>

<script>
import { Timeline, TimelineItem } from 'vue-cute-timeline'
import 'vue-cute-timeline/dist/index.css'

export default {
  components: {
    Timeline,
    TimelineItem,
  },
}
</script> -->

<template>
  <div>
    <!-- <ButtonGlobal @click="isOpen = !isOpen" /> -->
    <div>
      <div class="">
        <div
          v-if="showStory"
          class="bg-opacity-50 bg-black fixed inset-0 justify-center items-center overflow-y-auto overflow-x-hidden z-20"
        >
          <div class="mt-10 my-10">
            <div class="bg-white max-w-md w-full rounded p-6 mx-auto shadow-lg">
              <div class="mt-2 float-right">
                <button>
                  <div @click="$emit('close')">
                    <p class="text-blue-500">Kembali</p>
                  </div>
                </button>
              </div>
              <div class="mt-7">
                <div>
                  <h2 class="font-semibold text-black">Progress Catatan</h2>
                </div>
                <div class="">
                  <timeline>
                    <timeline-item :hollow="false"
                      >CEO membuat catatan untuk bag.sekretaris dan
                      keuangan.</timeline-item
                    >
                    <timeline-item :hollow="false"
                      >Bag.bendahara mengirim uang ke bag.sekretaris.
                    </timeline-item>
                    <timeline-item :hollow="false">
                      Bag.sekretaris memesan tiket pesawat. Tiket pesawat telah
                      tersedia.
                    </timeline-item>
                  </timeline>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Timeline, TimelineItem } from 'vue-cute-timeline'
import 'vue-cute-timeline/dist/index.css'
export default {
  components: {
    Timeline,
    TimelineItem,
  },
  props: {
    showStory: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
