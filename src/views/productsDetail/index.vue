<template>
  <div class="products productsDetail">
    <div class="proImg" >
      <img :src="isMobile?proData.mobilebanner:proData.banner" alt="">
    </div>
    <div class="proImg" v-for="(item, index) in (isMobile?proData.mobileimgs:proData.imgs)" :key='index'>
      <img :src="item" alt="">
    </div>
    <div class="other_pro">
      <p class="title AntonFont wow animate__fadeInUp" data-wow-offset="50">Other Product Recommendations</p>
      <div class="swiper_box wow animate__fadeInUp" data-wow-offset="50">
        <swiper
          :slides-per-view="perView"
          :space-between="between"
          :navigation="true"
          :modules="modules" 
          @swiper="onSwiper"
        >
          <swiper-slide v-for="(item) in otherProList" :key="item.id">
            <div class="products_list" @click="linkTo(item)">
              <div class="hoverBox proImg">
                <img class="hoverImg" :src="item.url" alt="">
              </div>
              <div class="p_text">
                <p class="p_name">{{item.name}}</p>
                <p class="p_hint">{{item.info}}</p>
                <p class="p_learn smallArrow_box">
                  <span>Learn more</span><img class="smallArrow" src="@/assets/img/arrow_white_r_small.png" alt="">
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="custom_sildePre" @click="sildePre">
        </div>
        <div class="custom_sildeNext" @click="sildeNext">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, onMounted, nextTick, reactive, toRefs, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

  export default {
    components:{
      Swiper,
      SwiperSlide
    },
    setup() {
      const route = useRoute()
      const router = useRouter()
      const { proxy } = getCurrentInstance();
      const state = reactive({
        id: '',
        perView: 2,
        between: 30,
        modules: [Navigation],
        swiper: null,
        isMobile: false,
        otherProList: [
          { id: 1, name: 'GT501', url:require('@/assets/img/product/pro_11.png'), info:'Beauty and Beast Performance 65ast Performanast Performan0mAh and 8000 puffs yeah bro',},
          { id: 2, name: 'GT502', url:require('@/assets/img/product/pro_22.png'), info:'Beauty and 0 ',},
          { id: 3, name: 'GT503', url:require('@/assets/img/product/pro_3.png'), info:'Beauty and Beast Performance 650mAh and 8000 puffs yeah bro',},
          { id: 4, name: 'GT504', url:require('@/assets/img/product/pro_4.png'), info:'Beauty and Beast Performance 650mAh and 8000 puffs',},
          { id: 5, name: 'GT505', url:require('@/assets/img/product/pro_5.png'), info:'Beauty and 00 puffs yeah',},
          { id: 6, name: 'GT506', url:require('@/assets/img/product/pro_11.png'), info:'Beauty and Beast Performance',},
        ],
        proData: {
          id: 1, 
          name: 'GT501', 
          banner: require('@/assets/img/product/banner.png'),
          mobilebanner: require('@/assets/img/product/m_pro_banner.png'),
          imgs:[
            require('@/assets/img/product/pro_detail_2.png'),
            require('@/assets/img/product/pro_detail_3.png'),
            require('@/assets/img/product/pro_detail_4.png'),
          ],
          mobileimgs:[
            require('@/assets/img/product/pro_detail_2.png'),
            require('@/assets/img/product/pro_detail_3.png'),
            require('@/assets/img/product/pro_detail_4.png'),
          ],
          url: require('@/assets/img/product/pro_11.png'), 
          info:'Beauty and Beast Performance 65ast Performanast Performan0mAh and 8000 puffs yeah bro'
        }
      })

      onMounted(async () => { 
        handleResize();
        window.addEventListener('resize', handleResize);
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
      })
       const handleResize = () => {
        const windowWidth = window.innerWidth;
       if (windowWidth < 750) {
         state.between = 15
         state.perView = 'auto'
         state.isMobile = true
        } else {
          state.between = 30
          state.perView = 5
          state.isMobile = false
        }
      };
      const onSwiper = (swiper) => {
        state.swiper = swiper
      };
      const linkTo = (res) => {
        router.push('/productsDetail?id=' + res.id);
      };
      const sildePre = () => {
        state.swiper.slidePrev(500, res=>{
          console.log(res)
        })
      };
      const sildeNext = () => {
        state.swiper.slideNext(500, res=>{
          console.log(res)
        })
      };
      watch(route, (e) => {
        const query = e.query
        state.id = parseInt(query.id) || null;
      }, { immediate: true })
      return {
        ...toRefs(state),
        onSwiper,
        linkTo,
        sildePre,
        sildeNext,
      };
    },
  };
</script>
<style lang="less">
.productsDetail{
  .proImg{
    margin-bottom: 1rem;
    img{
      // height: 100vh;
    }
  }
  .other_pro{
    padding: 6.25rem 15rem;
    background: linear-gradient( 180deg, #111111 0%, #333333 100%);
    .proImg{
      height: 16.5rem;
      img{
        height: 100%;
      }
    }
    .title{
      text-align: center;
      font-size: 3rem;
      line-height: 3rem;
      color: #fff;
      margin-bottom: 3.75rem;
    }
  }
  .swiper_box{
    position: relative;
    .custom_sildePre,.custom_sildeNext {
      width: 2.5rem;
      height: 2.5rem;
      position: absolute;
      top: 25%;
      cursor: pointer;
    }
    .custom_sildePre{
      left: -5rem;
      background: url('../../assets/img/arrow_white_l.png') no-repeat 100%/contain;
    }
    .custom_sildeNext{
      right: -5rem;
      background: url('../../assets/img/arrow_white_r.png') no-repeat 100%/contain;
    }
    .custom_sildePre:hover{
      background: url('../../assets/img/arrow_yellow_l.png') no-repeat 100%/contain;
    }
    .custom_sildeNext:hover{
      background: url('../../assets/img/arrow_yellow_r.png') no-repeat 100%/contain;
    }
  }
}
</style>