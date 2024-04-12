<template>
  <div class="about">
    <div class="banner1">
      <div class="Desktop_swiper">
        <div class="homeSwiper swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress swiper-backface-hidden">
          <swiper
            :slides-per-view="3"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { nextTick, onMounted, reactive, toRefs } from 'vue';

  export default {
    name: "home",
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const state = reactive({
      })

      onMounted(async () => { 
        nextTick(() => {
        })
      })

      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        ...toRefs(state),
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>