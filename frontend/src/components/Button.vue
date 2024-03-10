<template>   
  <button :type="type">
    <slot></slot>
  </button>
</template>

<script setup>
const {type} = defineProps(['type'])
</script>