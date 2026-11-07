<template>
  <div class="row">
    <div class="col-4"></div>
    <div class="col-4">
      <div class="card">
        <div class="card-header text-center">
          <h3>Register Page</h3>
        </div>
        <div class="card-body">
          <form action="" @submit.prevent>
            <div class="form-group">
              <label for="name">name</label>
              <input type="text" class="form-control" id="name" v-model="registerData.name" />
              <span class="text-danger">{{ registerErrorData.name }}</span>
            </div>
            <div class="form-group">
              <label for="password">password</label>
              <input
                type="text"
                class="form-control"
                id="password"
                v-model="registerData.password"
              />
              <span class="text-danger">{{ registerErrorData.password }}</span>
            </div>

            <div class="form-group">
              <label for="email">email</label>
              <input type="email" class="form-control" id="email" v-model="registerData.email" />
              <span class="text-danger">{{ registerErrorData.email }}</span>
            </div>
            <RouterLink :to="{ name: 'Login' }">Are You Already Register</RouterLink>
            <br />
            <button class="btn btn-success w-50" type="submit" @click="handleSubmit" :disabled="loadBtnState"> <LoadBtn v-if="loadBtnState" /> Register</button>
            
          </form>
        </div>
      </div>
    </div>
    <div class="col-4"></div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { z } from 'zod'
import { registerUser } from '@/view/auth/actions/RegisterUser'
import { useToast } from 'vue-toastification'
import LoadBtn from '@/compenent/LoadBtn.vue'

const router=useRouter()
const toast = useToast() // سحب الـ instance
const loadBtnState=ref(false)
const registerData = ref({
  name: '',
  email: '',
  password: '',
})
const registerErrorData = ref({
  name: '',
  email: '',
  password: '',
})

const order = z.object({
  name: z.string().min(3, 'هو ده اسم بني ءدمين بطلو هطل بقي').max(20),
  email: z.string().email(),
  password: z.string().min(8),
})
const handleSubmit = async () => {
  loadBtnState.value=true
  Object.keys(registerErrorData.value).forEach((key) => {
    registerErrorData.value[key] = ' '
  })
  const result = order.safeParse(registerData.value)
  if (result.success) {
    try {
      console.log(' start')

      const res = await registerUser(registerData.value)

      if (res.status == 200 || res.success || res.status == 201) {
        toast.success('تم التسجيل بنجاح! 🎉')
        router.push({name:"Login"})
      }
    } catch (error) {
      if (error.status === 422 && error.backResponse && error.backResponse.errors) {
        const backendErrors = error.backResponse.errors

        Object.keys(backendErrors).forEach((key) => {
          if (registerErrorData.value[key] !== undefined) {
            registerErrorData.value[key] = backendErrors[key][0]
          }
        })
      } else {
        toast.error('حدث خطأ غير متوقع يرجي المحاوله قريبا')
      }
    }
    finally{
      loadBtnState.value=false
    }
  } else {
    const errors = result.error.flatten().fieldErrors
    Object.keys(errors).forEach((key) => {
      registerErrorData.value[key] = errors[key][0]
    })
    loadBtnState.value=false
  }
}
</script>
