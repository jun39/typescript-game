<template>
  <div class="start">
     <h1>スタート画面</h1>
     <h2>画面を押すとゲームをスタートします</h2>
      <router-link to="/game">Start pivot</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

import { Component, Vue } from 'vue-property-decorator';
export default class Start extends Vue{

}

</script>