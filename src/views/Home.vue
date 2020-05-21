<template>
  <div class="home">
    <h1>Welcome piviot games</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import Board from '@/components/Board.vue'
import Piece from '@/components/Piece.vue';
@Component({
  components:{
  Board,
  Piece,
  },
})
export default class Home extends Vue{

}
</script>
