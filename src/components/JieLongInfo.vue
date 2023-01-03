<template>
  <div>
    <h3 class="jieLongTitle">{{group ?group.name : groupId}}正在进行的接龙</h3>
    <div v-if="list">
      <div v-for="item in list" :key="item.id">
        <h4 class="jieLongTitle">第{{item.sequence}}回</h4>
        <span>作者：{{item.jieLongName}}</span><br>
        <span v-if="item.likes != 0">点赞：{{item.likes}}</span>
        <p v-for="(text,i) in item.formattedText" :key="i" >{{text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JieLongInfo",
  props:[
      'group',
      'groupId',
      'list'
  ]
}
</script>

<style scoped>
.jieLongTitle{
  text-align:center;
}
</style>