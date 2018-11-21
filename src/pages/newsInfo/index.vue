<template>
  <div class='newsInfo-content'>
      <h3 class="mui-text-center title">{{newsInfoList.title}}</h3>
      <p>
        <span>发表时间:{{newsInfoList.add_time|dateForm}}</span>
        <span>点击:{{newsInfoList.click}}次</span>
      </p>
      <hr>
      <div class="content" v-html="newsInfoList.content"></div>
      <comment :id="id"></comment>
    </div>

</template>

<script>
  import  Toast from 'mint-ui'
  import comment from '../../components/comment/'
    export default {
      data: function () {
        return {
          id: this.$route.params.id,
          newsInfoList :[]
        }
      },
      created() {
        this.getNewsInfo()
      },
      methods:{
        getNewsInfo() {
          this.$http.get('api/getnew/'+this.id).then(res=> {
            if(res.body.status===0) {
              this.newsInfoList = res.body.message[0]
            } else {
              Toast('获取详情页失败,请重试')
            }
          })
        }
      },
      components:{
        comment
      }
    }
</script>

<style lang='less'>
  .newsInfo-content {
    padding: 0 4px;
    >.title {
      font-weight: bold;
      font-size:16px;
      color: red;
      margin: 15px 0;
    }
    >p {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      color: #226aff;
    }
    >.content {
      img {
        width: 100%;
      }
    }
  }
</style>
