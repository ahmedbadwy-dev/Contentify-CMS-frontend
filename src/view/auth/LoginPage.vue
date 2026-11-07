<template>
  <div class="row">
    <div class="col-4"></div>
    <div class="col-4">
      <div class="card">
        <div class="card-header">
          <h3 class="text-center">Login Page</h3>
        </div>
        <div class="card-body">
          <form action="" method="post" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="password">password</label>
              <input type="text" class="form-control" id="password" v-model="loginData.password" />
              <span class="text-danger">{{ loginErrorData.password }}</span>
            </div>

            <div class="form-group">
              <label for="email">email</label>
              <input type="email" class="form-control" id="email" v-model="loginData.email" />
              <span class="text-danger">{{ loginErrorData.email }}</span>
            </div>
            <RouterLink :to="{ name: 'Register' }"> Register</RouterLink>
            <br />
            <button class="btn btn-success w-50" type="submit" :disabled="loadBtnState">Login <LoadBtn v-if="loadBtnState" /></button>
          </form>
        </div>
      </div>
    </div>
    <div class="col-4"></div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter} from 'vue-router'
import { z } from 'zod'
import { useToast } from 'vue-toastification'
import { loginUserHttp } from '@/view/auth/actions/LoginUser'
import LoadBtn from '@/compenent/LoadBtn.vue'
const router=useRouter()
const tost = useToast()
const loadBtnState=ref(false)
const loginData = ref({
  email: '',
  password: '',
})
const loginErrorData = ref({
  email: '',
  password: '',
})

const order = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
const handleSubmit = async () => {
  loadBtnState.value=true
  Object.keys(loginErrorData.value).forEach((key) => {
    loginErrorData.value[key] = ' '
  })
  const result = order.safeParse(loginData.value)
  if (result.success) {
    try {
      const res = await loginUserHttp(loginData.value)
      console.log(res)

      if (res) {
        if (res.status == 201) {
          tost.success('تم تسجيل الدخول بنجاح')

          localStorage.setItem('userData', JSON.stringify(res))
          router.push({name:"Admin"})
        }
      }
    } catch (error) {
      if (error.status == 422) {
        tost.warning(error.message)
      } else {
        tost.error(error.message)
      }
    }
    finally{
      loadBtnState.value=false

    }
  } else {
    const errors = result.error.flatten().fieldErrors
    Object.keys(errors).forEach((key) => {
      loginErrorData.value[key] = errors[key][0]
    })
      loadBtnState.value=false

  }
}
</script>
