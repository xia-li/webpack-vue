<template>
    <div class='goodsInfoContent'>
      <h1>{{id}}</h1>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          id:this.$route.params.id
        }
      },
      methods:{
      }
    }
</script>

<style lang='less'>

</style>
