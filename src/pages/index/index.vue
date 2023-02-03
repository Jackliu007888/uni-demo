<!--
 * @Description: 
 * @Author: 刘用坚
 * @Date: 2023-02-03 12:40:13
 * @LastEditors: 刘用坚
 * @LastEditTime: 2023-02-03 17:02:29
-->
<template>
	<view class="content">
		<text class="title">{{ title }}</text>
		<van-button type="primary">按钮</van-button>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello')
const value = ref('')
const onChange = () => {}
</script>

<style lang="scss">
.title {
	position: relative;
	left: 10px;
	height: 100px;
	color: blue;
}
</style>
