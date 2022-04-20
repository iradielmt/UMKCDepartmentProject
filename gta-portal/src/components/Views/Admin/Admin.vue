<template>
<Header />
<div >
  <section class="vh-100" style="background-color: skyblue;">
    <div class="center1">
      <div class="col-md-6 text-center mb-5">
        <img src="@/assets/umkc.png" alt="centered image" height="150" width="275">
      </div>
    </div>
    <div class="main">
      <div class="container py-5 h-50" >
        <div class="row d-flex justify-content-center align-items-center h-100" >
          <div class="col-12 col-md-8 col-lg-6 col-xl-5" >
            <div class="card shadow-2-strong" style="border-radius: 1rem;background-color: #272a34" >
              <div class="card-body p-5 text-center">
                <h3 class="mb-5" style="color: white">View Candidates</h3>
                <div class="dropdown">
                  <select class="form-select form-control" v-model="courseName" style="display: block; margin: 0 auto; width: 30%">
                    <option v-for="course in classes" :key="course.courseID" :value="course">{{ course.courseNo }} {{course.section}} </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div>
        <div >
          <table class="table table-bordered">
            <thead>
            <tr style="background-color:lightblue;">
                    <th>First</th>
                    <th>Last</th>
                    <th>UMKC ID</th>
                    <th>Course ID</th>
                    <th>Current Major</th>
                    <th>GPA</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="application in applications" :key="application.courseID">
                    <td>{{application.fname}}</td>
                    <td>{{application.lname}}</td>
                    <td>{{application.umkcID}}</td>
                    <td>{{application.courseID}}</td> 
                    <td>{{application.currMajor}}</td>
                    <td>{{application.GPA}}</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  </section>
</div>
<Footer />
</template>

<script>
import Header from "@/components/Views/Home/Header.vue";
import Footer from "@/components/Views/Home/Footer.vue";
import axios from 'axios';
const url = 'http://localhost:3000/api/';

export default {
  components: { 
    Header,
    Footer,
   },
  name: "Admin-page",
  data(){
    return{
      applications: {},
      courseName: {},
      classes: {},
    }
  },
  watch: {
    courseName: function(){
      this.isShow=true;
      this.loadApplications();
    }
  },
   mounted() {
    this.loadClasses();
  },
  methods: {
    loadClasses: function(){
      axios.get(url + "courses").then((res) => {
        this.classes = res.data.data;
      })
          .catch(()=>{
            console.log("Something Went Wrong");
          })
    },
    loadApplications: function() {
      try {
        axios.get(url + 'applications', {params: {"courseNo": this.courseName.courseID }} ).then((response) => {this.applications = response.data.data});
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    }
  }
};

</script>

<style scoped>

</style>