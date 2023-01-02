<template>
  <div id="app">
<!--    <router-link to="/jielong/info/580355317">接龙详细</router-link>-->
    <JieLongInfoView></JieLongInfoView>
<!--    <router-view />-->
  </div>
</template>
<script>
import JieLongInfoView from "@/views/JieLongInfoView.vue";

export default {
  components: {JieLongInfoView}
}

</script>
<style>

</style>
