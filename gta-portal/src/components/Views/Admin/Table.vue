<template>
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
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Table-Page",
        data() {
            return {
                applications: {}
            }
        },
        props: {
          'courseName': String
        },
        mounted(){
            this.loadApplicationsTable();
        },
        methods: {
            loadApplicationsTable: function(){
            axios.get("/api/applications").then((res) => {
                this.applications = res.data.data;
            })
                .catch(()=>{
                    console.log("Something Went Wrong");
                })
            }       
        }
    };
</script>