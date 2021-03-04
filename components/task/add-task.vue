<template>
  <div class="add-task">
    <h2 class="add-task__title">Добавить задание</h2>
    <p class="add-task__sub-title">Чтобы создать задание заполните поля</p>
    <div class="add-task__form">
      <alg-input v-model="form.title" label="Задание" required />
      <alg-textarea v-model="form.desc" label="Описание" required />
      <div class="add-task__buttons">
        <alg-button type="danger" @click="$emit('closeForm')"
          >Закрыть</alg-button
        >
        <alg-button
          :disabled="!(form.title && form.desc)"
          @click="$emit('addTask', form)"
          >Создать</alg-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import AlgInput from '~/components/UI/alg-input.vue'
import AlgTextarea from '~/components/UI/alg-textarea.vue'
import AlgButton from '~/components/UI/alg-button.vue'
export default {
  name: 'AddTask',
  components: {
    AlgInput,
    AlgTextarea,
    AlgButton,
  },
  data() {
    return {
      form: {
        title: '',
        desc: '',
        status: false,
      },
    }
  },
}
</script>

<style lang="scss">
.add-task {
  max-width: 700px;
  .button {
    text-align: end;
  }
  &__title {
    margin-bottom: 10px;
  }
  &__sub-title {
    margin-bottom: 30px;
    font-size: 17px;
  }
  &__form > * {
    margin-bottom: 15px;
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
  }
}
</style>
