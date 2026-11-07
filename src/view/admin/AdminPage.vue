<template>
  <div class="w-100 d-flex justify-content-between">
    <div>
      <div class="btn">
        <span>name : </span>
        <span> {{ connectedUser?.data?.name }}</span>
      </div>
      <div>
        <span>E-mail : </span>
        <span>{{ connectedUser?.data?.email }}</span>
      </div>
    </div>
    <div class="btn text-danger" @click="userLogout">Logout</div>
  </div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :class="routes.name == 'Create-Post' ? 'active' : ''"
              :to="{ name: 'Create-Post' }"
              @click="changeEditState"
              >Crate-Post</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :class="routes.name == 'Post-List' ? 'active' : ''"
              :to="{ name: 'Post-List' }"
              >List-Posts</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container">
    <div class="row justify-content-center align-items-center">
      <RouterView />
    </div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { getUser } from '@/helper/GetUser.js'
import { logoutHttp } from './actions/logout'
import { updatedPostData } from '@/stores/admin/UpdatedPostData'
import { useToast } from 'vue-toastification'
import { storeToRefs } from 'pinia'

const toast = useToast()
const { postEditState, postData } = storeToRefs(updatedPostData())
const userLogout = async () => {
  try {
    const apiRes = await logoutHttp()
    if (apiRes.status == 200) {
      toast.success(apiRes.message)
      window.location = '/'
    } else if (apiRes.status == 401) {
      toast.error('لا تمتلك الصلاحيه لهذا العمل')
    }
  } catch (error) {
    toast.error('حدث خطا غير متوقع')
  }
}
const changeEditState = () => {
  postEditState.value = false
  postData.value.id = ''
  postData.value.title = ''
  postData.value.post_content = ''
}

const connectedUser = getUser()
const routes = useRoute()
</script>
