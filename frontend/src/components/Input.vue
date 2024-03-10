<template>
  <input 
  :type="type"
  :placeholder="placeholder"
  :name="name"
  :id="id"
  v-model="model"
  >
</template>

<script setup>
import { ref, watch } from 'vue';

const {type, placeholder, name, id} = defineProps(['type', 'placeholder', 'name', 'id'])

const model = defineModel();


</script>