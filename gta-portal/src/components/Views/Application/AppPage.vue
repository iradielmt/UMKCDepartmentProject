<template>
<html lang="en">
<head>
<title> Apply </title>
<meta charset="utf-8">
</head>

<body>
  <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
          <img src="@/assets/umkc.png" alt="centered image" height="150" width="275"> 
					<h2 class="heading-section">Apply</h2>
	</div>
</div>

	<div class="row justify-content-center">
		<div class="col-lg-10">
			<div class="wrapper">
				<div class="contact-wrap w-100 p-md-5 p-4 py-5"> 
					<div class="col-md-6">
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
               <label for="" class="mt-1">UMKC Current Level (BS/MS/PhD)</label>
               </div>
               <div class="col-md-6">
               <input type="text" class="form-control" placeholder="Clevel" v-model="CLevel" />
               </div>

               <div class="row mt-4">
               <div>
               <label for="" class="mt-1">Graduating Semester</label>
               </div>
               <div class="col-md-6">
               <input type="text" class="form-control" placeholder="GradSem" v-model="GradSemester" />
               </div>

              <div>
              <label for="" class="mt-1">UMKC Cumulative GPA (leave blank if first semester is in progress) </label>
              </div>
              <div class="col-md-6">
              <input type="text" class="form-control" placeholder="C_GPA" v-model="C_GPA" />
              </div>

              <div>
              <label for="" class="mt-1">Hours completed at UMKC (leave blank if first semester is in progress)</label>
              </div>
              <div class="col-md-6">
              <input type="text" class="form-control" placeholder="hoursUMKC" v-model="hoursUMKC" />
              </div>

              <div>
              <label for="" class="mt-1">Undergraduate Degree (if applicable, e.g., BTEC, BSCS, IT)</label>
              </div>
              <div class="col-md-6">
              <input type="text" class="form-control" placeholder="UG_Degree" v-model="UG_Degree" />
              </div>

              <div>
              <label for="" class="mt-1">Current Major(CS/IT/ECE/EE)</label>
              </div>
              <div class="col-md-6">
              <input type="text" class="form-control" placeholder="C_Major" v-model="C_Major" />
              </div>

              <div>
              <label for="" class="mt-1">Applying for: (Grader, Lab Instructor or Both) </label>
              </div>
              <div class="col-md-6">
              <input type="text" class="form-control" placeholder="App_For" v-model="App_For" />
              </div>

              <div>
              <label for="" class="mt-1">Are you GTA certified? If so, which term did you complete your certification? If you have a previous degree from a US Institute, please indicate this as that waives GTA certification</label>
              </div>
              <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Cert" v-model="Cert" />
              </div>

              <div>
              <label for="" class="mt-1">If you have a previous degree from a US Institute, please indicate this as that waives GTA certification.</label>
              </div>
              <div class="col-md-6">
              <input type="text" class="form-control" placeholder="CertUni" v-model="CertUni" />
              </div>

             <div>
             <label for="" class="mt-1">Courses you could serve as lab instructoror grade for(ex. CS 201L/CS 5525/ECE 216, etc.):</label>
             </div>
             <div class="col-md-6">
             <input type="text" class="form-control" placeholder="Courses" v-model="Courses" />
             </div>

           </div>
         </div>
       </div>
       
      <div class="row mt-4">
        <div class="col-md-2">
          <button class="btn btn-primary" @click="registerStudent">Apply</button>
      </div>

           </div>
          </div>
        </div>
      </div>
		</div>
  </div>
</section>
</body>
</html>
</template>

<script>
import axios from 'axios';
// import Header from "@/components/Views/Home/Header.vue";
// import Footer from "@/components/Views/Home/Footer.vue";
export default {
  name: "AppPage",
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




<style> @import '@/assets/style.css' </style>
