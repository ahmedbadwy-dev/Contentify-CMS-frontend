<template>
  <div class="row justify-content-center">
    <div class="form-group col-md-4">
      <input
        type="text"
        @input="showSearch"
        v-model="search"
        id=""
        placeholder="search about any post ..........."
        class="form-control"
      />
    </div>
    <TablePost
     :posts="posts?.data ?? []"
      @deletePostEmit="deletePosts"
      @openModelEmit="openModel" 
      @updatePostEmit="updatePost" 
       />
  </div>
  <UploadImage
   :postId="idPost" 
   @showPosts="get_posts_paginate"
  />
  <Bootstrap5Pagination :data="posts" @pagination-change-page="get_posts_paginate" />
</template>
<script setup>
import { onMounted, ref,defineEmits } from 'vue'
import { useRouter } from 'vue-router'
const router=useRouter()
import { useToast } from 'vue-toastification'
import { Bootstrap5Pagination } from 'laravel-vue-pagination'
import { deletePost } from '@/helper/sweetalert'
import { getPosts } from './actions/getPosts'
import { debounce } from '@/helper/debounce.js'
import TablePost from './compenents/tablePosts.vue'
import UploadImage from './compenents/UploadImage.vue'
import { deletePostHttp } from './actions/deletepost'
import {  updatedPostData} from "@/stores/admin/UpdatedPostData";
import { storeToRefs } from 'pinia'
const{postData,postEditState} =storeToRefs(updatedPostData()) 
const toast = useToast()
const posts = ref([])
const search = ref('')
const get_posts_paginate = async (page = 1, search = '') => {
  const apiRes = await getPosts(page, search)
  posts.value = apiRes?.apiBackgrond
}
get_posts_paginate()

const showSearch = debounce(() => get_posts_paginate(1, search.value), 1000)

const deletePosts = (id) => {
  deletePost()
    .then(async (msg) => {
      try {
        const apiDele = await deletePostHttp(id)
        if (apiDele.status == 200) {
          posts.value.data = posts.value.data.filter((post) => post.id !== id)
          toast.success(apiDele?.apiBackgrond?.message || 'the post deleted successfullyfgchgd')
        } 
        else {
          toast.warning(apiDele?.message)
        }
      } catch (err) {
        toast.error('there error during delete proccess')
      }
    })
    .catch(() => {})
}
const idPost = ref(0)
const openModel = (id) => {
  const modalButton = document.querySelector('[data-bs-target="#exampleModal"]')
  modalButton?.click()
  idPost.value = id
}

const updatePost=(post)=>{
postData.value.id=post.id
postData.value.title=post.title
postData.value.post_content=post.post_content
postEditState.value=true
router.push({name:"Create-Post"})

}


</script>
