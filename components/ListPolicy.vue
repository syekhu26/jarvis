<template>
  <div>
    <h1 v-if="isHead" class="text-medium-3xl font-bold mb-5">{{ title }}</h1>
    <h6 v-else class="text-medium-base font-bold mb-2">{{ title }}</h6>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    isHead: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
