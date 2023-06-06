<template>
  <div>
    <div
      class="overflow-x-hidden overflow-y-auto inset-0 absolute left-0 top-0 mx-5 mt-32"
    >
      <div class="relative w-full max-w-[290px]">
        <div
          class="bg-white w-full rounded shadow-md py-5 px-8 border border-slate-300"
        >
          <div class="-mx-4">
            <div class="flex">
              <img
                class="h-5 w-5 mx-2"
                src="../assets/img/logoipsum-245 1.png"
                alt=""
              />
              <p class="text-sm text-blue-600">Bisa.in point :</p>
            </div>
            <p class="text-sm font-bold mx-3 mt-2">{{ point }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  data() {
    return {
      point: this.$route.query.point,
    }
  },
  methods: {},
}
</script>
