<template>
  <div class="main-page">
    <add-task
      v-if="!showResults"
      @closeForm="showResults = true"
      @addTask="createTask"
    />
    <task-results
      v-else
      :tasks="tasks"
      @openForm="showResults = false"
      @removeTask="removeTask($event)"
      @completeTask="completeTask($event)"
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import AddTask from '~/components/task/add-task.vue'
import TaskResults from '~/components/task/task-results.vue'
export default {
  components: {
    AddTask,
    TaskResults,
  },
  data() {
    return {
      showResults: true,
    }
  },
  computed: {
    ...mapState({ tasks: (state) => state.task.tasks }),
  },
  methods: {
    ...mapMutations('task', {
      addTask: 'addTask',
      removeTask: 'removeTask',
      completeTask: 'completeTask',
    }),
    createTask(event) {
      this.addTask(event)
      this.showResults = true
    },
  },
}
</script>
