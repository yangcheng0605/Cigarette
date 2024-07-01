<template>
  <div class="wholesale">
    <div class="top_banner2">
      <img src="@/assets/img/about/contact_banner.webp" alt="">
      <div class="t_box">
        <p class="title AntonFont">BLOG</p>
      </div>
    </div> 
    <div class="a_content">
      <a-spin :spinning="spinning">
        <a-row :gutter="gutter" v-if="blogData && blogData.length>0">
          <a-col class="gutter-row" :span='colSpan' v-for="item in blogData" :key='item.id'>
            <div class="gutter-box wow animate__bounceIn" data-wow-offset="50" @click="toDetail(item)" >
              <div class="hoverBox proImg">
                <img class="hoverImg" :src="item.img" alt="">
              </div>
              <div class="blog_content">
                <p class="blog_name">{{ item.title }}</p>
                <div class="publish_box">
                  <div class="publish_user"><img src="@/assets/img/publish_user_w.png" alt=""><span>{{item.user}}</span></div>
                  <div><img src="@/assets/img/publish_time_w.png" alt=""><span>{{item.time}}</span></div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
        <a-empty v-else />
      </a-spin>
      <div class="center">
        <a-button class="more" shape="round" @click="handleMore">More</a-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
  export default {
    name: "wholesale",
    components: {
    },
    setup() {
      const router = useRouter()
      const { proxy } = getCurrentInstance();
      const state = reactive({
        blogData: [
          {id: 1, img: require('@/assets/img/home/live_1.png'), title: 'EHONOS at the TPE 2024 Expo and Rave Reviews!', time: '21.06.2024', user:'EHONOS'},
          {id: 2, img: require('@/assets/img/home/live_4.png'), title: 'ODB & NEX JUICE launch the joint version of Magic Maze Pro Magic sdsdsd', time: '20.06.2024', user:'EHONOS'},
          {id: 3, img: require('@/assets/img/home/live_1.png'), title: 'World Vape Show Paraguay 2024!', time: '19.06.2024', user:'EHONOS'},
          {id: 4, img: require('@/assets/img/home/live_4.png'), title: 'World Vape Show Paraguay 2024!', time: '18.06.2024', user:'EHONOS'},
          {id: 5, img: require('@/assets/img/home/live_1.png'), title: 'EHONOS at the TPE 2024 Expo and Rave Reviews!', time: '17.06.2024', user:'EHONOS'},
          {id: 6, img: require('@/assets/img/home/live_4.png'), title: 'ODB & NEX JUICE launch the joint version of Magic Maze Pro Magic sdsdsd', time: '16.06.2024', user:'EHONOS'},
        ],
        colSpan: 8,
        gutter: [30, 30],
        spinning: false, 
      })
      onMounted(async () => { 
        nextTick(() => {
          handleResize();
          window.addEventListener('resize', handleResize);
        })
      })
      const handleResize = () => {
        const windowWidth = window.innerWidth;
       if (windowWidth < 750) {
          state.colSpan = 24;
          state.gutter = 20
        } else {
          state.colSpan = 8;
          state.gutter = [30, 30]
        }
      };
      const toDetail = (res) => {
        router.push('/blogDetails?id=' + res.id);
      };
      const handleMore = (res) => {
        const obj = {
          id: 7, 
          img: require('@/assets/img/home/live_1.png'), 
          title: 'ODB & NEX JUICE launch the joint version of Magic Maze Pro Magic sdsdsd', 
          time: '15.06.2024', 
          user:'EHONOS'
        }
        state.blogData.push(obj)
      };
    
      return {
        ...toRefs(state),
        toDetail,
        handleMore
      };
    },
  };
</script>
<style lang="less">
.a_content{
  .gutter-box{
    border-radius: 1rem;
    background: #333;
    cursor: pointer;
    .proImg{
      border-radius: 1rem;
      img{
        width: 28.75rem;
        height: 21.25rem;
        object-fit: cover;
      }
    }
    .blog_content{
      font-size: 1rem;
      line-height: 1rem;
      padding: 1.25rem;
      color: #FFF;
      .blog_name{
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.375rem;
        margin-bottom: 2.625rem;
        height: 2.75rem;
      }
      img{
        width: 1rem;
        height: 1rem;
        margin-right: 0.25rem;
      }
      .publish_box{
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
  }
  .center{
    text-align: center;
  }
  .more{
    margin-top: 3.75rem;
    width: 12.5rem;
    height: 4.125rem;
    border-radius: 2.0625rem;
    border: 0.125rem solid #111;
    font-weight: 500;
    font-size: 1.5rem;
    color: #111;
    line-height: 1.5rem;
    transition: .3s;
    background: transparent;
    &:hover{
      background: #111;
      color: #F5B81A;
    }
  }
}
</style>