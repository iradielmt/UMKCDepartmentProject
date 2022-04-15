<template>
<html lang="en">
<head>
<meta charset="utf-8">
</head>
<body style="margin-bottom:5%;">
<div>
<Header />
</div>
<section class="ftco-section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 text-center mb-5">
                <img src="@/assets/umkc.png" alt="centered image" height="150" width="275"> 
                <h2 class="heading-section">GTA Login</h2>
            </div>
        </div>

    <div class="row justify-content-center">
        <div class="col-lg-10">
            <div class="wrapper">
                <div class="row no-gutters">
                     <div class="card shadow-2-strong" style="border-radius: 1rem; background-color:#272a34;">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Sign in</h3>
              <div class="form-outline mb-4">
                <input type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder="Email"/>
              </div>
              <div class="form-outline mb-4">
                <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="UMKC ID" />
              </div>
              <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
              <div>
                <p class="mb-0">Don't have an account? <a href="/register" class="mb-22 fw-bold">Sign Up</a></p>
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
import Header from '../Views/Home/Header.vue'
import Footer from '../Views/Home/Footer.vue'
export default {
  components: { Header, Footer },
  name: "LoginPage"
}



</script>

  



<style> @import '@/assets/style.css' </style>
