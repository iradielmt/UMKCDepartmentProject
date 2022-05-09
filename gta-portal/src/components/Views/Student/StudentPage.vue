<template>
<html lang="en">
<head>
<meta charset="utf-8">
</head>
<body style="margin-bottom:5%;">
<Header />
<div class="center1">
            <div class="col-md-6 text-center mb-5">
                <img src="@/assets/umkc.png" alt="centered image" height="150" width="275"> 
            </div>
</div>
<div class="main">
<section class="vh-100">
    <div class="container py-5 h-50" >
      <div class="row d-flex justify-content-center align-items-center" >
        <div class="col-12 col-md-8 col-lg-6 col-xl-5" >
          <div class="card shadow-2-strong" style="border-radius: 1rem;background-color: #272a34" >
            <div class="card-body p-5 text-center">
              <h3 class="mb-2" style="color: white">Apply for Job:</h3>
              <div class="dropdown">
                <a href="/AppPage" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Start Application</a>
              </div>
               <div>
                <p class="mb-0">Do you qualify for a GTA position? <a href="/info" class="fw-bold">View Criteria</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</body>
<Footer />
</html>
</template>

<script>
import Header from "@/components/Views/Student/StudentHeader.vue";
import Footer from './Footer.vue'

export default {
  components: { Header, Footer },
  name: "Student-page",

  data(){
    return{
      user: {}
    }
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      await this.$router.push('/login');
    }
  },
  mounted() {
    this.user = this.$store.getters.getUser;
    // console.log(this.user);
    // console.log(this.user.email);
  }
}


</script>

<style scoped>
.btn{
  margin-bottom: 10px;
}
.fw-bold{
  color:burlywood;
}
  
</style>