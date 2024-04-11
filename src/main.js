import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import wow from 'wowjs'

// 样式
import 'animate.css';
import 'swiper/css/bundle';
import '@/assets/style/index.less'
import 'wowjs/css/libs/animate.css'
import { Spin, Image, message, Popover, Steps, Drawer, Collapse, Dropdown, Timeline, Modal, Descriptions, ConfigProvider, 
  Table, Menu, Layout, Input, Button, Popconfirm, Form, Checkbox, Radio, TimePicker, Select, Card, Row, Tooltip, 
  Col, Tabs, DatePicker, Space, InputNumber, Slider, Upload, Badge, Tag, Avatar, Statistic, Divider, Empty, 
  Switch, Result, Progress, Cascader, Breadcrumb, Transfer, Pagination } from 'ant-design-vue';

const app = createApp(App)

app.config.globalProperties.$wow = wow

// 常用的ant-design-vue组件
app.use(Image)
app.use(Spin)
app.use(Steps)
app.use(Modal)
app.use(Table)
app.use(Button)
app.use(Collapse)
app.use(Dropdown)
app.use(Popover)
app.use(Drawer)
app.use(Timeline)
app.use(ConfigProvider)
app.use(Input)
app.use(Form)
app.use(Layout)
app.use(Menu)
app.use(Cascader)
app.use(InputNumber)
app.use(Checkbox)
app.use(Radio)
app.use(Select)
app.use(Card)
app.use(Row)
app.use(Col)
app.use(Tabs)
app.use(DatePicker)
app.use(TimePicker)
app.use(Tooltip)
app.use(Space)
app.use(Descriptions)
app.use(Popconfirm)
app.use(Slider)
app.use(Upload)
app.use(Badge)
app.use(Tag)
app.use(Avatar)
app.use(Statistic)
app.use(Divider)
app.use(Empty)
app.use(Switch)
app.use(Result)
app.use(Progress)
app.use(Breadcrumb)
app.use(Transfer)
app.use(Pagination)
app.use(store).use(router).mount("#app");
