<template>
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
                  <li><a class="dropdown-item" data-model="modalOne" href="#">Temp1</a></li>
                  <li><a class="dropdown-item" href="#">Temp2</a></li>
                  <li><a class="dropdown-item" href="#">Temp3</a></li>
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

export default {
  name: "Admin-page"
}


</script>

<style scoped>

  
</style>