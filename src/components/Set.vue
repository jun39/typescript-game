<template>
    <nav>
        <h1>コマ選択画面</h1>
        <ul>
            <li>
                <Piece power="10"></Piece>
            </li>
            <li>
                <Piece power="20"></Piece>
            </li>
            <li>
                <Piece power="30"></Piece>
            </li>
            <li>
                <Piece power="40"></Piece>
            </li>
            <li>
                <Piece power="50"></Piece>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import {Component,Prop,Vue,Emit} from "vue-property-decorator";
    import Piece from './Piece.vue'
    @Component({
        components: {
        Piece,
    }
    })


    // Setの終了はこっちで制御
    export default class Set extends Vue{
        
    }
</script>