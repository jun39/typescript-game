<template>
    <table border="1">
        <tr class="winA">
            <td>!win</td>
            <td>!win</td>
            <td>!win</td>
            <td>!win</td>
        </tr>
        <tr class="setB">
            <td><Piece power="30"></Piece></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="setB">
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
        <tr class="setA">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="setA">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="winB">
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
import Set from './Set.vue'

@Component({
  components: {
    Piece,
    Set,
  }
})
export default class Board extends Vue{
}
</script>
