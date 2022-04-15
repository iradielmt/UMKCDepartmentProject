<template>
<html lang="en">
<head>
<title> GTA Qualification Information</title>
<meta charset="utf-8">
</head>
<body style="margin-bottom:5%;">
<div>
<Header />
</div>
	<section class="ftco-section"> 
		<div class="container"> <!-- Lines 9-15 build header -->
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
          <img src="@/assets/umkc.png" alt="centered image" height="150" width="275"> 
					<h2 class="heading-section">Register</h2>
        </div>
      </div>

			<div class="row justify-content-center">
				<div class="col-lg-10">
					<div class="wrapper">
						<div class="contact-wrap w-100 p-md-5 p-4 py-5">
              <div class="col-md-10">
                <div class="row mt-4">
                  
                  <div>
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
                  <div>
                  <label for="" class="mt-1">UMKC ID</label>
                  </div>
                  <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="ID" v-model="umkcID" />
                  </div>
                  </div>
       
                 <div class="row mt-4">
                 <div>
                 <label for="" class="mt-1">Email</label>
                 </div>
                 <div class="col-md-6">
                 <input type="text" class="form-control" placeholder="Email" v-model="email" />
                 </div>
          
                 <div class="row mt-4">
                 <div>
                 <label for="" class="mt-1">Contact Number</label>
                 </div>
                 <div class="col-md-6">
                 <input type="text" class="form-control" placeholder="Contact Number" v-model="cNumber" />
                 </div>
                 </div>
                 </div>

                 <div class="row mt-4">
                 <div>
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
                 <button class="btn btn-primary" @click="$router.push('/AppPage')" >Register</button>
                 </div>
                 </div>

        
                </div>
              </div>
            </div>							
          </div>
				</div>
    </div>	
  </section>
</body>
<Footer />
</html>
</template>

<script>
import axios from 'axios';
 import Header from "@/components/Views/Home/Header.vue";
 import Footer from "@/components/Views/Home/Footer.vue";
export default {
  name: "RegisterPage",
  components: {
    Header,
    Footer
  },
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




<style> @import '@/assets/style.css' </style>
