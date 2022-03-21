<template>
    <div>
        test
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Admin-page",
  data() {
    return{
      fname: "",
      lname: "",
      id: "",
    }
  },
  methods: {
    registerStudent: function() {
      axios.post("/api/student", {
        fname: this.fname,
        lname: this.lname,
        umkcID: this.umkcID,
      }).then((res) => {
        if(res.data.msg === "Validation Failed"){
          let errors = res.data.errors;
          let errorMsg = "";
          if(errors.fname.length != 0){
            for(let i=0; i<errors.fname.length; i++){
              errorMsg += `${errors.fname[i]}\n`;
            }
          }

          if(errors.lname.length != 0) {
            for (let i = 0; i < errors.lname.length; i++) {
              errorMsg += `${errors.lname[i]}\n`;
            }
          }
          if(errors.umkcID.length != 0){
            for(let i=0; i<errors.umkcID.length; i++){
              errorMsg += `${errors.umkcID[i]}\n`;
            }
          }
          alert(errorMsg);
        }
        else{
          alert("Successfully Saved");
        }
      }).catch(()=>{
        alert("Something Went Wrong");
      })
    }
  }
};
</script>

<style scoped>
img {
  height: 500px;
}
</style>