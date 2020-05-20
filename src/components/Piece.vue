<template>
    <p>コマ</p>
</template>

<script lang="ts">
    import {Component,Emit,Prop,Vue} from "vue-property-decorator";

    @Component
    export default class Piece extends Vue{
        @Prop()
        public power!: number;
    }
</script>