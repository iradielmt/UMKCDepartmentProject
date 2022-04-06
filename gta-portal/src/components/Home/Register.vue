<template>
  <!-- <Header />  -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="row mt-4">
          <div class="col-md-2">
            <label for="" class="mt-1">Name</label>
          </div>
          <div class="col-md-4">
            <input type="text" class="form-control" v-model="fname" placeholder="First Name" />
          </div>
          <div class="col-md-4">
            <input type="text" class="form-control" v-model="lname" placeholder="Last Name" />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2">
            <label for="" class="mt-1">UMKC ID</label>
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="ID" v-model="umkcID" />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2">
            <label for="" class="mt-1">Email</label>
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Email" v-model="email" />
          </div>
          <div class="row mt-4">
          <div class="col-md-2">
            <label for="" class="mt-1">Contact Number</label>
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Contact Number" v-model="cNumber" />
          </div>
        </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2">
            <label for="" class="mt-1">GTA Certified</label>
          </div>
          <div class="col-md-6">
            <select name="" id="" class="form-select" v-model="certified">
              <option value=""> </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2">
            <button class="btn btn-primary" @click="registerStudent">Register</button>
          </div>
        </div>
      </div>
      <!-- <div class="col-md-6">
        <img src="../../../../public/Images/Nerd-rafiki.svg" alt=""/>
      </div> -->
    </div>
  </div>
  <!-- <Footer /> -->
</template>

<script>
import axios from 'axios';
// import Header from "@/components/Views/Home/Header.vue";
// import Footer from "@/components/Views/Home/Footer.vue";
export default {
  name: "RegistrationPage",
  // components: {
  //   Header,
  //   Footer
  // },
  data() {
    return{
      fname: "",
      lname: "",
      umkcID: "",
      id: "",
      email: "",
      certified: false,
      cNumber: ""
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