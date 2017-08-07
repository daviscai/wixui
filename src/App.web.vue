<template>
  <div style="flex-direction: column;">
    <transition name="fade" mode="out-in">
      <router-view class="root"></router-view>
    </transition>
  </div>
</template>

<style scoped>
  .root {
    width: 100%;
    height: 100%;
  }
</style>

<script>

</script>
