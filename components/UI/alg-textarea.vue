<template>
  <label class="textarea">
    <span v-if="label" class="textarea__label"
      >{{ label }}
      <b v-if="required" class="textarea__required">*</b>
    </span>
    <textarea
      class="textarea__textarea"
      rows="10"
      :value="value"
      type="text"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'AlgTextarea',
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
.textarea {
  display: flex;
  &__textarea {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 2px;
  }
  &__label {
    margin-right: 10px;
    min-width: 120px;
  }
  &__required {
    color: $red-color;
  }
}
</style>
