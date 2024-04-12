<template>
  <div class="about">
    <div class="top_banner2">
      <img src="@/assets/img/about/about_banner.png" alt="">
      <div class="t_box">
        <p class="title AntonFont">WHY EHONOS</p>
      </div>
    </div> 
    <div class="a_content">
      123
    </div>
  </div>
</template>
<script>
import { nextTick, onMounted, reactive, toRefs } from 'vue';
  export default {
    name: "about",
    components: {
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