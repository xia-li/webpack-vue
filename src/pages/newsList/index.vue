<template>
  <div class='newsList'>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="item.id">
        <router-link :to="'/home/newsInfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src=" item.img_url">
          <div class="mui-media-body">
            <h3 class="mui-ellipsis">{{item.title}}</h3>
            <p class='mui-ellipsis'>
              <span>发表时间:{{item.add_time|dateForm}}</span>
              <span>点击:{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui'
  export default {
    data() {
      return {
        newsList: []
      }
    },
    created() {
      this.getNewsList()
    },
    methods:{
      getNewsList() {
        this.$http.get('api/getnewslist').then(result=> {
          if(result.body.status===0) {
            this.newsList = result.body.message
          } else {
            Toast('获取新闻数据失败,请重试!')
          }
        })
      }
    }
  }
</script>
<style lang='less'>
  .newsList {
    .mui-media-body {
      >h3 {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 5px;
      }
      >p {
        color: #0094ff;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
