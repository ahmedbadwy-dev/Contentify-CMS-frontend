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
            <button class="btn btn-success w-50" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
    <div class="col-4"></div>
  </div>
</template>
<script setup>
import {ref  } from "vue";
import {z}  from "zod";

const loginData = ref({
  
  email: '',
  password: '',
})
const loginErrorData = ref({

  email: '',
  password: '',
})

const order=z.object({

   email:z.string().email(),
   password:z.string().min(8)
})
const handleSubmit=()=>{
  Object.keys(loginErrorData.value).forEach(key => {
    loginErrorData.value[key]=" "
  })
const result=order.safeParse(loginData.value)
if (result.success) {
  console.log("ok send");
  
}
else{
  const errors=result.error.flatten().fieldErrors
          Object.keys(errors).forEach(key => {
   loginErrorData.value[key]=errors[key][0]

})

}
}


</script>
