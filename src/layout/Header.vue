<template>
  <div class="shopify-section-header">
    <div class="header">
      <div class="warning">
        <div class="warning_move warning_move1">
          <div><span>WARNING: </span>This product contains nicotine. Nicotine is an addictive chemical.</div>
          <div class="desktop-only">Only for adults, MINORS are prohibited from buying e-cigarette</div>
        </div>
        <div class="warning_move warning_move2">
          <div><span>WARNING: </span>This product contains nicotine. Nicotine is an addictive chemical.</div>
          <div>Only for adults, MINORS are prohibited from buying e-cigarette</div>
        </div>
      </div>
      <div class="desktop-only">
        <div class="main">
          <div class="main_left">
            <a href="/"><img src="@/assets/img/logo_black.png"></a>
          </div>
          <div class="main_center">
            <!-- <img src="https://cdn.shopify.com/s/files/1/0584/6709/0582/files/LOGO_ef84e310-cf14-4332-84b8-9289cc9bcf8e.png?v=1708911023"> -->
            <div class="nav">
              <span :href="item.path" :class="item.active?'nav_active':''" v-for="(item, index) in navList" :key="item.name" @click="linkTo(item)" @mouseover="hoverTo(index)" >{{ item.name }}</span>
            </div>
          </div>
          <div class="main_right">
            <div class="mr_right">
              <div class="language">
                <img src="@/assets/img/lang.png">
                <div>
                  <a-select
                    v-model:value="lang_itemp"
                    ref="select"
                    style="width: 80px"
                    :bordered="false"
                    :dropdownMatchSelectWidth="false"
                    :showArrow="false"
                  >
                    <a-select-option value="en">English</a-select-option>
                  </a-select>
                </div>
              </div>
            </div>
          </div>
          <div class="main_mask" :class="popIndex===1?'main_mask_show':''" @mouseover="leaveTo"></div>
          <div class="main_popup1 main_popup" :class="popIndex == 1?'main_popup_show':''" @mouseleave="leaveTo">
            <div class="mp_nav">
              <div @mouseover="proHoverTo(index)" v-for="(item, index) in mpType" :key="index" :class="index == proIndex?'mp_nav_hover':''">{{index == proIndex?'&gt;':''}} {{item.name}}</div>
            </div>
            <div class="mp_content">
              <div class="mp_product">
                <div class="mp_items" v-if="mpList[proIndex] && mpList[proIndex].length>0">
                  <div class="mp_item" v-for="(item, index) in mpList[proIndex] || []" :key=index>
                    <a :href="item.path" >
                      <div class="mp_img">
                        <img :src="item.imgurl">
                      </div>
                      <span>{{item.name}}</span>
                    </a>
                  </div>
                </div>
                <a-empty :image="Empty.PRESENTED_IMAGE_SIMPLE" v-else />
              </div>
            </div>
            <div class="mp_more">
              <a href="/#/products">Learn more &gt;</a>
            </div>
          </div>
          <!-- <div class="main_popup2 main_popup" :class="popIndex == 1?'main_popup_show':''" @mouseleave="leaveTo">
            <div class="mainex">
              <a class="maex_nav" href="/#/wholesale?id=0"><div>BECOME A WHOLESALE</div></a>
              
              <a class="maex_nav" href="/#/wholesale?id=1"><div>GET FREE SAMPLE</div></a>
              
              <a class="maex_nav" href="/#/wholesale?id=2"><div>FREE PROMOTIONAL MATERIALS</div></a>
              
            </div>
          </div>
          <div class="main_popup3 main_popup" :class="popIndex == 2?'main_popup_show':''" @mouseleave="leaveTo">
            <div class="mainex">
              
                  
              <a class="maex_nav" href="/#/support?id=0"><div>CONTACT US</div></a>
              
              <a class="maex_nav" href="/#/support?id=1"><div>PRODUCT VERIFICATION</div></a>
              
              <a class="maex_nav" href="/#/support?id=2"><div>FAQ</div></a>
              
            </div>
          </div>
          <div class="main_popup4 main_popup" :class="popIndex == 3?'main_popup_show':''" @mouseleave="leaveTo">
            <div class="mainex">
              <a class="maex_nav" href="/#/blog?id=0"><div>CONTACT</div></a>
            </div>
          </div>
          <div class="main_popup5 main_popup" :class="popIndex == 4?'main_popup_show':''" @mouseleave="leaveTo">
            <div class="mainex">
              <a class="maex_nav" href="/#/blog?id=0"><div>ABOUT</div></a>
            </div>
          </div> -->
        </div>
      </div>
      <div class="mobile-only">
        <div class="main" >
          <div class="main_center">
            <a href="/"><img src="@/assets/img/logo_black.png"></a>
          </div>
          <div :class="['main_Mright', show?'Mright_active':'']" @click="targetShowNav">
            <div class="Mright_line" :style="{ background: show?'transparent':'#000'}" ></div>
          </div>
          <div :class="['Main_popup', show?'Main_popup_active':'']">
            <div class="Main_item">
              <a-collapse  ghost accordion>
                <p class="Mnav" >
                  <a href="/">
                    HOME
                  </a>
                </p>
                <a-collapse-panel class="Mnav" key="2" header="PRODUCTS" :show-arrow="false">
                  <template #extra><PlusOutlined /></template>
                  <div class="Mnav_link">
                    <a href="/#/products">New Arrivais</a>
                    <a href="/#/magic-maze-pro">Disposable Series</a>
                    <a href="/#/mini">E-liquid</a>
                    <a href="/#/g8000-pro">Coil</a>
                    <a href="/#/r8000">Other</a>
                  </div>
                </a-collapse-panel>
                <p class="Mnav" >
                  <a href="/#/wholesale">
                    WHOLESALE
                  </a>
                </p>
                <p class="Mnav" >
                  <a href="/#/contact">
                  CONTACT US
                </a>
                </p>
                <p class="Mnav" >
                  <a href="/#/about">
                    ABOUT US
                  </a>
                </p>
              </a-collapse>
            </div>
          </div>
        </div>
	    </div>
    </div>
  </div>
