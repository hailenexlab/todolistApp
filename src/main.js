import { createApp, provide, h } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import router from './router'
import 'ant-design-vue/dist/reset.css'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://e59a-14-241-241-100.ngrok-free.app/v1/graphql',
  headers: {
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxM2FjMDY2NS02ZGI5LTQ5MzEtOTAxZC05OGU1NDQzMDc1ODYiLCJpYXQiOjE3MTc0Njk4OTEsImV4cCI6MTcxNzU1NjI5MX0.kx1UlYCKOi5C5bxZriSWfRspQVQmEWRUwnFHOtZDrYU'
  }
})
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
})
app.use(router).use(Antd).mount('#app')
