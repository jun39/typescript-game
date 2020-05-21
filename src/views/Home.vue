<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyButton></MyButton>
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'
import MyButton from '@/components/MyButton.vue'
import Board from '@/components/Board.vue'
import Piece from '@/components/Piece.vue';
@Component({
  components:{
  HelloWorld,
  MyButton,
  Board,
  Piece,
  },
})
export default class Home extends Vue{

}
</script>
