<template>
  <li class="" v-bind:class="{ 'completed': completed }">
    <p @click="toggleComplete">{{title}}</p>
    <span
    @click="deleteTodo"
    >X</span>
  </li>
</template>

<script>
import bus from '../main'

export default {
  name: 'Todo',
  props: ["todo"],
  data() {
    return {
      title: this.todo.title,
      completed: this.todo.completed
    }
  },
  methods: {
    toggleComplete() {
      this.completed = !this.completed
      },
      deleteTodo() {
        bus.$emit('deletetodo', {...this.todo})
      }
    },
  }
</script>

<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>
