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
                  <select class="form-select form-control" v-model="courseName">
                    <option value="CS101">CS 101</option>
                    <option value="CS191">CS 191</option>
                    <option value="CS201R">CS 201R</option>
                    <option value="CS291">CS 291</option>
                    <option value="CS303">CS 303</option>
                    <option value="CS320">CS 320</option>
                    <option value="CS349">CS 349</option>
                    <option value="CS394R">CS 394R</option>
                    <option value="CS404">CS 404</option>
                    <option value="CS441">CS 441</option>
                    <option value="CS449">CS 449</option>
                    <option value="CS456">CS 456</option>
                    <option value="CS457">CS 457</option>
                    <option value="CS458">CS 458</option>
                    <option value="CS461">CS 461</option>
                    <option value="CS465R">CS 465R</option>
                    <option value="CS470">CS 470</option>
                    <option value="CS5520">CS 5520</option>
                    <option value="CS5525">CS 5525</option>
                    <option value="CS5552A">CS 5552A</option>
                    <option value="CS5565">CS 5565</option>
                    <option value="CS5573">CS 5573</option>
                    <option value="CS5590PA">CS 5590PA</option>
                    <option value="CS5596A">CS 5596A</option>
                    <option value="CS5596B">CS 5596B</option>
                    <option value="ECE216">ECE 216</option>
                    <option value="ECE226">ECE 226</option>
                    <option value="ECE228">ECE 228</option>
                    <option value="ECE241">ECE 241</option>
                    <option value="ECE276">ECE 276</option>
                    <option value="ECE302">ECE 302</option>
                    <option value="ECE330">ECE 330</option>
                    <option value="ECE341R">ECE 341R</option>
                    <option value="ECE428R">ECE 428R</option>
                    <option value="ECE458">ECE 458</option>
                    <option value="ECE466">ECE 466</option>
                    <option value="ECE477">ECE 477</option>
                    <option value="ECE486">ECE 486</option>
                    <option value="ECE5558">ECE 5558</option>
                    <option value="ECE5560">ECE 5560</option>
                    <option value="ECE5567">ECE 5567</option>
                    <option value="ECE5577">ECE 5577</option>
                    <option value="ECE5578">ECE 5578</option>
                    <option value="ECE5586">ECE 5586</option>
                    <option value="IT222">IT 222</option>
                    <option value="IT321">IT 321</option>
                  </select>
                  <div>
                    <button @click="loadApplicationsTable">Load {{ courseName }} candidates</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="displayTable">
        <div>
          <table class="table table-bordered">
            <thead>
                <tr>
                    <th>First</th>
                    <th>Last</th>
                    <th>UMKC ID</th>
                    <th>Course ID</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="application in applications" :key="application.id">
                    <td>{{application.fname}}</td>
                    <td>{{application.lname}}</td>
                    <td>{{application.umkcID}}</td>
                    <td>{{application.courseID}}</td> 
                    <!-- <td><button class="btn btn-info" data-toggle="modal" data-target="#exampleModal">show modal</button>
                        <example-modal></example-modal></td> -->
                </tr>
                    <!-- <button 
                        v-on:click="viewApplication( {{ $section->pivot->id}}, {{ $student_id}} )" 
                        class="btn btn-xs btn-primary">View
                    </button> -->
            </tbody>
        </table>
          <!-- <div class="modal-vue">
              <div class="overlay" v-if="showDetailModal" @click="showDetailModal = false"></div>

              <div class="modal" v-if="showDetailModal">
                  <button class="close" @click="showDetailModal = false">x</button>
                  <h3>@{{ currentItem.age }}</h3>
                      </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</div>
<Footer />
</template>

<script>
// import Table from '../Admin/Table.vue'
import Header from "@/components/Views/Home/Header.vue";
import Footer from "@/components/Views/Home/Footer.vue";
import axios from 'axios';
export default {
  components: { 
    Header,
    Footer,
   },
  name: "Admin-page",
  data(){
    return{
      courseName: '',
      courseID: '',
      disabled: false
    }
  },
  methods: {
    // matchCourse: function(){
    //   axios.get("/api/getCourseNum",{params: {courseNo: this.courseName}}).then((res) => {
    //     this.courseID = res.data.data.courseID;
    //   })
    //   .catch(()=>{
    //     console.log("Something Went Wrong");
    //   })
    // },
    loadApplicationsTable: function(){
      axios.get("/api/getCourseNum", { params: { courseNo: "CS291" } }).then((res) => {
        this.courseID = res.data.courseID;
        console.log(this.courseID);
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
      console.log(this.coursID);
      axios.get("/api/applications", {params: {courseID: this.courseID}}).then((res) => {
          this.applications = res.data.data;
      })
      .catch(()=>{
          console.log("Something Went Wrong");
      })           
    }
  }
};


</script>

<style scoped>

  
</style>