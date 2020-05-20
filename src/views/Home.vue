<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyButton></MyButton>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyButton from '@/components/MyButton.vue'
import Board from '@/components/Board.vue'
import Piece from '@/components/Piece.vue';
export default {
  name: 'Home',
  components: {
    HelloWorld,
    MyButton,
    Board
  }
}
</script>
