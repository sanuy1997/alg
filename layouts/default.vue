<template>
  <div class="main-container">
    <alg-header />
    <div class="content-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import AlgHeader from '~/components/alg-header.vue'
export default {
  components: {
    AlgHeader,
  },
}
</script>

<style lang="scss">
.main-container {
  min-height: 100vh;
  background: $bg-color;
}
.content-container {
  padding: 25px 10px 0 10px;
}
</style>
