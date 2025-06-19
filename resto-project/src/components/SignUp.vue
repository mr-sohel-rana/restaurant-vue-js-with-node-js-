<template>
    <form @submit.prevent="getData">
    <input type="text" placeholder="Enter your name" v-model="name"><br/>
    <input type="email" placeholder="Enter your email" v-model="email" ><br/>
    <input type="password" placeholder="Enter your passord" v-model="password"><br/>
    <button  type="submit" >submit</button>

   </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignUp',

  data() {
    return {
        name:"",
        email:"",
        password:""
    }
  },
  methods: {
    async getData(){
      let result=await axios.post(" http://localhost:3000/posts",{
        name:this.name,
        email:this.email,
        password:this.password
      })
        console.warn(result)
        if(result.status===201){
          alert("success")
          localStorage.setItem("user",JSON.stringify(result.data))
          this.$router.push({name:"HomePage"})
        }
    }
  },
   
}
</script>
 
<style scoped>
 form input{
    color:red;
   padding: 5px;
   font-size: 15px;
   
 }
 form button{
    margin-top: 5px;
    color:black;


 }
</style>
