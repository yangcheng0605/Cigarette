<template>
  <div class="about">
    <div class="top_banner2">
      <img src="@/assets/img/about/wholesale_banner.png" alt="">
      <div class="t_box">
        <p style="font-size: 1.5rem;">BECOME A WHOLESALER</p>
        <p  class="title AntonFont">How can we help you?</p>
        <p style="font-size: .875rem;">Please check  the sections below related to your inquiry</p>
      </div>
    </div> 
    <div class="a_content">
      <a-row :gutter="30">
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box hoverBox">
          <img class="hoverImg" src="@/assets/img/about/img_1.png" alt="">
          <div class="a_text">
            <p class="a_title AntonFont">Support</p>
            <p class="a_title AntonFont">Customer Service</p>
            <p class="a_email">support@ehonos.com</p>
          </div>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box hoverBox">
          <img class="hoverImg" src="@/assets/img/about/img_2.png" alt="">
          <div class="a_text">
            <p class="a_title AntonFont">Sales Become</p>
            <p class="a_title AntonFont">an Authorized</p>
            <p class="a_title AntonFont">Distributor</p>
            <p class="a_email">support@ehonos.com</p>
          </div>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box hoverBox">
          <img class="hoverImg" src="@/assets/img/about/img_3.png" alt="">
          <div class="a_text">
            <p class="a_title AntonFont">Marketing</p>
            <p class="a_title AntonFont">Co-Marketing</p>
            <p class="a_title AntonFont">Cooperation</p>
            <p class="a_email">support@ehonos.com</p>
          </div>
        </div>
      </a-col>
    </a-row>
    </div>
  </div>
</template>
<script>
import { nextTick, onMounted, reactive, toRefs } from 'vue';
  export default {
    name: "wholesale",
    components: {
    },
    setup() {
      const state = reactive({
      })
      onMounted(async () => { 
        nextTick(() => {
        })
      })

      // const onSwiper = (swiper) => {
      //   console.log(swiper);
      // };
      return {
        ...toRefs(state),
      };
    },
  };
</script>