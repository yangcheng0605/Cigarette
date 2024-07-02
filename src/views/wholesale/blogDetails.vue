<template>
  <div class="blog_detail">
    <div class="detail_box">
      <div class="blog_top">
        <p class="title">{{ content.title }}</p>
        <div class="publish_box">
          <div class="publish_user"><img src="@/assets/img/publish_user_b.png" alt=""><span>{{content.user}}</span></div>
          <div><img src="@/assets/img/publish_time_b.png" alt=""><span>{{content.time}}</span></div>
        </div>
      </div>
      <div class="blog_content" v-html="content.content"></div>
      
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs } from 'vue';
  export default {
    name: "contact",
    components: {
    },
    setup() {
      const { proxy } = getCurrentInstance();
      const state = reactive({
        content:{
          title: 'EHONOS at the TPE 2024 Expo and Rave Reviews!',
          user: 'EHONOS',
          time: '21.06.2024',
          content: 'Resounding success of our beloved Magic Maze Pro.'
        }
      })
      onMounted(async () => { 
        nextTick(() => {
        })
      })
      return {
        ...toRefs(state),
      };
    },
  };
</script>
<style lang="less">
.detail_box{
  padding: 5rem 28.75rem 7.5rem;
  .blog_top{
    padding-bottom: 1.25rem;
    margin-bottom: 3.75rem;
    border-bottom: 1px solid #111;
    .title{
      font-weight: 500;
      font-size: 3rem;
      color: #111111;
      line-height: 3.75rem;
      margin-bottom: 1.25rem;
    }
    .publish_box{
      img{
        width: 1rem;
        height: 1rem;
        margin-right: 0.25rem;
      }
      display: flex;
      &>div{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .publish_user{
        margin-right: 1.25rem;
      }
    }
  }
  .blog_content{
    color: #111;
    font-size: 1.25rem;
    line-height: 1.875rem;
    img{
      width: 100%;
      height: 35.125rem;
      object-fit: cover;
      margin: 2.5rem 0;
    }
  }
}
</style>