import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const updatedPostData = defineStore('postData', () => {

const postEditState=ref(false);

const postData=ref({
  id:null,
  title:"",
  post_content:""
}) 



  return { postData,postEditState }
})
