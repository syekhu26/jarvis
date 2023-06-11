<template>
  <div>
    <NuxtLink :to="tawaran">
      <!-- <div
        class="group relative rounded-md border-b border-gray-300 bg-slate-500 p-3 shadow hover:bg-gray-50"
      >
        <div>
          <div class="">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              asperiores Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Fugit repellat reprehenderit itaque nulla vel qui vero,
              voluptatum voluptatibus asperiores dolorum!
            </p>
          </div>
        </div>
      </div> -->
      <div class="max-w-xs rounded overflow-hidden shadow-lg relative">
        <img
          class="w-full h-32"
          :src="itemTawaran.photo_product"
          alt="image tawaran"
        />
        <div class="px-3 py-4">
          <p class="text-gray-700">
            <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. -->
            {{ itemTawaran.name }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    itemTawaran: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    tawaran() {
      const query = {
        // param1: 'value1',
        // param2: 'value2'
        id: this.itemTawaran.id,
        name: this.itemTawaran.name,
        notes_quantity: this.itemTawaran.notes_quantity,
        photo_product: this.itemTawaran.photo_product,
        price: this.itemTawaran.price,
        reward: this.itemTawaran.reward,
        status: this.itemTawaran.status,
        terms: this.itemTawaran.terms,
      }

      return {
        path: '/detailPoint',
        query,
      }
    },
  },
}
</script>

<!-- id:1 name:"Tukarkan 500 Point Dengan 3 Notes" notes_quantity:3
photo_product:null price:500 reward:"3 Notes" status:"unredeemed" terms:"S&K
berlaku" -->
