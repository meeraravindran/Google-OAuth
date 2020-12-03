 <template>
 <div >
     <h1 >Google OAuth</h1>
     <!-- <button @click.prevent="signin()" class="btn btn-primary">SignIn with Google</button> -->
     <a href="http://localhost:8000/api/auth/google">GOOGLE</a><br>
 </div>
 </template>
 <script>
 export default {
     data(){
         return{
             error:{}
         }
     },
     methods : {
         signin(){
             this.$router.push('user');
         }
     }
 }
 </script>