<template>
    <div class='goodsListContent'>
      <div class="good" v-for="(item,index) in goodsList" :key="index" @click="goGoodsInfo(item.id)">
        <img :src="item.img_url">
        <h1>{{item.title}}</h1>
        <div class="info">
          <span class="new">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
          <p>
            <span>热卖中</span>
            <span>剩余{{item.stock_quantity}}件</span>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          goodsList: [],
          pageindex :1
        }
      },
      created() {
        this.getGoodsList()
      },
      methods:{
        getGoodsList() {
          this.$http.get('api/getgoods?pageindex='+this.pageindex).then(res=> {
            if(res.body.status===0) {
              this.goodsList= res.body.message
            }
          })
        },
        goGoodsInfo(id) {
          this.$router.push({name:'goodsList',params:{id:id}})
        }
      }
    }
</script>

<style lang='less'>
  .goodsListContent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding:7px;
    .good {
      border: 1px solid #cccccc;
      box-shadow: 0 0 8px #cccccc;
      margin: 4px 0;
      width: 49%;
      padding: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 273px;
      img {
        width: 100%;
      }
      h1 {
        font-size: 14px;
      }
      .info {
        background:#eeeeee;
        color: #8f8f94;
        .new {
          color: red;
          font-weight: 700;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
        p {
          line-height: 40px;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }
      }
    }
  }
</style>
