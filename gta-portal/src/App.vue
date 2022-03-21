<template>
  <div class="bg-secondary">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Views/Home/Header.vue";
import Footer from "@/components/Views/Home/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>