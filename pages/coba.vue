<template>
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
</script>
