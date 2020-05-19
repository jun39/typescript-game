<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyButton></MyButton>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyButton from '@/components/MyButton.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    MyButton
  }
}
</script>
