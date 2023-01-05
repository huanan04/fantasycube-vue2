<template>
  <div>
    <h1>接龙信息</h1>
    <JieLongInfo :group="group" :groupId="groupId" :list="list"/>
  </div>
</template>

<script>
import {getJieLongInfo} from "@/api/http/jielongHttp";
import JieLongInfo from "@/components/JieLongInfo.vue";

export default {
  name: "JieLongInfoView",
  components: {JieLongInfo},
  data() {
    return {
      list: [],
      groupId: 0,
      group: null,
      isTrue: false,
    }
  },
  created() {
    console.log(this.$route,11111)
    this.groupId = this.$route.query.groupId;
    if (this.groupId != 0) {
      let location = window.location;
      this.groupId = location.href.slice(location.href.indexOf('=') + 1, location.href.length);
    } else {
      this.getInfo()
    }
    if (this.list.length == 0 && this.groupId) {
      this.getInfo()
    }
    if (this.groupId) {
      this.isTrue = true
    }
  },
  methods: {
    /**
     * 获取当前接龙
     */
    getInfo() {
      getJieLongInfo(this.groupId)
          .then(e => {
            this.list = e.data.contents
            this.group = e.data.group
          }).catch(e => {
        console.log(e, '请求报错')
      })
    }
  }
}
</script>

<style scoped>

</style>