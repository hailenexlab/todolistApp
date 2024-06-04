<template>
  <div class="todolist">
    <div
      :class="[
        'todo-item',
        todoProps.is_completed ? 'is_completed' : 'un-completed'
      ]"
    >
      <input
        type="checkbox"
        :checked="todoProps.is_completed"
        @change="markCompleted"
      />
      <ul :key="todoProps.id">
        <li>{{ todoProps.title }}</li>
      </ul>

      <div class="btn">
        <a-tooltip
          ><template #title>Edit</template>
          <EditOutlined @click="editItem" style="font-size: 20px" />
        </a-tooltip>
        <a-tooltip>
          <template #title>Delete</template>
          <DeleteFilled @click="deleteItem" style="font-size: 20px" />
        </a-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import { DeleteFilled, EditOutlined } from '@ant-design/icons-vue'

export default {
  name: 'TodoItem',
  props: ['todoProps'],
  emits: ['edit-todo'],
  components: {
    EditOutlined,
    DeleteFilled
  },

  setup(props, context) {
    const markCompleted = e => {
      context.emit('item-completed', props.todoProps)
    }

    const deleteItem = () => {
      context.emit('delete-item', props.todoProps)
    }

    const editItem = () => {
      context.emit('edit-item', props.todoProps)
    }

    return {
      markCompleted,
      deleteItem,
      editItem
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'TodoItem.scss';
</style>
