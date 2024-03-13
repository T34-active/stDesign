<template>
  <div :class="{ nodes: true, [type]: true }">
    <slot></slot>
  </div>
</template>
<script setup type="ts">
defineProps({
  type: {
    type: String,
    default: "primary",
  },
})
</script>
<style lang="less" scoped>
.nodes {
  margin-bottom: 15px;
  padding: 4px 12px;
}
.danger {
  background-color: #ffdddd;
  border-left: 6px solid #f44336;
}
.success {
  background-color: #ddffdd;
  border-left: 6px solid #04aa6d;
}
.primary {
  background-color: #e7f3fe;
  border-left: 6px solid #2196f3;
}
.warning {
  background-color: #ffffcc;
  border-left: 6px solid #ffeb3b;
}
</style>
