<template>
  <div class="home">
    <div class="banner1">
      <div class="Desktop_swiper">
        <div class="homeSwiper">
          <div class="swiper_box">
            <swiper
              :navigation="true"
              @swiper="onSwiper"
              :effect="'fade'"
              :modules="[EffectFade, Navigation]"
            >
              <swiper-slide v-for="(item) in (isMobile ? mobilebannerList:bannerList)" :key="item.id">
                <div class="home_banner">
                  <img :src="item.url" alt="">
                </div>
              </swiper-slide>
            </swiper>
            <div class="home_sildePre" @click="sildePre(1)">
            </div>
            <div class="home_sildeNext" @click="sildeNext(1)">
            </div>
          </div>
        </div>
        <div class="home_block home_center">
          <div class="home_tag"><img src="@/assets/img/home/tag.png" alt=""></div>
          <div class="homt_pros">
            <p class="title AntonFont wow animate__fadeInLeft" data-wow-offset="50">Our Recommendations</p>
             <div class="home_tab wow animate__fadeInLeft" data-wow-offset="50">
              <a-tabs v-model:activeKey="activeKey">
                <a-tab-pane :key="1" tab="Our Recommendations"></a-tab-pane>
                <a-tab-pane :key="2" tab="New"></a-tab-pane>
                <a-tab-pane :key="3" tab="Disposable"></a-tab-pane>
                <a-tab-pane :key="4" tab="Pod Series"></a-tab-pane>
                <a-tab-pane :key="5" tab="E-liquid"></a-tab-pane>
              </a-tabs>
            </div>
          </div>
            <!-- <div class="wow animate__rubberBand" data-wow-offset="50">显示1</div> -->
          <div class="swiper_box wow animate__slideInUp" data-wow-offset="50">
            <swiper
              :slides-per-view="perView"
              :space-between="between"
              :navigation="true"
              @swiper="onSwiper2"
            >
              <swiper-slide v-for="(item) in otherProList" :key="item.id">
                <div class="hoverBox proImg" @click="linkTo(item)">
                  <img class="hoverImg" :src="item.url" alt="">
                </div>
              </swiper-slide>
            </swiper>
            <div class="home_sildePre" @click="sildePre(2)">
            </div>
            <div class="home_sildeNext" @click="sildeNext(2)">
            </div>
          </div>
        </div>
        <div class="home_block home_bottom">
          <div class="home_b_top">
            <p class="title AntonFont wow animate__fadeInLeft" data-wow-offset="50">EHONOS Live</p>
            <div class="wow animate__fadeInRight" data-wow-offset="50"><img src="@/assets/img/live.png" alt=""></div>
          </div>
          <div class="home_imgs">
            <div class="home_imgs_left">
              <div class="imgs_lr">
                <div class="home_img_s hoverBox wow animate__fadeInTopLeft" data-wow-offset="50">
                  <img class="hoverImg" src="@/assets/img/home/live_4.png" alt="">
                  <p class="img_text AntonFont">Text content</p>
                </div>
                <div class="home_img_r hoverBox wow animate__fadeInTopRight" data-wow-offset="50">
                  <img class="hoverImg" src="@/assets/img/home/live_2.png" alt="">
                  <p class="img_text AntonFont">Text content</p>
                </div>
              </div>
              <div class="imgs_rl">
                <div class="home_img_r hoverBox wow animate__fadeInBottomLeft " data-wow-offset="50">
                  <img class="hoverImg" src="@/assets/img/home/live_3.png" alt="">
                  <p class="img_text AntonFont">Text content</p>
                </div>
                <div class="home_img_s hoverBox wow animate__fadeInBottomRight" data-wow-offset="50">
                  <img class="hoverImg" src="@/assets/img/home/live_4.png" alt="">
                  <p class="img_text AntonFont">Text content</p>
                </div>
              </div>
            </div>
            <div class="home_imgs_right hoverBox wow animate__bounceInRight"  data-wow-offset="50" data-wow-delay='.2s'>
              <img class="hoverImg" src="@/assets/img/home/live_5.png" alt="">
               <p class="img_text AntonFont">Text content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation } from 'swiper/modules';
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs } from 'vue';
import 'swiper/css/navigation';
import 'swiper/css';
import { useRouter } from 'vue-router';

  export default {
    name: "home",
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const router = useRouter()
      const { proxy } = getCurrentInstance();
      const state = reactive({
        EffectFade,
        Navigation,
        activeKey: 1,
        perView: 4,
        between: 40,
        swiper1: null,
        swiper2: null,
        isMobile: false,
        bannerList: [
          { id: 1, url:require('@/assets/img/home/banner.png')},
          { id: 2, url:require('@/assets/img/home/banner.png')},
          { id: 3, url:require('@/assets/img/home/banner.png')},
        ],
        mobilebannerList: [
          { id: 1, url:require('@/assets/img/home/m_banner.png')},
          { id: 2, url:require('@/assets/img/home/m_banner.png')},
          { id: 3, url:require('@/assets/img/home/m_banner.png')},
        ],
         otherProList: [
          { id: 1, name: 'GT501', url:require('@/assets/img/product/pro_11.png')},
          { id: 2, name: 'GT502', url:require('@/assets/img/product/pro_22.png')},
          { id: 3, name: 'GT503', url:require('@/assets/img/product/pro_3.png')},
          { id: 4, name: 'GT504', url:require('@/assets/img/product/pro_4.png')},
          { id: 5, name: 'GT505', url:require('@/assets/img/product/pro_5.png')},
          { id: 6, name: 'GT506', url:require('@/assets/img/product/pro_11.png')},
        ],
      })
      onMounted(async () => { 
        nextTick(() => {
           var wow = new proxy.$wow.WOW({boxClass: "wow",
               animateClass: "animated", 
               offset: 0, 
               mobile: true,
               live: true,
               callback: function () {
               },
               scrollContainer: null,
               resetAnimation: true,
             }
           )
           wow.init()
        })
        handleResize();
        window.addEventListener('resize', handleResize);
      })
      const handleResize = () => {
        const windowWidth = window.innerWidth;
       if (windowWidth < 750) {
         state.between = 15
         state.perView = 'auto'
         state.isMobile = true
        } else {
          state.between = 40
          state.perView = 4
          state.isMobile = false
        }
      };
      const onSwiper = (swiper) => {
        state.swiper1 = swiper
      };
      const onSwiper2 = (swiper) => {
        state.swiper2 = swiper
      };
      const linkTo = (res) => {
        router.push('/productsDetail?id=' + res.id);
      };
      const sildePre = (e) => {
        state[`swiper${e}`].slidePrev(500, res=>{
        })
      };
      const sildeNext = (e) => {
        state[`swiper${e}`].slideNext(500, res=>{
        })
      };
      return {
        ...toRefs(state),
        onSwiper,
        onSwiper2,
        linkTo,
        sildePre,
        sildeNext,
      };
    },
  };
