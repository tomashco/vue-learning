<template>
  <div class="mb-8 bg-gray-50 bg-opacity-70 p-4 rounded-2xl">
    <form class="flex flex-row justify-between" @submit="addTodo">
      <input class="rounded-xl w-2/3" type="text" v-model="title" name="title">
      <button class="cursor-pointer btn btn-blue" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import {v4 as uuid} from 'uuid';

export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault();

      const newTodoObj = {
        id: uuid(),
        title: this.title,
        completed: false
      }

      this.$emit('add-todo', newTodoObj);
      this.title = '';
    }
  }
}
</script>

<style scoped>
  .btn {
    @apply font-bold py-2 px-4 rounded-xl;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>
