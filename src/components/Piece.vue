<template>
    <button>{{power}}</button>
</template>

<script lang="ts">
    import {Component,Prop,Vue} from "vue-property-decorator";

    @Component
    export default class Piece extends Vue{
        @Prop()
        public power!: number;
        public move!:array
        // コマの制御はこっちで移動、
    }
</script>