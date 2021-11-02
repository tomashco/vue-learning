import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import './assets/tailwind.css'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
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
  mutations: {
    deleteTodo: (state, payload) => {
      state.todos = state.todos.filter(item => item.id !== payload.id)
    },
    addTodo: (state, payload) => {
      const newTask = {
        id: payload.id,
        title: payload.title,
        completed: false
      };
      state.todos.unshift(newTask);
    },
    toggleTodo (state, payload) {
      const item = state.todos.find(todo => todo.id === payload.id);
      item.completed = !item.completed;
    }
  }
})


const app = createApp(App)

app.use(store)
app.mount('#app')
