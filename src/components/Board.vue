<template>
    
    <table border="1">
        <tr>
            <td>!win</td>
            <td>!win</td>
            <td>!win</td>
            <td>!win</td>
        </tr>
        <tr>
            <td><Piece power="30"></Piece></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>!win</td>
            <td>!win</td>
            <td>!win</td>
            <td>!win</td>
        </tr>
    </table>
</template>
<script>
import { Component, Prop, Vue } from 'vue-property-decorator'
import Piece from './Piece.vue'

@Component({
  components: {
    Piece,
  }
})
export default class Board extends Vue{
}
</script>
