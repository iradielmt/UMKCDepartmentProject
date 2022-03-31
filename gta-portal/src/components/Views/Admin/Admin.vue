<template>
  <Header>
  <body>
    <div class="container-fluid" style="height: 400px; background-color: blue">
      <div class="col text-center">
        <div class="col text-center">
          <button type="button" class="btn btn-light btn-lg btn-block">Post Job</button>
          <div class="row" style="text-align: center; color: yellow">
            <p>Use this button to post a new job!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid; margin-left:0px" style="height: 400px; background-color: yellow">
      <div class="col text-center">
      <button type="button" class="btn btn-dark btn-lg btn-block">View Candidates</button>
      <div class="row" style="text-align: center; color: blue">
          <p>Use this button to view potential candidates for desired position!</p>
      </div>
    </div>
    </div>
  </body>

</template>

<script>
import Header from "@/components/Views/Admin/AdminHeader.vue";
import Footer from "@/components/Views/Home/Footer.vue";

export default {
  name: "Admin-page",
  components:{
    Header, Footer
  },
  
};
</script>

<style scoped>

.btn-lg{
  padding: 10px 20px 10px, 5px;
  width: 300px;
}
</style>