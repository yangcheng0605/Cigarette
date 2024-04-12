<template>
  <div class="about">
    <div class="top_banner">
      <img src="@/assets/img/about/contact_banner.png" alt="">
      <div class="t_box">
        <p class="title AntonFont">SUPPORT</p>
      </div>
    </div> 
    <div class="a_content a_content2">
      <div class="a_content_top">
        <p class="title AntonFont">
          Contact Us
        </p>
        <p class="sub_title">Contact Us</p>
      </div>
      <a-row :gutter="30">
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box hoverBox" @click="contact">
          <img class="hoverImg" src="@/assets/img/about/img_1.png" alt="">
          <div class="a_text">
            <p class="a_title AntonFont">Support</p>
            <p class="a_title AntonFont">Customer Service</p>
            <p class="a_email">{{email}}</p>
          </div>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box hoverBox" @click="contact">
          <img class="hoverImg" src="@/assets/img/about/img_2.png" alt="">
          <div class="a_text">
            <p class="a_title AntonFont">Sales Become</p>
            <p class="a_title AntonFont">an Authorized</p>
            <p class="a_title AntonFont">Distributor</p>
            <p class="a_email">{{email}}</p>
          </div>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box hoverBox" @click="contact">
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
      <p>{{email}}</p>
      <p @ok="handleCopy"><a-button type="primary" shape="round">Copy email address</a-button> </p>
    </a-modal>
  </div>
</template>
<script>
import { nextTick, onMounted, reactive, toRefs } from 'vue';
  export default {
    name: "contact",
    components: {
    },
    setup() {
      const state = reactive({
        contactModal: false,
        email: 'support@ehonos.com'
      })

      onMounted(async () => { 
        nextTick(() => {
        })
      })

      const contact = () => {
        state.contactModal = true
      };
      const handleCopy = () => {
        this.$message.success('Success copy');
        copyToClipboard(state.email)
        state.contactModal = false
      };
      const copyToClipboard = (text) => {
        // 检查浏览器是否支持剪贴板 API
        if (navigator.clipboard) {
          // 调用 writeText() 方法将文本复制到剪贴板
          navigator.clipboard.writeText(text)
            .then(() => {
              console.log('文本已复制到剪贴板');
            })
            .catch((err) => {
              console.error('无法复制到剪贴板: ', err);
            });
        } else {
          // 对于不支持剪贴板 API 的旧浏览器,可以尝试使用其他方法
          // 例如创建一个临时文本区域,选中并复制内容
          const textArea = document.createElement('textarea');
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          console.log('文本已复制到剪贴板');
        }
      }

// 示例用法
copyToClipboard('这是要复制的文本内容');

      return {
        ...toRefs(state),
        contact,
        handleCopy,
      };
    },
  };
</script>
<style lang="less">
.contact_pop{
  font-size: 1.5rem;
  color: #000;
  .pop_top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .title{
    font-size: 2.5rem;
  }
  img{
    width: 48px;
    height: 48px;
  }
}
</style>