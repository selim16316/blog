<template>
  <div class="home">
    <h1>Welcome to My Blog</h1>
    <div class="blog-list">
      <div v-for="blog in blogs" :key="blog.id" class="blog-entry">
        <h2>{{ blog.title }}</h2>
        <p>{{ truncate(blog.content, 150) }}</p>
        <router-link :to="{ name: 'BlogDetails', params: { id: blog.id } }">See More</router-link>
      </div>
    </div>
    <router-link to="/add" class="add-blog-btn">Add Blog</router-link>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'pinia'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const blogs = computed(() => store.state.blogs)

    function truncate(text, maxLength) {
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
    }

    async function fetchBlogs() {
      try {
        const response = await fetch('https://dummyjson.com/posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        store.blogs = data
      } catch (error) {
        console.error('Error fetching blogs:', error)
      }
    }

    onMounted(fetchBlogs)

    return { blogs, truncate }
  }
}
</script>

<style>
/* Your styles here */
</style>
