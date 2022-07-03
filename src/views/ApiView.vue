<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import axios from "axios";

const getData = ref(null);

async function getApi() {
  getData.value = null;
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  getData.value = await res.data.slice(0, 5);

  console.log(res.data);
}

getApi();

/* watch(getApi) */
</script>

<template>
  <div>
    <h1>Api area</h1>
    <div v-for="v in getData" :key="v.id">
      <p>id: {{ v.id }} | {{ v.title }}</p>
      <RouterLink :to="{path: '/api/'+ v.id}">See more</RouterLink>
    </div>
  </div>
</template>

<style>
</style>