<template lang="">
  <div class="form-submit">
    <form>
      <input type="text" v-model="title" placeholder="Add work..." />
      <button type="submit" class="add-btn" @click="addTask">Add</button>
    </form>
  </div>
</template>

<script>
import { useMutation } from '@vue/apollo-composable'
import { ref } from 'vue'
import { ADD_TASK } from '../graphql/Todos'

export default {
  setup() {
    const title = ref('')
    const { mutate: insert_tasks_one } = useMutation(ADD_TASK)

    return {
      insert_tasks_one,
      title
    }
  },
  methods: {
    addTask() {
      if (this.title) {
        this.insert_tasks_one({ title: this.title })
      } else {
        alert('Please enter value')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'AddTodo.scss';
</style>
