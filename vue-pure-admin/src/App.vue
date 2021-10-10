<template>
  <router-view />
</template>
<script lang='ts'>

import * as echarts from 'echarts'
import { provide } from 'vue'

export default {
  setup(){
    // provide ：向子组件以及子孙组件传递数据。接收两个参数，第一个参数是 key，即数据的名称；第二个参数为 value，即数据的值
    // inject ：接收父组件或祖先组件传递过来的数据。接收一个参数 key，即父组件或祖先组件传递的数据名称
    provide('echarts', echarts)
  }
}
</script>