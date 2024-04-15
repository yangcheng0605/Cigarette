<template>
  <div class="contact">
    <div class="top_banner">
      <img src="@/assets/img/about/contact_banner.png" alt="">
      <div class="t_box">
        <p class="title AntonFont">SUPPORT</p>
      </div>
    </div> 
    <div class="a_content a_content2">
      <div class="a_content_top">
        <p class="title AntonFont wow animate__fadeInLeft">
          Contact Us
        </p>
        <p class="sub_title wow animate__fadeInRight">Contact Us</p>
      </div>
      <a-row :gutter="30">
        <a-col class="gutter-row" :xs="24" :sm="24" :md="8">
          <div class="gutter-box hoverBox wow animate__bounceIn" data-wow-offset="50" @click="contact">
            <img class="hoverImg" src="@/assets/img/about/img_1.png" alt="">
            <div class="a_text">
              <p class="a_title AntonFont">Support</p>
              <p class="a_title AntonFont">Customer Service</p>
              <p class="a_email">{{email}}</p>
            </div>
          </div>
        </a-col>
        <a-col class="gutter-row" :xs="24" :sm="24" :md="8">
          <div class="gutter-box hoverBox wow animate__bounceIn" data-wow-offset="50" @click="contact">
            <img class="hoverImg" src="@/assets/img/about/img_2.png" alt="">
            <div class="a_text">
              <p class="a_title AntonFont">Sales Become</p>
              <p class="a_title AntonFont">an Authorized</p>
              <p class="a_title AntonFont">Distributor</p>
              <p class="a_email">{{email}}</p>
            </div>
          </div>
        </a-col>
        <a-col class="gutter-row" :xs="24" :sm="24" :md="8">
          <div class="gutter-box hoverBox wow animate__bounceIn" data-wow-offset="50" @click="contact">
            <img class="hoverImg" src="@/assets/img/about/img_3.png" alt="">
            <div class="a_text">
              <p class="a_title AntonFont">Marketing</p>
              <p class="a_title AntonFont">Co-Marketing</p>
              <p class="a_title AntonFont">Cooperation</p>
              <p class="a_email">{{email}}</p>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <a-modal class="contact_pop" v-model:open="contactModal" :width="480" title="" :closable="false" :footer="null">
      <div class="pop_top">
        <span class="title AntonFont">Email</span>
        <img src="@/assets/img/email.png" alt="">
      </div>
      <p class="email">{{email}}</p>
      <a-button class="copyBtn" shape="round" @click="handleCopy">Copy email address</a-button>
    </a-modal>
  </div>
</template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs } from 'vue';
  export default {
    name: "contact",
    components: {
    },
    setup() {
      const { proxy } = getCurrentInstance();
      const state = reactive({
        contactModal: false,
        email: 'support@ehonos.com'
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
      })

      const contact = () => {
        state.contactModal = true
      };
      const handleCopy = () => {
        copyToClipboard(state.email)
        state.contactModal = false
        proxy.$message.success('Success copy');
      };
      const copyToClipboard = (text) => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text)
            .then(() => {
            })
            .catch((err) => {
              console.error('无法复制到剪贴板: ', err);
            });
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
      }
      return {
        ...toRefs(state),
        contact,
        handleCopy,
      };
    },
  };
</script>
<style lang="less">
</style>