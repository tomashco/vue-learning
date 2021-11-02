<template>
  <li class="flex flex-row justify-between">
    <p
    class="flex-grow"
    v-bind:class="{ 'completed': completed }"
    @click="toggleComplete">{{title}}</p>
    <span
    class="cursor-pointer text-red-500 font-bold text-lg"
    @click="deleteTodo"
    >x</span>
  </li>
</template>

<script>
export default {
  name: 'Todo',
  props: ["todo"],
  data() {
    return this.todo
  },
  methods: {
    toggleComplete() {
      this.$store.commit('toggleTodo',this.todo)
      },
      deleteTodo() {
        this.$store.commit('deleteTodo', this.todo)
      }
    },
  }
</script>

<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>
