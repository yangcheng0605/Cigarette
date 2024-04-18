<template>
  <div class="shopify-section-header">
    <div class="header">
      <div class="warning">
        <div class="warning_move warning_move1">
          <div><span>WARNING: </span>This product contains nicotine. Nicotine is an addictive chemical.　Only for adults, MINORS are prohibited from buying e-cigarette</div>
        </div>
        <div class="warning_move warning_move2">
          <div><span>WARNING: </span>This product contains nicotine. Nicotine is an addictive chemical.　Only for adults, MINORS are prohibited from buying e-cigarette</div>
        </div>
      </div>
      <div class="desktop-only">
        <div class="main">
          <div class="main_left">
            <a href="/#/"><img src="@/assets/img/logo_black.png"></a>
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
                  <div class="mp_item" v-for="(item, index) in mpList[proIndex] || []" :key=index @click="linkToPro(item)">
                    <a >
                      <div class="mp_img hoverBox">
                        <img class="hoverImg" :src="item.imgurl">
                      </div>
                      <span>{{item.name}}</span>
                    </a>
                  </div>
                </div>
                <a-empty :image="Empty.PRESENTED_IMAGE_SIMPLE" v-else />
              </div>
            </div>
            <div class="mp_more">
              <a href="/#/productss">Learn more &gt;</a>
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
            <a href="/#/"><img src="@/assets/img/logo_black.png"></a>
          </div>
          <div class="main_Mright" @click="targetShowNav">
            <img  v-if="show" src="@/assets/img/mb_nav_close.png" alt="">
            <img v-else src="@/assets/img/mb_nav.png" alt="">
          </div>
          <div :class="['Main_popup', show?'Main_popup_active':'']">
            <div class="Main_item">
              <a-collapse  ghost accordion>
                <p class="Mnav">
                  <a href="/#/" @click="show=false">
                    HOME
                  </a>
                </p>
                <a-collapse-panel class="Mnav" header="PRODUCTS" :show-arrow="false">
                  <template #extra><img class="headerExtra" src="@/assets/img/open_black.png" alt=""> </template>
                  <div class="Mnav_link">
                    <a-collapse ghost accordion>
                      <a-collapse-panel  header="New Arrivais" :show-arrow="false">
                        <template #extra> <img class="childExtra" src="@/assets/img/open_black_op.png" alt=""> </template>
                          <div class="Mnav_pro">
                            <a href="/#/productsDetail?type=1" @click="show=false">New Arrivais</a>
                            <a href="/#/productsDetail?type=2" @click="show=false">New Arrivais</a>
                            <a href="/#/productsDetail?type=3" @click="show=false">New Arrivais</a>
                          </div>
                      </a-collapse-panel>
                      <a-collapse-panel  header="Disposable Series" :show-arrow="false">
                        <template #extra> <img class="childExtra" src="@/assets/img/open_black_op.png" alt=""> </template>
                          <div class="Mnav_pro">
                            <a href="/#/productsDetail?type=1" @click="show=false">New Arrivais</a>
                            <a href="/#/productsDetail?type=2" @click="show=false">New Arrivais</a>
                            <a href="/#/productsDetail?type=3" @click="show=false">New Arrivais</a>
                          </div>
                      </a-collapse-panel>
                      <a-collapse-panel  header="Pod Series" :show-arrow="false">
                        <template #extra> <img class="childExtra" src="@/assets/img/open_black_op.png" alt=""> </template>
                          <div class="Mnav_pro">
                            <a href="/#/productsDetail?type=1" @click="show=false">New Arrivais</a>
                          </div>
                      </a-collapse-panel>
                      <a-collapse-panel  header="E-liquid" :show-arrow="false">
                        <template #extra> <img class="childExtra" src="@/assets/img/open_black_op.png" alt=""> </template>
                          <div class="Mnav_pro">
                            <a href="/#/productsDetail?type=1" @click="show=false">New Arrivais</a>
                            <a href="/#/productsDetail?type=2" @click="show=false">New Arrivais</a>
                          </div>
                      </a-collapse-panel>
                      <a-collapse-panel  header="Other" :show-arrow="false">
                        <template #extra> <img class="childExtra" src="@/assets/img/open_black_op.png" alt=""> </template>
                          <div class="Mnav_pro">
                            <a href="/#/productsDetail?type=1" @click="show=false">New Arrivais</a>
                          </div>
                      </a-collapse-panel>
                    </a-collapse>
                    <!-- <a href="/#/products?type=1" @click="show=false">New Arrivais</a>
                    <a href="/#/products?type=2" @click="show=false">Disposable Series</a>
                    <a href="/#/products?type=3" @click="show=false">Pod Series</a>
                    <a href="/#/products?type=4" @click="show=false">E-liquid</a>
                    <a href="/#/products?type=5" @click="show=false">Other</a> -->
                  </div>
                </a-collapse-panel>
                <p class="Mnav" >
                  <a href="/#/wholesale" @click="show=false">
                    WHOLESALE
                  </a>
                </p>
                <p class="Mnav" >
                  <a href="/#/contact" @click="show=false">
                  CONTACT US
                </a>
                </p>
                <p class="Mnav" >
                  <a href="/#/about" @click="show=false">
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
          { id: 1, name: 'MAGIC MAZE PRO',  path : '/#/products?id=1'},
          { id: 2, name: 'MINI',  path : '/#/products?id=2'},
          { id: 3, name: 'MINI 2200',  path : '/#/products?id=3'},
          { id: 4, name: 'G8000 PRO',  path : '/#/products?id=4'},
          { id: 5, name: 'G8000',  path : '/#/products?id=5'},
        ],
        [
          { id: 1, name: 'MAGIC MAZE PRO',  path : '/#/products?id=1'},
          { id: 4, name: 'G8000 PRO',  path : '/#/products?id=4'},
          { id: 5, name: 'G8000',  path : '/#/products?id=5'},
        ],
        [
          { id: 2, name: 'MINI',  path : '/#/products?id=2'},
          { id: 3, name: 'MINI 2200',  path : '/#/products?id=3'},
          { id: 1, name: 'MAGIC MAZE PRO',  path : '/#/products?id=1'},
        ],
        [
          { id: 3, name: 'MINI 2200',  path : '/#/products?id=3'},
          { id: 1, name: 'MAGIC MAZE PRO',  path : '/#/products?id=1'},
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
    const linkToPro = (res) => {
        router.push('/productsDetail?id=' + res.id);
      };
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
    window.scrollTo({
        top: 0,
        behavior:'smooth'
      })
    }, { immediate: true })
    return {
      Empty,
      ...toRefs(state),
      targetShowNav,
      linkTo,
      linkToPro,
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
