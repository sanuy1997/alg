<template>
  <div class="task-results">
    <h2 class="task-results">Список задач</h2>
    <div class="task-results__new">
      <alg-button @click="$emit('openForm')">Добавить</alg-button>
    </div>
    <div class="task-results__results">
      <div
        v-for="(result, index) in tasks"
        :key="index"
        class="task-results__result"
      >
        <div>
          <h3 class="task-results__result-title">
            {{ result.title }} <span v-if="result.status">- завершена</span>
          </h3>
          <p>{{ result.desc }}</p>
        </div>
        <div class="task-results__result-icons">
          <div v-if="!result.status" @click="$emit('completeTask', index)">
            <complete-icon />
          </div>
          <div @click="$emit('removeTask', index)">
            <remove-icon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlgButton from '~/components/UI/alg-button.vue'
import RemoveIcon from '~/components/icons/remove-icon.vue'
import CompleteIcon from '~/components/icons/complete-icon.vue'
export default {
  name: 'TaskResults',
  components: {
    AlgButton,
    RemoveIcon,
    CompleteIcon,
  },
  props: {
    tasks: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
.task-results {
  &__result {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid $main-blue-color;
    margin-bottom: 20px;
    padding: 7px 10px;
    border-radius: 5px;
    background: $grey-color;
    max-width: 800px;
  }
  &__result-title {
    margin-bottom: 15px;
    :last-child {
      color: $success-color;
    }
  }
  &__result-icons {
    display: flex;
    svg:hover {
      fill: $red-color;
      cursor: pointer;
    }
  }
  &__new {
    margin: 20px 0;
  }
}
</style>
