<template>
  <div class="header">
    <h1 class="header__title">Алгоритмика</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
.header {
  background: $main-blue-color;
  padding: 15px 10px;
  &__title {
    color: $white-color;
  }
  &__label {
    margin-right: 10px;
  }
}
</style>
