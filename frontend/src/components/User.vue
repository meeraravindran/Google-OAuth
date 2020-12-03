
 <template>
<div>
  <h1>User</h1>
  <p>{{data}}</p>
</div>

 </template>


 <script>
   import axios from 'axios';
    export default {
   data() {
    return {
     data: []
    }
   },
   created() {
     console.log("Done");
   let uri = 'http://localhost:8000/api/profile';
   axios.get(uri).then(response => {
    this.data = response;
   });
   
  }
 }
 </script>