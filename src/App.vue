<template>
  <nav>
    <Header></Header>
    <main class="wrapper">
      <div id="shopify-section-home" class="shopify-section">
        <div class="homepage">
          <router-view />
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
          <div class="box1">
            内容1
            <div class="wow animate__rubberBand" data-wow-offset="100">显示1</div>
          </div>
          <div class="box2">
            内容2
            <div class="wow animate__rubberBand" data-wow-offset="100">显示2</div>
          </div>
          <div class="box3">
            内容3
            <div class="wow animate__rubberBand" data-wow-offset="100">显示3</div>
          </div>
          <div class="box4">
            内容4
            <div class="wow animate__backInDown" data-wow-offset="100">显示4</div>
          </div>
          <div class="box5">
            内容5
            <div class="wow animate__backInLeft" data-wow-offset="100">显示5</div>
          </div>
          <div class="box6">
            内容
            <div class="wow animate__backInRight" data-wow-offset="100">显示6</div>
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </nav>
</template>
<script>
  import { defineComponent, getCurrentInstance, nextTick, onMounted, reactive, toRefs } from "vue";
  import Header from "@/layout/Header.vue";
  import Footer from "@/layout/Footer.vue";
  import "@/assets/style/home.less"
  export default defineComponent({
    components: {
      Header,
      Footer
    },
    props: {
      modalParam: {
        type: Object,
        default: () => { return {} },
      },
    },
    setup() {
      const { proxy } = getCurrentInstance();
      onMounted(async () => {
        // nextTick(() => {
        //   console.log(proxy.$wow.WOW())
        //   // proxy.$wow.WOW().init();
        // })
        var wow = new proxy.$wow.WOW({boxClass: "wow", // animated element css class (default is wow)
            animateClass: "animated", // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function () {
            },
            scrollContainer: null, // optional scroll container selector, otherwise use window,
            resetAnimation: true, // reset animation on end (default is true)
          }
        )
        wow.init()
        console.log()
      })
      const state = reactive({
      })
      return {
        ...toRefs(state),
      }
    }
  });
</script>
<style lang="less">

</style>
