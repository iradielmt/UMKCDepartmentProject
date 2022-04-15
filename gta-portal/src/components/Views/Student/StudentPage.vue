<template>
<Header />
<div class="main">
<section class="vh-100" style="background-color: #6c757d;">
    <div class="container py-5 h-50" >
      <div class="row d-flex justify-content-center align-items-center h-100" >
        <div class="col-12 col-md-8 col-lg-6 col-xl-5" >
          <div class="card shadow-2-strong" style="border-radius: 1rem;background-color: #272a34" >
            <div class="card-body p-5 text-center">
              <h3 class="mb-5" style="color: white">Apply for Job:</h3>
              <div class="dropdown">
                <a href="/AppPage" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Start Application</a>
              </div>
               <div>
                <p class="mb-0">Already filled out an application? <a href="/profile" class="text-white-50 fw-bold">View Applications</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Header from "@/components/Views/Student/StudentHeader.vue";

export default {
  components: { Header },
  name: "Student-page"
}


</script>

<style scoped>

  
</style>