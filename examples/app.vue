<template>
  <div class="wrapper">
    <div class="left-menu">
      <router-link to="/input">Input</router-link>
      <router-link to="/form">Form</router-link>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less">
  @import "../src/styles/index.less";

  .wrapper {
    display: flex;
    .left-menu {
      width: 100px;
      display: flex;
      flex-direction: column;
    }
    .right-content {
      flex: 1;
    }
  }
</style>
