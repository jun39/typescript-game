<template>
    <p>{{power}}</p>
</template>

<script lang="ts">
    import {Component,Prop,Vue} from "vue-property-decorator";

    @Component
    export default class Piece extends Vue{
        @Prop()
        public power!: number;
    }
</script>