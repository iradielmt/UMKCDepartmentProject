<template>
  <Header/>
  <div>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>UMKC ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody style="color: #D1CDC8 ;">
      <tr v-for="student in students" :key="student.id">
        <td>{{student.umkcID}}</td>
        <td>{{student.fname}}</td>
        <td>{{student.lname}}</td>
        <td>{{student.email}}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <Footer />
</template>
