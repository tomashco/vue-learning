<template>
  <div class="shadow-2xl mb-8 bg-gray-50 bg-opacity-70 p-4 rounded-2xl">
    <ul>
        <Todo
        v-for="todo in todos"
        :key="todo.id"
        :todo='todo'
        />
    </ul>
  </div>
</template>

<script>
import Todo from './Todo';

export default {
  name: 'Todos',
  components: {
    Todo
  },
  props: [
    "todos"
  ]
}
</script>

<style scoped>

</style>
