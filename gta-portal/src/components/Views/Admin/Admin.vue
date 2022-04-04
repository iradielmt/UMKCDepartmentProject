<template>
<Header />
<div class="main">
<section class="vh-100" style="background-color: #6c757d;">
    <div class="container py-5 h-50" >
      <div class="row d-flex justify-content-center align-items-center h-100" >
        <div class="col-12 col-md-8 col-lg-6 col-xl-5" >
          <div class="card shadow-2-strong" style="border-radius: 1rem;background-color: #272a34" >
            <div class="card-body p-5 text-center">
              <h3 class="mb-5" style="color: white">View Candidates</h3>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Choose Job

                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" data-model="modalOne" href="#">CS 101</a></li>
                  <li><a class="dropdown-item" href="#">CS 191</a></li>
                  <li><a class="dropdown-item" href="#">CS 201R</a></li>
                  <li><a class="dropdown-item" data-model="modalOne" href="#">CS 291</a></li>
                  <li><a class="dropdown-item" href="#">CS 303</a></li>
                  <li><a class="dropdown-item" href="#">CS 320</a></li>
                  <li><a class="dropdown-item" data-model="modalOne" href="#">CS 349</a></li>
                  <li><a class="dropdown-item" href="#">CS 394R</a></li>
                  <li><a class="dropdown-item" href="#">CS 404</a></li>
                  <li><a class="dropdown-item" data-model="modalOne" href="#">CS 441</a></li>
                  <li><a class="dropdown-item" href="#">CS 449</a></li>
                  <li><a class="dropdown-item" href="#">CS 456</a></li>
                  <li><a class="dropdown-item" data-model="modalOne" href="#">CS 457</a></li>
                  <li><a class="dropdown-item" href="#">CS 458</a></li>
                  <li><a class="dropdown-item" href="#">CS 461</a></li>
                  <li><a class="dropdown-item" data-model="modalOne" href="#">CS 465R</a></li>
                  <li><a class="dropdown-item" href="#">CS 470</a></li>
                  <li><a class="dropdown-item" href="#">CS 5520</a></li>
                  <li><a class="dropdown-item" data-model="modalOne" href="#">CS 5525</a></li>
                  <li><a class="dropdown-item" href="#">CS 5552A</a></li>
                  <li><a class="dropdown-item" href="#">CS 5565</a></li>
                  <li><a class="dropdown-item" data-model="modalOne" href="#">CS 5573</a></li>
                  <li><a class="dropdown-item" href="#">CS 5590PA</a></li>
                  <li><a class="dropdown-item" href="#">CS 5592</a></li>
                </ul>
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
import Header from '../Admin/AdminHeader.vue'

export default {
  components: { Header },
  name: "Admin-page"
}


</script>

<style scoped>

  
</style>