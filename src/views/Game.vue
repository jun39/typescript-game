<template>
  <div class="game">
     <Board></Board>
     <Piece></Piece>
  </div>
</template>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue'
import Piece from '@/components/Piece.vue';
export default {
  name: 'Game',
  components: {
    Board,
    Piece,
  }
}
</script>