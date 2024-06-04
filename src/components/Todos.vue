<template>
  <div class="todos">
    <h1 v-if="refetch">Refetching...</h1>
    <h1 v-if="error">Something went wrong...</h1>
    <h1 v-if="loading">Loading...</h1>
    <h1>Todo List</h1>
    <div class="todo">
      <AddTodo />
      <TransitionGroup>
        <TodoItem
          v-if="result"
          v-for="task in result.tasks"
          :key="task.id"
          :todoProps="task"
          v-on:item-completed="markCompleted"
          v-on:delete-item="deleteTodo"
          v-on:edit-item="editTodo"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import {
  GET_TASK,
  UPDATE_TITLE,
  UPDATE_COMPLETED,
  UPDATE_STATUS
} from '../graphql/Todos'
import { useQuery, useMutation } from '@vue/apollo-composable'
export default {
  name: 'todos',
  components: { TodoItem, AddTodo },
  setup() {
    const { result, loading, error, refetch } = useQuery(GET_TASK)
    const { mutate: update_title } = useMutation(UPDATE_TITLE)
    const { mutate: update_completed } = useMutation(UPDATE_COMPLETED)
    const { mutate: update_status } = useMutation(UPDATE_STATUS)

    const editTodo = async todo => {
      const editedTodo = prompt('Edit the todo:', todo.title)
      await update_title({
        id: todo.id,
        title: editedTodo
      })
      refetchTodo()
    }

    const markCompleted = async todo => {
      await update_completed({
        id: todo.id,
        is_completed: !todo.is_completed
      })
      refetchTodo()
    }

    const deleteTodo = async todo => {
      await update_status({
        id: todo.id,
        status: 'deleted'
      })
      refetchTodo()
    }

    const refetchTodo = () => {
      refetch()
    }

    return {
      update_title,
      result,
      loading,
      error,
      editTodo,
      markCompleted,
      refetchTodo,
      deleteTodo
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'Todos.scss';
</style>
