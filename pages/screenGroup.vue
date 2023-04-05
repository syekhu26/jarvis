<template>
  <div>
    <!-- navbar top -->

    <div class="flex-1 overflow-hidden">
      <div class="flex h-full flex-col">
        <!-- nama grup -->
        <div
          class="flex shrink-0 items-center justify-between p-4 bg-slate-200 w-full"
        >
          <h1 class="text-2xl font-bold text-black">Tim 4 qatros</h1>
          <ButtonAddList />
        </div>
        <div class="flex-1 overflow-x-auto mt-6">
          <div class="inline-flex h-full items-start space-x-4 px-4 pb-4">
            <!-- list box -->
            <BoxList />
            <BoxList />
            <BoxList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'navbar',
}
</script>

<style></style>
