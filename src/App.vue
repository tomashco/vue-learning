<template>
  <div class="flex flex-col h-screen items-center justify-center bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500" id="app">
    <div class="flex flex-col w-9/12 md:w-1/2 lg:w-1/3">
        <h2 class="shadow-2xl text-center mb-8 bg-gray-50 bg-opacity-70 p-4 rounded-2xl text-xl font-black">My todolist</h2>
      <Todos v-bind:todos="todos" />
      <AddTodo
        v-on:add-todo="addTodo"
        />
    </div>
  </div>

</template>

<script>
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './assets/tailwind.css';

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
