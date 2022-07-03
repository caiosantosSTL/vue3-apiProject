<script setup>
import {ref} from 'vue'
const msg = ref('This text stored in ref')
const isBlue = ref(true)
const bye = ref(false)

// *** form bind
const textVar = ref('text default')

// ** list
const myList = ref(
    [
        {id:1, value:'aa'},
        {id:2, value:'bb'},
        {id:3, value:'cc'},
        {id:4, value:'dd'},
        {id:5, value:'ee'},
    ]
)


const reversText = () => {
    msg.value = msg.value.split('').reverse().join('')
}

function changeTextColor(){
    isBlue.value = !isBlue.value
}

function sayBye(){
    bye.value = !bye.value
    console.log(bye.value)
}

</script>

<template>

<div><!-- conect css class -->
  <h1 :title="msg" :class="{ azuro: isBlue }" @click="changeTextColor">New page here!</h1>
  <p>{{msg}}</p>
  <div class="btn1" @click="reversText">Reverse the text</div>
  <div>
    <h2 v-if="bye !== false">Hi you</h2>
    <h2 v-else>Bye bye</h2>
    <div class="btn1" @click="sayBye">say bye</div>
  </div>

    <p>Text here</p>
    <input type="text" v-model="textVar">{{textVar}}

    <p>List</p>
    <ul>
        <li v-for="v in myList" :key="v.id">{{v.value}}</li>
    </ul>
</div>

</template>

<style lang="sass" scoped>
    div
        display: flex
        flex-direction: column
        align-items: center
    h1
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
        text-decoration: underline
        max-height: 50px
    p
        font: italic

    .btn1
        background-color: #3338ff
        padding: 10px
        margin: 10px
        border-radius: 20px
        &:hover
            background-color: #ff3338
            cursor: pointer
    
    .azuro
        font: #3338ff


</style>