</script>
<style lang="less" >
.home{
  .home_block{
    .home_tag{
      width: 12.5rem;
      position: absolute;
      right: 7.5rem;
      top: -6.25rem;
      z-index: 10;
      animation: home_rotate 10s linear infinite ;
    }
    .homt_pros{
      .title{
        line-height: 2.5rem;
      }
      .home_tab{
        margin: .812rem 0 3.75rem;
        .ant-tabs-nav{
          margin: 0;
          &::before{
            border: none;
          }
        }
        .ant-tabs-nav-wrap{
          padding: 0;
        }
        .ant-tabs-tab{
          padding: 9px 0;
          font-weight: 500;
          color: #111 !important;
          .ant-tabs-tab-btn{
            letter-spacing: 0;
          }
          .ant-tabs-tab-btn:hover,
          .ant-tabs-tab-btn:focus{
            color: #111;
          }
        }
        .ant-tabs-tab-active .ant-tabs-tab-btn{
          color: #111 !important;
          text-shadow: none;
        }
        .ant-tabs-ink-bar{
          background: #111 !important;
        }
      }
    }
  }
  
  .swiper_box{
    position: relative;
    .home_sildePre, .home_sildeNext {
      width: 2.5rem;
      height: 2.5rem;
      position: absolute;
      z-index: 2;
      cursor: pointer;
    }
    .home_sildePre{
      background: url('../../assets/img/arrow_white_l.png') no-repeat 100%/contain;
    }
    .home_sildeNext{
      background: url('../../assets/img/arrow_white_r.png') no-repeat 100%/contain;
    }
  }
  .homeSwiper{
    .swiper_box {
      .home_sildePre, .home_sildeNext {
        bottom: 11rem;
      }
      .home_sildePre{
        left: 7.5rem;
      }
      .home_sildeNext{
        left: 12.5rem;
      }
      .home_sildePre:hover{
      background: url('../../assets/img/arrow_yellow_l.png') no-repeat 100%/contain;
      }
      .home_sildeNext:hover{
        background: url('../../assets/img/arrow_yellow_r.png') no-repeat 100%/contain;
      }
    }
  }
  .home_center{
    .swiper_box {
      .home_sildePre, .home_sildeNext {
        top: 50%;
      }
      .home_sildePre{
        left: -5rem;
      }
      .home_sildeNext{
        right: -5rem;
      }
    }
    .home_sildePre{
      background: url('../../assets/img/arrow_l.png') no-repeat 100%/contain;
    }
    .home_sildeNext{
      background: url('../../assets/img/arrow_r.png') no-repeat 100%/contain;
    }
  }
  .title{
    color: #111;
    font-size: 2.5rem;
  }
  .home_center{
    background: #F5B81A url('../../assets/img/home/yellow_bg.png') no-repeat 100% / cover;
    position: relative;
    padding: 6.25rem 15rem 6.75rem;
    .proImg{
      height: 27.5rem;
      border-radius: 8px;
      background: url('../../assets/img/product/bg_r.png') no-repeat 100% / cover;
      img{
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .home_bottom{
    background: #FEF8E8;
    padding: 6.25rem 15rem 7.5rem;
    .home_b_top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3.75rem;
      .title{
        line-height: 2.5rem;
      }
      img{
        width: 8.375rem;
      }
    }
    .home_imgs{
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 2rem;
      .home_imgs_left{
        height: 37.5rem;
      }
      .home_imgs_right{
        border-radius: 8px;
        width: 25rem;
        height: 37.5rem;
        margin-left: 2.5rem;
        flex-shrink: 0;
        position: relative;
        background: linear-gradient(225deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      }
    }
    .imgs_lr,.imgs_rl{
      display: flex;
      position: relative;
      img{
        height: 17.5rem;
      }
      .home_img_s,.home_img_r{
        border-radius: 8px;
        background: linear-gradient(225deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      }
    }
    .hoverBox {
      position: relative;
      .img_text {
        position: absolute;
        left: 1.875rem;
        bottom: 1.5rem;
        line-height: 2.5rem;
      }
    }
    .imgs_lr{
      margin-bottom: 2.5rem;
      .home_img_s{
        margin-right: 2.5rem;
      }
    }
    .imgs_rl{
      .home_img_r{
        margin-right: 2.5rem;
      }
    }
  }
  @keyframes home_rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>