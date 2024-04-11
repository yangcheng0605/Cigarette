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
            <a href="/"><img src="https://cdn.shopifycdn.net/s/files/1/0584/6709/0582/files/5c1c18adb65c7850c0e95c123d529df6.png"></a>
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
                <img src="https://cdn.shopify.com/s/files/1/0584/6709/0582/files/c612623eecd5d6caf43cc565792f8830.png?v=1708911022">
                <div>
                  <a-select
                    v-model:value="lang_itemp"
                    ref="select"
                    style="width: 120px"
                    :bordered="false"
                    :showArrow="false"
                  >
                    <a-select-option value="en">English</a-select-option>
                  </a-select>
                </div>
              </div>
            </div>
          </div>
          <div class="main_mask" :class="popIndex||popIndex===0?'main_mask_show':''"></div>
          <div class="main_popup1 main_popup" :class="popIndex == 0?'main_popup_show':''" @mouseleave="leaveTo">
            <div class="mp_nav">
              <div @mouseover="proHoverTo(index)" v-for="(item, index) in mpList" :key="index" :class="index == proIndex?'mp_nav_hover':''">{{index == proIndex?'&gt;':''}} {{item.name}}</div>
            </div>
            <div class="mp_content">
              <div class="mp_product">
                <div class="mp_items">
                  <div class="mp_item" v-for="(item, index) in mpList[proIndex].product" :key=index>
                    <a :href="item.path">
                      <div class="mp_img">
                        <img :src="item.imgurl">
                      </div>
                      <span>{{item.name}}</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="mp_product">
                <div class="mp_items">
                  <div class="mp_item">
                    <a href="/pages/magic-maze-pro">
                      <div class="mp_img">
                        <img src="//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-MAZE_PRO.png?v=1709796749">
                      </div>
                      <span>MAGIC MAZE PRO</span>
                    </a>
                  </div>
                  
                  <div class="mp_item">
                    <a href="/pages/mini">
                      <div class="mp_img">
                        <img src="//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-MINI_ddd64a2d-b600-4507-8edf-ed99344cf8d1.png?v=1709792444">
                      </div>
                      <span>MINI</span>
                    </a>
                  </div>
                  
                  <div class="mp_item">
                    <a href="/pages/g8000">
                      <div class="mp_img">
                        <img src="//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-G8000_6e956cb2-e862-440d-a8b3-662ec4eb0a09.png?v=1709792444">
                      </div>
                      <span>G8000</span>
                    </a>
                  </div>
                  
                  <div class="mp_item">
                    <a href="/pages/c800">
                      <div class="mp_img">
                        <img src="//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-C800_5d13c649-52d8-446a-b7ad-2a3f21c8a250.png?v=1709792444">
                      </div>
                      <span>C800</span>
                    </a>
                  </div>
                  
                </div>
              </div>
              <div class="mp_product">
                <div class="mp_items">
                  
                      
                  <div class="mp_item">
                    <a href="/pages/rrd">
                      <div class="mp_img">
                        <img src="//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-RRD.png?v=1709796749">
                      </div>
                      <span>RRD</span>
                    </a>
                  </div>
                  
                  <div class="mp_item">
                    <a href="/pages/rrd">
                      <div class="mp_img">
                        <img src="//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-RRD_TPD.png?v=1708915759">
                      </div>
                      <span>RRD(TPD)</span>
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
            <div class="mp_more">
              <a href="/#/products">Learn more &gt;</a>
            </div>
          </div>
          <div class="main_popup2 main_popup" :class="popIndex == 1?'main_popup_show':''" @mouseleave="leaveTo">
            <div class="mainex">
              <a class="maex_nav" href="/pages/wholesaler?id=0"><div>BECOME A WHOLESALE</div></a>
              
              <a class="maex_nav" href="/pages/wholesaler?id=1"><div>GET FREE SAMPLE</div></a>
              
              <a class="maex_nav" href="/pages/wholesaler?id=2"><div>FREE PROMOTIONAL MATERIALS</div></a>
              
            </div>
          </div>
          <div class="main_popup3 main_popup" :class="popIndex == 2?'main_popup_show':''" @mouseleave="leaveTo">
            <div class="mainex">
              
                  
              <a class="maex_nav" href="/pages/support?id=0"><div>CONTACT US</div></a>
              
              <a class="maex_nav" href="/pages/support?id=1"><div>PRODUCT VERIFICATION</div></a>
              
              <a class="maex_nav" href="/pages/support?id=2"><div>FAQ</div></a>
              
            </div>
          </div>
          <div class="main_popup4 main_popup" :class="popIndex == 3?'main_popup_show':''" @mouseleave="leaveTo">
            <div class="mainex">
              <a class="maex_nav" href="/pages/blog?id=0"><div>CONTACT</div></a>
            </div>
          </div>
          <div class="main_popup5 main_popup" :class="popIndex == 4?'main_popup_show':''" @mouseleave="leaveTo">
            <div class="mainex">
              <a class="maex_nav" href="/pages/blog?id=0"><div>ABOUT</div></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-only">
        <div class="main" >
          <div :class="['main_Mright', show?'Mright_active':'']" @click="targetShowNav">
            <div class="Mright_line" :style="{ background: show?'transparent':'#000'}" ></div>
          </div>
          <div class="main_center">
            <a href="/"><img src="https://cdn.shopifycdn.net/s/files/1/0584/6709/0582/files/5c1c18adb65c7850c0e95c123d529df6.png"></a>
          </div>
          <div class="main_left"></div>
          <div :class="['Main_popup', show?'Main_popup_active':'']">
            <div class="Main_item">
              <a-collapse  ghost accordion>
                <a-collapse-panel class="Mnav" key="1" header="HOME" :show-arrow="false">
                  <template #extra><PlusOutlined /></template>
                  <div class="Mnav_link">
                    <a href="/pages/contact">HOME</a>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel class="Mnav" key="2" header="PRODUCTS" :show-arrow="false">
                  <template #extra><PlusOutlined /></template>
                  <div class="Mnav_link">
                    <a href="/pages/products">ALL</a>
                    <a href="/pages/magic-maze-pro">MAGIC MAZE PRO</a>
                    <a href="/pages/mini">MINI &amp; MINI 2200</a>
                    <a href="/pages/g8000-pro">G8000 PRO</a>
                    <a href="/pages/r8000">R8000</a>
                    <a href="/pages/g8000">G8000</a>
                    <a href="/pages/rrd">RRD</a>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel class="Mnav" key="3" header="WHOLESALE" :show-arrow="false">
                  <template #extra><PlusOutlined /></template>
                  <div class="Mnav_link">
                    <a href="/pages/wholesaler?id=0">BECOME A WHOLESALE</a>
                    <a href="/pages/wholesaler?id=1">GET FREE SAMPLE</a>
                    <a href="/pages/wholesaler?id=2">FREE PROMOTIONAL MATERIALS</a>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel class="Mnav" key="3" header="CONTACT US" :show-arrow="false">
                  <template #extra><PlusOutlined /></template>
                  <div class="Mnav_link">
                    <a href="/pages/contact">CONTACT US</a>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel class="Mnav" key="3" header="ABOUT US" :show-arrow="false">
                  <template #extra><PlusOutlined /></template>
                  <div class="Mnav_link">
                    <a href="/pages/about">ABOUT US</a>
                  </div>
                </a-collapse-panel>
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
        {name: 'WHOLESALE', path: '/wholesaler', active: false},
        {name: 'CONTACT US', path: '/contact', active: false},
        {name: 'ABOUT US', path: '/about', active: false},
      ],
      mpIndex: 0,
      proIndex: 0,
      mpList: [
        {name: 'ALL', product:[
          { name: 'MAGIC MAZE PRO',  path : '/pages/magic-maze-pro', imgurl: '//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-MAZE_PRO.png?v=1709796749'},
          { name: 'MINI',  path : '/pages/mini', imgurl: '//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-MINI_ddd64a2d-b600-4507-8edf-ed99344cf8d1.png?v=1709792444'},
          { name: 'MINI 2200',  path : '/pages/mini', imgurl: '//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-MINI_2200_dd76599c-096d-4f23-9ea7-34dec90b3cbe.png?v=1709792444'},
          { name: 'G8000 PRO',  path : '/pages/g8000-pro', imgurl: '//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-G8000_PRO.png?v=1708914584'},
          { name: 'G8000',  path : '/pages/g8000-pro', imgurl: '//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-G8000_6e956cb2-e862-440d-a8b3-662ec4eb0a09.png?v=1709792444'},
        ]},
        {name: 'DISPOSABLE', product:[

          { name: 'MAGIC MAZE PRO',  path : '/pages/magic-maze-pro', imgurl: '//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-MAZE_PRO.png?v=1709796749'},
          { name: 'G8000 PRO',  path : '/pages/g8000-pro', imgurl: '//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-G8000_PRO.png?v=1708914584'},
          { name: 'G8000',  path : '/pages/g8000-pro', imgurl: '//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-G8000_6e956cb2-e862-440d-a8b3-662ec4eb0a09.png?v=1709792444'},
        ]},
        {name: 'REFILLABLE', product:[
          { name: 'MINI',  path : '/pages/mini', imgurl: '//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-MINI_ddd64a2d-b600-4507-8edf-ed99344cf8d1.png?v=1709792444'},
          { name: 'MINI 2200',  path : '/pages/mini', imgurl: '//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-MINI_2200_dd76599c-096d-4f23-9ea7-34dec90b3cbe.png?v=1709792444'},
          { name: 'MAGIC MAZE PRO',  path : '/pages/magic-maze-pro', imgurl: '//www.oxbar.com/cdn/shop/files/2024-_-_-594x636-MAZE_PRO.png?v=1709796749'},
        ]}
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
          console.log(item.path, path)
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
