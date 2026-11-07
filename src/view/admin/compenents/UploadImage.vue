<template>
  <button
    type="button"
    id="modalTriggerBtn"
    class="d-none"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  ></button>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <form enctype="multipart/form-data">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ props?.postId }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <img src="" alt="" class="w-100" id="selectedImage" style="object-fit: contain" />
            </div>
            <div class="form-group">
              <label for="image">Upload Your Image :</label>
              <input
                type="file"
                name="image"
                id="image"
                @change="selected_image"
                class="form-control"
                placeholder="Upload Your Image"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="saveImage( props?.postId)" :disabled="loadBtnState"> <LoadBtn v-if="loadBtnState" /> changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps,ref,defineEmits } from 'vue'
import { UploadImage,prepareImgHeader } from '@/helper/UploadImage'
import { App } from "@/shared/ApiConfig";
import { verifyToken } from "@/helper/VerifyToken";
import { useToast } from 'vue-toastification'
import LoadBtn from '@/compenent/LoadBtn.vue';

const toast=useToast()
const header=verifyToken()

const props = defineProps({
  postId: {
    type: Number,
  },
})

const emit=defineEmits(["showPosts"])
const image=ref("")
const loadBtnState=ref(false)
const selected_image = (e) => {
  const selectedImage = UploadImage(e, 'selectedImage')
  image.value=selectedImage
   
}
const saveImage= async (id)=>{
           loadBtnState.value=true
            const requireoption=prepareImgHeader(image.value)
  try {

    const apiImg= await fetch(`${App.apiUrl}/image/${id}`, requireoption)
      const responseImg= await apiImg.json()
          
      if(apiImg.ok){
       toast.success("The Image Is Saved Successufly")
       emit("showPosts")
      }
      else if (apiImg.status==401){
        toast.waring(responseImg.message)
      }
    
  } catch (error) {
      toast.error("there error during save image")
  }
  finally{
    loadBtnState.value=false
  }
}

</script>
