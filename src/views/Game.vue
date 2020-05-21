<template>
  <div class="game">
     <Board></Board>
     <Set></Set>
  </div>
</template>

<script>
// @ is an alias to /src
import { Component,Prop,Emit, Vue } from 'vue-property-decorator';
import Board from '@/components/Board.vue'
import Piece from '@/components/Piece.vue';
import Set from '@/components/Set.vue';


@Component({
        components: {
        Board,
        Piece,
        Set
        },
    })

export default class Game extends Vue{
  public judgeWin(params) {
    
  }

  public judgeTurn(){
    
  }

}
</script>