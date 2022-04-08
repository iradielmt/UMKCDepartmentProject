<template>
  <div class="bg-secondary">
    <HeaderHome></HeaderHome>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderHome from "@/components/Views/Home/Header";
export default {
  name: "App",
  components: {HeaderHome},
};
</script>