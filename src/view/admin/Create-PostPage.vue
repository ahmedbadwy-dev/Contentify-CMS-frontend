<template>
  <div class="col-md-4 mt-5">
    <div class="card">
      <div class="card-header">
        <h3 class="text-center">{{ postEditState?"Update Product" : "Crate Post"}}</h3>
       
      </div>
      <div class="card-body">
        <form action="" method="post" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="title">TITLE :</label>
            <input type="text" id="title" class="form-control" v-model="createPostData.title" />
            <span class="text-danger">{{ createPostErrorData.title }}</span>
          </div>
          <div class="form-group">
            <label for="Post-Content">Post-Content :</label>
            <textarea id="Post-Content" class="form-control" v-model="createPostData.post_content">
            </textarea>
            <span class="text-danger">{{ createPostErrorData.post_content }}</span>
          </div>
 
          <button :disabled="loadBtnState" type="submit" class="btn  mt-4 w-50"  :class="postEditState?'btn-primary':'btn-success'">{{postEditState?"Update Post":"Create Post"}} <LoadBtn v-if="loadBtnState" /></button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { z } from 'zod'
import { ref } from 'vue'
import {  updatedPostData} from "@/stores/admin/UpdatedPostData";
const{postData,postEditState}=storeToRefs(updatedPostData()) 
import { createPostHttp } from './actions/createPost'
import { updatePostHttp } from './actions/updatePost'
import { useToast } from 'vue-toastification'
import { storeToRefs } from 'pinia';
import LoadBtn from '@/compenent/LoadBtn.vue';
import { useRouter } from 'vue-router';
const router=useRouter()

const toast = useToast()
const loadBtnState=ref(false)

const createPostData = ref({
  title: postData.value.title ,
  post_content: postData.value.post_content 
})
const createPostErrorData = ref({
  title: '',
  post_content: '',
})

const order = z.object({
  title: z.string().min(2),
  post_content: z.string().min(10),
})
const handleSubmit = async () => {
  loadBtnState.value=true
  Object.keys(createPostErrorData.value).forEach((key) => (createPostErrorData.value[key] = ''))
  const result = order.safeParse(createPostData.value)
  if (result.success) {
 createPostOrUpdatePost()
  } else {
    loadBtnState.value=false
    const errors = result.error.flatten().fieldErrors
    Object.keys(errors).forEach((key) => {
      createPostErrorData.value[key] = errors[key][0]
    })
  }
}
   const  createPostOrUpdatePost= async ()=> {
    try {
      const newPost = postEditState.value
      ? await updatePostHttp(createPostData.value,postData.value.id)
      : await createPostHttp(createPostData.value) 
      if (newPost.status == 401) {
        toast.error('لا يوجد لك صلاحيه لهذا العمل')
      } else if (newPost.status == 422) {
        Object.keys(createPostErrorData.value).forEach((key) => {
          createPostErrorData.value[key] = newPost.backgroundApi.errors[key]
        })
      } else if (newPost.status == 201 ||newPost.status == 200) {
        router.push({name:"Post-List"})
        toast.success(newPost.backgroundApi.message)

      }else if (newPost.status == 403 ||newPost.status == 200) {
        router.push({name:"Post-List"})
        toast.error(newPost.backgroundApi.message)

      }
    } catch (error) {
      toast.error('يوجد خطا غير متوقع')
    }      
    finally{
      loadBtnState.value=false
    }
    }

</script>

<style scoped>
.createPost {
  margin-left: 25%;
}
</style>
