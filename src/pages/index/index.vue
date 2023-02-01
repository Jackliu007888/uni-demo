<template>
  <view class="content">
    <text class="title">{{title}}</text>

    <van-button type="primary">按钮</van-button>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello')
const value = ref('')
const onChange = () => {
}

</script>

<style lang="scss">
.title {
	color: blue;
}
</style>
