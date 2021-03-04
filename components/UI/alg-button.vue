<template>
  <div class="button">
    <button
      :disabled="disabled"
      :class="classBtnType"
      class="button__button"
      @click="$emit('click')"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'AlgButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classBtnType() {
      if (!this.disabled) {
        switch (this.type) {
          case 'danger':
            return 'button__button--danger'
          default:
            return 'button__button--default'
        }
      } else return null
    },
  },
}
</script>

<style lang="scss">
.button {
  &__button {
    border: none;
    padding: 7px 15px;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    &--default {
      background: $main-blue-color;
      color: $white-color;
    }
    &--danger {
      background: $red-color;
      color: $white-color;
    }
  }
}
</style>
