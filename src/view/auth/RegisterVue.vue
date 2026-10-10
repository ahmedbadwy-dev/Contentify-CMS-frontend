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
            <button class="btn btn-success w-50" type="submit" @click="handleSubmit">Register</button>
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

const order=z.object({
   name:z.string().min(3,"هو ده اسم بني ءدمين بطلو هطل بقي").max(20),
   email:z.string().email(),
   password:z.string().min(8)
})
const handleSubmit=()=>{
  Object.keys(registerErrorData.value).forEach(key => {
    registerErrorData.value[key]=" "
  })
const result=order.safeParse(registerData.value)
if (result.success) {
  console.log("ok");
  
}
else{
  const errors=result.error.flatten().fieldErrors
          Object.keys(errors).forEach(key => {
    registerErrorData.value[key]=errors[key][0]

})

}
}
</script>
