<template>
  <div class="success-page">
    <img class="h5logo" src="/static/assets/h5logo.png"/>
    <div class="content">
      <img class="con_pic" src="/static/assets/success_group.png"/>
      <div class="speaker">本期主讲人：杨英豪</div>
      <div class="schooltime">上课时间：8月15日19:00</div>
      <div class="class_line">上课方式</div>
      <img src="/static/assets/qr_code.jpg" class="qrimg" alt="">
      <div class="bottom_text"> <span>长按并识别</span>上方二维码进入QQ群 <br> 或 <button id="copy">点击此处</button> 复制群号 483192204 在QQ中搜索群 </div>
    </div>
    
  </div>
</template>
<script>
  export default {
    name: 'submitSuccess',
    data(){
      return{

      }
    },
    mounted(){
      
    },
    methods:{
     
    }
    
  }
</script>
<style lang="less" scoped>
  @charset "utf-8";
  @rpx: 750/640 * 100rem;
  .success-page{
    padding: 0 54/@rpx;
    height:100%;
    background: #fff url('/static/assets/success_bg.png') no-repeat center 0;
    background-size:cover;
    .h5logo{
      width: 292/@rpx;
      height: 78/@rpx; 
      padding:50/@rpx 0 0 0;
      display: block;
    }
    .content{
      width:100%;
      text-align: center;
      .con_pic{
        width: 290/@rpx;
        height: 316/@rpx;
        display: block;
        margin:30/@rpx auto 36/@rpx;
      }
      .speaker{
        font-size: 42/@rpx;
        color:#333;
        font-weight: bold;
      }
      .schooltime{
        font-size: 30/@rpx;
        color:#333;
      }
      .class_line{
        margin:60/@rpx 0 28/@rpx;
        color:#ff506b;
        font-size:26/@rpx;
        position: relative;
      }
      .class_line:after{
        content:"";
        position: absolute;
        right:0;
        top:50%;
        width:35%;
        height:1/@rpx;
        background: #d9d8d8;
      }
      .class_line:before{
        content:"";
        position: absolute;
        left:0;
        top:50%;
        width:35%;
        height:1/@rpx;
        background: #d9d8d8;
      }
      .qrimg{
        width:300/@rpx;
        height:300/@rpx;
        display: block;
        margin:0 auto;
      }
      .bottom_text{
        text-align: center;
        font-size:26/@rpx;
        line-height: 40/@rpx;
        margin:25/@rpx 0;
        span{
          color:#ff506b;
        }
        #copy{
          border: 0;
          font-size:26/@rpx;
          background: transparent;
          color: #ff506b;
          padding: 0;
        }
      }
    }
    
  }
</style>
