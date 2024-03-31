<template>
    <div class="add-blog">
      <h1>Add New Blog</h1>
      <form @submit.prevent="addBlog">
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="title">
        </div>
        <div>
          <label for="content">Content:</label>
          <textarea id="content" v-model="content"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useStore } from 'pinia'
  
  export default {
    setup() {
      const store = useStore()
      const title = ref('')
      const content = ref('')
  
      function addBlog() {
        if (!title.value.trim() || !content.value.trim()) {
          alert('Please fill in both title and content fields.')
          return
        }
  
        const newBlog = {
          id: Date.now().toString(), // Generate a unique ID for the blog post
          title: title.value,
          content: content.value
        }
  
        store.addBlog(newBlog)
  
        // Reset form fields after adding the blog post
        title.value = ''
        content.value = ''
  
        // Optionally, you can navigate back to the home page after adding the blog post
        // router.push('/')
      }
  
      return { title, content, addBlog }
    }
  }
  </script>
  
  <style>
  .add-blog {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .add-blog form {
    display: flex;
    flex-direction: column;
  }
  
  .add-blog label {
    margin-bottom: 5px;
  }
  
  .add-blog input, .add-blog textarea {
    margin-bottom: 10px;
    padding: 5px;
  }
  </style>
  