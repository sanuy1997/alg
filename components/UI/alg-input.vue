<template>
  <label class="input">
    <span v-if="label" class="input__label"
      >{{ label }}
      <b v-if="required" class="textarea__required">*</b>
    </span>
    <input
      :class="[$slots.default ? 'input__input--icon' : '', 'input__input']"
      :value="value"
      type="text"
      @input="$emit('input', $event.target.value)"
    />
    <div v-if="$slots.default" class="input__icon">
      <slot />
    </div>
  </label>
</template>

<script>
export default {
  name: 'AlgInput',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.input {
  position: relative;
  display: flex;
  align-items: center;
  &__input {
    height: 30px;
    padding: 0 10px;
    width: 100%;
    border-radius: 2px;
    border: none;
    font-size: 16px;
  }
  &__label {
    margin-right: 10px;
    min-width: 120px;
  }
  &__input--icon {
    padding-right: 40px;
  }
  &__icon {
    position: absolute;
    bottom: 25%;
    right: 10px;
    width: 25px;
    height: 25px;
  }
}
</style>
