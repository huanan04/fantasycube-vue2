<template>
  <div>
    <h3 class="jielongtitle" v-if="groupId">{{group ?group.name : groupId}}正在进行的接龙</h3>
    <div v-if="list">
      <div v-for="item in list" :key="item.id">
        <h4 class="jielongtitle">第{{item.sequence}}回</h4>
        <span>作者：{{item.jieLongName}}</span><br>
        <span v-if="item.likes != 0">点赞：{{item.likes}}</span>
        <p v-for="(text,i) in item.formattedText" :key="i" >{{text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {jieLongInfo,jieLongInfo1} from "@/api/http/jielongHttp";
export default {
  name: "JieLongInfoView",
  data() {
    return {
      list: [],
      groupId: 299468208,
      group: null,
      count: 0,
      isTrue: false,
      host:window.location
    }
  },
  created() {
    this.groupId = this.$route.query.groupId;
    this.getInfo()
    if (!this.groupId){
      let location = window.location;
      let s = location.href.slice(location.href.indexOf('=')+1,location.href.length);
      this.host = s
      this.groupId = this.host
    }

    jieLongInfo1().then(e=>{
      console.log(e)
    })
    if (this.list.length == 0 && this.groupId) {
      jieLongInfo({titleId:1,groupId:this.groupId})
          .then(e => {
            console.log(e)
            // this.list = e.data.contents
            // this.group = e.data.group
          }).catch(e=>{
        console.log(e,'error')
      })
    }
    if (this.groupId) {
      this.isTrue = true
    }
  },
  methods: {
    getInfo() {
      this.count++
      // service.get("/gushijielong/v1/get_now_jie_long_by_group", {params: {"groupId": this.groupId}})
      //     .then(e=>{
      //       this.list = e.data
      //     })
    }
  }
}
</script>

<style scoped>
.jielongtitle{
  text-align:center;
}
</style>