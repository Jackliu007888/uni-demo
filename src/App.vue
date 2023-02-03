<!--
 * @Description: 
 * @Author: 刘用坚
 * @Date: 2022-09-23 22:47:48
 * @LastEditors: 刘用坚
 * @LastEditTime: 2023-02-03 15:13:45
-->
<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
	console.log('App Launch')
})
onShow(() => {
	console.log('App Show')
})
onHide(() => {
	console.log('App Hide')
})
</script>
