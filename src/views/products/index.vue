<template>
  <div class="products">
    <div class="top_banner">
      <img src="@/assets/img/product/banner_top.png" alt="">
      <div class="t_box">
        <p class="title AntonFont">PRODUCTS</p>
      </div>
    </div> 
    <div class="a_content a_content2 products_content">
      <div class="a_content_top">
        <p class="title AntonFont">
          New Arrivals
        </p>
        <div class="products_tab">
          <a-tabs v-model:activeKey="activeKey" @change="changeTab">
            <a-tab-pane :tab="item.cateName" v-for="item in mpType" :key='item.cateId'></a-tab-pane>
          </a-tabs>
        </div>
      </div>
      <div class="a_content_bottom">
        <a-row :gutter="gutter" v-if="proList && proList.length>0">
          <a-col class="gutter-row" :span='colSpan' v-for="item in proList" :key='item.proId'>
            <div class="gutter-box " @click="linkTo(item)" >
              <div class="hoverBox proImg">
                <img class="hoverImg" :src="item.cover" alt="">
              </div>
              <div class="p_text">
                <p class="p_name">{{item.proName}}</p>
                <p class="p_hint">{{item.proDesc}}</p>
                <p class="p_learn smallArrow_box">
                  <span>Learn more</span><img class="smallArrow" src="@/assets/img/arrow_white_r_small.png" alt="">
                </p>
              </div>
            </div>
          </a-col>
        </a-row>
        <a-empty v-else />
      </div>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Empty } from "ant-design-vue";
import Storage from '@/utils/storage';
  export default {
    name: "products",
    components: {
    },
    setup() {
      const { proxy } = getCurrentInstance();
      const router = useRouter()
      const route = useRoute()
      const state = reactive({
        colSpan: 5,
        gutter: [30, 30],
        activeKey: null,
        mpType: null,
        proList: [
          // { id: 1, name: 'GT501', url:require('@/assets/img/product/pro_11.png'), info:'Beauty and Beast Performance 65ast Performanast Performan0mAh and 8000 puffs yeah bro',},
          // { id: 2, name: 'GT502', url:require('@/assets/img/product/pro_22.png'), info:'Beauty and 0 ',},
          // { id: 3, name: 'GT503', url:require('@/assets/img/product/pro_3.png'), info:'Beauty and Beast Performance 650mAh and 8000 puffs yeah bro',},
          // { id: 4, name: 'GT504', url:require('@/assets/img/product/pro_4.png'), info:'Beauty and Beast Performance 650mAh and 8000 puffs',},
          // { id: 5, name: 'GT505', url:require('@/assets/img/product/pro_5.png'), info:'Beauty and 00 puffs yeah',},
          // { id: 6, name: 'GT506', url:require('@/assets/img/product/pro_11.png'), info:'Beauty and Beast Performance',},
        ]
      })
      onMounted(async () => {
        handleResize(); // 初始化时执行一次
        // 监听窗口大小变化
        window.addEventListener('resize', handleResize);
      })
      const getCategoryList = () => {
        proxy.$api.categoryList('').then(res=>{
          state.mpType = res
          state.activeKey = res[0].cateId
          getProductListByCate(res[0].cateId)
          Storage.setItem('navList', res)
        })
      };
      const getProductListByCate = (id) => {
        proxy.$api.productListByCate(id).then(res=>{
          state.proList = res
        })
      };
      const changeTab = (res) => {
        getProductListByCate(res)
      };
      const handleResize = () => {
        const windowWidth = window.innerWidth;
       if (windowWidth < 750) {
          state.colSpan = 12;
          state.gutter = [15, 20]
        } else {
          state.colSpan = 5;
          state.gutter = [30, 30]
        }
      };
      const linkTo = (res) => {
        router.push('/productsDetail?id=' + res.proId);
      };
      watch(route, (e) => {
        const query = e.query
        if (query.id) {
          nextTick(() => {
            state.activeKey = parseInt(query.id) || 1
            getProductListByCate(query.id)
          })
        } else {
          if (!Storage.getItem('navList')) {
            getCategoryList()
          } else {
            state.mpType = Storage.getItem('navList')
            state.activeKey = state.mpType &&  state.mpType[0].cateId
            getProductListByCate(state.activeKey)
          }
        }
      }, { immediate: true })
      return {
        Empty,
        ...toRefs(state),
        linkTo,
        changeTab,
      };
    },
  };
</script>
<style lang="less">
.ant-col-5{
  max-width: 20%;
}
</style>