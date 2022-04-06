<template>
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>First</th>
                    <th>Last</th>
                    <th>UMKC ID</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="applications in applications" :key="applications.id">
                    <td>{{applications.fname}}</td>
                    <td>{{applications.lname}}</td>
                    <td>{{applications.umkcID}}</td>
                    <td>{{applications.courseID}}</td>
                </tr>
                <!--
                    <button 
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