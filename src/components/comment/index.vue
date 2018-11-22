<template>
  <div class='comment-content'>
    <h3>评论组件</h3>
    <hr>
    <textarea placeholder="请输入想要输入的内容,最多输入120字" v-model="content"></textarea>
    <mt-button type="primary" size="large" @click="addCommentList">发表评论</mt-button>
    <div class="comment">
      <div class="commentList" v-for="(item,index) in commentList" :key="item.id">
        <div class="cmtitle">
          第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp; &nbsp;发表时间:{{item.add_time|dateForm}}
        </div>
        <div class="cmcontent">{{item.content||'此人有点懒'}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'

  export default {
    data() {
      return {
        pageindex: 1,
        commentList: [],
        content: ''
      }
    },
    props: ['id'],
    created() {
      this.getCommentList()
    },
    methods: {
      getCommentList() {
        this.$http.get('api/getcomments/' + this.id + '?pageindex=' + this.pageindex).then(res => {
          if (res.body.status === 0) {
            this.commentList =this.commentList.concat(res.body.message)
          } else {
            Toast('获取评论失败,请重试')
          }
        })
      },
      getMore() {
        this.pageindex++;
        this.getCommentList()
      },
      addCommentList() {
        if (this.content.trim() === '') {
          Toast('评论不能为空')
        } else {
          this.$http.post('api/postcomment/' + this.id, {artid: this.id, content: this.content}).then(result => {
            if (result.body.status === 0) {
              this.getCommentList()
              this.content = ''
            } else {
              Toast('添加评论失败.请重试')
            }
          })
        }

      }
    }
  }
</script>

<style lang='less'>
  .comment-content {
    > .mint-button--primary {
      margin-bottom: 5px;
    }
    > .mint-button--danger {
      margin-top: 5px;
    }
    > h3 {
      font-size: 18px;
      font-weight: bold;
      margin: 5px 0;
    }
    > textarea {
      font-size: 14px;
      height: 85px;
      text-indent: 2em;
      padding-top: 10px;
    }
    .commentList {
      > .cmtitle {
        /*margin-top: 5px;*/
        text-align: center;
        font-size: 13px;
        line-height: 30px;
        background-color: #e7e5e5;
      }
      > .cmcontent {
        font-size: 13px;
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
</style>
