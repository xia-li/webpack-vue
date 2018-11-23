<template>
    <div class='imagesList'>
      <!--顶部导航-->
      <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
            <!--['mui-control-item',item.id==0?'mui-active':'']-->
            <a :class="{'mui-control-item':true,'mui-active':item.id===0}" href="#item1mobile" data-wid="tab-top-subpage-1.html"
               v-for="(item,index) in categoryList" :key="item.id" @click="getImageList(item.id)">
              {{item.title}}
            </a>
          </div>
        </div>
      </div>
      <!--!懒加载图片区域&ndash;&gt;-->
      <ul>
        <li v-for="(item,index) in imagesList" :key="index">
          <img v-lazy="item" width="100%" height="200px">
        </li>
      </ul>
    </div>
</template>
<script>
  import {Toast} from 'mint-ui'
  import mui from  '../../lib/mui/js/mui.min'
    export default {
      data() {
        return {
          categoryList: [],
          imagesList:[
            // "http://47.107.140.8/image/home/banner1.jpg",
            // "http://47.107.140.8/image/home/banner2.jpg",
            // "http://47.107.140.8/image/home/banner3.jpg",
            // "http://47.107.140.8/image/home/banner4.jpg"
          ]
        }
      },
      created() {
        this.getImgCategory();
        this.getImageList(0)
      },
      mounted(){
        mui('.mui-scroll-wrapper').scroll({
          deceleration: 0.0005
        });
      },
      methods:{
        getImgCategory(){
          this.$http.get('api/getimgcategory').then(res=>{
            if(res.body.status===0) {
              res.body.message.unshift({title:'全部', id:0 });
            this.categoryList=res.body.message
            } else {
              Toast('获取分类数据失败,请重试')
            }
          })
        },
        getImageList(id) {
          this.$http.get('api/getimages/'+id).then(res=>{
            if(res.body.status===0) {
              this.imagesList=res.body.message
            }
          })
        }
      }

    }
</script>

<style lang='less'>
  * { touch-action: pan-y; }
</style>
