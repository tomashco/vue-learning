<template>
  <div id="app">
    <Todos v-bind:todos="todos" />
    <AddTodo
      v-on:add-todo="addTodo"
      />
  </div>

</template>

<script>
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import bus from './main'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo
    },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Go workout',
          completed: false
        },
        {
          id: 2,
          title: 'Go to LaMassacre',
          completed: false
        },
        {
          id: 3,
          title: 'Ship grocery store',
          completed: false
        },
      ]
    }
  },
  methods: {
    addTodo(newTodoObj) {
      this.todos = [...this.todos, newTodoObj];
    },
    deleteTodo(todo) {
      console.log(todo)
    }
  },
  created (){
    bus.$on('deletetodo', (todo) => {
      this.todos = this.todos.filter(item => item.id !== todo.id)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
