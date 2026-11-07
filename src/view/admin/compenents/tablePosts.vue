<template>
  <div class="teble-responsive">
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Post-Content</th>
          <th>image</th>
          <th>Upload</th>
          <th>Control</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in props.posts" :key="post.id">
          <td>{{ post?.title }}</td>
          <td>{{ post?.post_content }}</td>
           <td> 
            <img height="60px" :src="`${App.baseUrl}/storage/${post?.image}`??'tvtr'">
              </td>
          <td>
            <button class="btn btn-success" @click="$emit('openModelEmit', post?.id)">
              Upload
            </button>
          </td>

          <td>
            <div class="d-flex flex-column flex-md-row gap-2">
              <button class="btn btn-outline-danger" @click="$emit('deletePostEmit', post?.id)">
                Delete
              </button>
              <button class="btn btn-outline-primary" @click="$emit('updatePostEmit',post)">Update</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'

import { App } from '@/shared/ApiConfig'
const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['deletePostEmit', 'openModelEmit',"updatePostEmit"])
</script>