</template>

<script>
import "@/assets/style/header.less"
import { nextTick, onMounted, reactive, ref, toRefs, watch } from 'vue';
import { PlusOutlined } from "@ant-design/icons-vue";
import { useRoute, useRouter } from 'vue-router';
import { Empty } from "ant-design-vue";
import Storage from '@/utils/storage';
import _ from 'lodash';
export default {
  name: "Header",
  components: {
    PlusOutlined
  },
  setup() {
    let router = useRouter();
    let route = useRoute();
    const state = reactive({
      lang_itemp: 'en',
      show: false,
      popIndex: null,
      navList: [
        {name: 'HOME', path: '/home', active: false},
        {name: 'PRODUCTS', path: '/products', active: false},
        {name: 'WHOLESALE', path: '/wholesale', active: false},
        {name: 'ABOUT US', path: '/about', active: false},
        {name: 'CONTACT US', path: '/contact', active: false},
      ],
      mpIndex: 0,
      proIndex: 0,
      mpType:[
        {name: 'New Arrivals'},
        {name: 'Disposable Series'},
        {name: 'Pod Series'},
        {name: 'E-liquid'},
        {name: 'Other'},
      ],
      mpList: [
        [
          { name: 'MAGIC MAZE PRO',  path : '/#/product?id=1', imgurl: require('../assets/img/product/pro_1.png')},
          { name: 'MINI',  path : '/#/product?id=2', imgurl: require('../assets/img/product/pro_2.png')},
          { name: 'MINI 2200',  path : '/#/product?id=3', imgurl: require('../assets/img/product/pro_3.png')},
          { name: 'G8000 PRO',  path : '/#/product?id=4', imgurl: require('../assets/img/product/pro_4.png')},
          { name: 'G8000',  path : '/#/product?id=5', imgurl: require('../assets/img/product/pro_5.png')},
        ],
        [

          { name: 'MAGIC MAZE PRO',  path : '/#/product?id=1', imgurl: require('../assets/img/product/pro_1.png')},
          { name: 'G8000 PRO',  path : '/#/product?id=4', imgurl: require('../assets/img/product/pro_4.png')},
          { name: 'G8000',  path : '/#/product?id=5', imgurl: require('../assets/img/product/pro_5.png')},
        ],
        [
          { name: 'MINI',  path : '/#/product?id=2', imgurl: require('../assets/img/product/pro_2.png')},
          { name: 'MINI 2200',  path : '/#/product?id=3', imgurl: require('../assets/img/product/pro_3.png')},
          { name: 'MAGIC MAZE PRO',  path : '/#/product?id=1', imgurl: require('../assets/img/product/pro_1.png')},
        ],
        [
          { name: 'MINI 2200',  path : '/#/product?id=3', imgurl: require('../assets/img/product/pro_3.png')},
          { name: 'MAGIC MAZE PRO',  path : '/#/product?id=1', imgurl: require('../assets/img/product/pro_1.png')},
        ]
      ]
    })
    onMounted(async () => { 
      nextTick(() => {
      })
    })

    const targetShowNav = () => {
      state.show = !state.show
    }
    const linkTo = (e) => {
      router.push({
        path: e.path
      });
      Storage.setItem('navActive', e.path)
    }
    const hoverTo = (e) => {
      state.popIndex = e
    }
    const proHoverTo = (e) => {
      state.proIndex = e
    }
    const leaveTo = (e) => {
      state.popIndex = null
      state.proIndex = 0
    }
    watch(route, (e) => {
     var path = e.fullPath
     if (Storage.getItem('navActive')) {
        state.navList = _.map(state.navList, item => {
          if (item.path === path) {
            item.active = true;
          } else {
            item.active = false;
          }
          return item;
        });
      }
    }, { immediate: true })
    return {
      Empty,
      ...toRefs(state),
      targetShowNav,
      linkTo,
      hoverTo,
      leaveTo,
      proHoverTo,
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
