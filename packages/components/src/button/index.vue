<script setup lang="ts">
import { type ButtonProps } from "./type.ts";
withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  type: "primary",
});

/**
 * 定义组件发出的事件类型。
 * @returns {Function} 返回一个函数，用于校验和触发组件的事件。
 */
const emits = defineEmits(["click"]);
</script>

<template>
  <button
    :class="{ btn: true, [type]: true }"
    class="bg-teal-50"
    :disabled="disabled"
    @click="emits('click')"
  >
    <slot></slot>
  </button>
</template>

<style lang="less" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
//.btn {
//  border: none;
//  color: white;
//  padding: 10px 24px;
//  cursor: pointer;
//  border-radius: 8px;
//  font-size: 18px;
//}
//
//.success {
//  background-color: #04aa6d;
//}
//
///* Green */
//.success:hover {
//  background-color: #46a049;
//}
//
//.primary {
//  background-color: #2196f3;
//}
//
///* Blue */
//.primary:hover {
//  background: #0b7dda;
//}
//
//.warning {
//  background-color: #ff9800;
//}
//
///* Orange */
//.warning:hover {
//  background: #e68a00;
//}
//
//.danger {
//  background-color: #f44336;
//}
//
///* Red */
//.danger:hover {
//  background: #da190b;
//}
//
//.default {
//  background-color: #e7e7e7;
//  color: black;
//}
//
///* Gray */
//.default:hover {
//  background: #ddd;
//}
</style>
