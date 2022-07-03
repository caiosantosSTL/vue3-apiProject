<script setup>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import axios from "axios";

const getData = ref("");
const getDataComment = ref("");
const route = useRoute();

async function getApi() {
  try {
    getData.value = "";
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
    );
    getData.value = await res.data;

    console.log("res-> ", res.data);
  } catch (error) {
    console.log("error-> ", error);
  }
}

async function getApiComment() {
  try {
    getDataComment.value = "";
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${route.params.id}`
    );
    getDataComment.value = await res.data;
    console.log("res comment-> ", res.data);
  } catch (error) {
    console.log("error comment-> ", error);
  }
}

getApi();
getApiComment();
</script>

<template>
  <div>
    <div class="main-info">
      <h1>Id: {{ $route.params.id }}</h1>

      <h2>id: {{ getData.id }} | {{ getData.title }}</h2>
      <p>{{ getData.body }}</p>
    </div>

    <div class="title-comment">
      <div>
        <h3>Comments</h3>
      </div>
    </div>

    <div v-for="v in getDataComment" :key="v.postId">
      <div class="box-comment">
        <h3>Name: {{ v.name }} | email: {{ v.email }}</h3>
        <p class="area-comment">
          {{ v.body }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
$whiteColor: #eef
.box-comment
    min-height: 120px
    height: auto
    width: auto
    min-width: 100px
    margin: 20px
    padding: 10px
    border-radius: 10px
    background-color: #222
    h3
        color: $whiteColor
    .area-comment
        margin-top: 8px
.title-comment
    div
        display: flex
        height: 50px
        width: auto
        color: $whiteColor
        flex-direction: row
        justify-content: center
        align-items: center
.main-info
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    margin: 40px
    h1
        color: $whiteColor
</style>
