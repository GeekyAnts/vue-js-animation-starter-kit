<template>
  <div id="app">
    <div class="component-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 5%;
  text-align: center;
  background-image: url(./assets/bg.png);
  background-repeat: no-repeat;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  background-size:cover;
 // background-position: -663px -6px;
  // background-size: 100% 100%;
  filter: grayscale(30%);
  .component-wrapper {
    box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.2);
    height: 100%;
    background: white;
    overflow: hidden;
  }
}
</style>
