export const state = () => ({
  tasks: [],
})

export const mutations = {
  addTask(state, task) {
    state.tasks.push(task)
  },
  removeTask(state, index) {
    state.tasks.splice(index, 1)
  },
  completeTask(state, index) {
    state.tasks[index].status = true
  },
}
