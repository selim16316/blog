<template>
    <div class="blog-details">
      <h1>{{ blog.title }}</h1>
      <p>{{ blog.content }}</p>
      <router-link to="/">Back to Home</router-link>
    </div>
  </template>
  
  <script>
  import { computed, ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from 'pinia'
  
  export default {
    setup() {
      const store = useStore()
      const route = useRoute()
      const blogId = ref(null)
  
      const blog = computed(() => {
        return store.state.blogs.find(blog => blog.id === blogId.value)
      })
  
      onMounted(() => {
        blogId.value = route.params.id
      })
  
      return { blog }
    }
  }
  </script>
  
  <style>
  .blog-details {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>
  