<template>
  <div class="game">
     <Board></Board>
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import Board from '@/components/Board.vue'
import Piece from '@/components/Piece.vue';

@Component({
        components: {
        Board,
        Piece,
        },
    })
export default class Game extends Vue{
}
</script>