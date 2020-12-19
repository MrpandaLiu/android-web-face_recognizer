<!--
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-11-03 19:42:44
 * @FilePath: \reception\src\components\Loading.vue
 * @Description: add some description
-->
<template>
  <div class="popcontainer">
    <slot>
      <p>Loading...</p>
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.popcontainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;

  p {
    width: 100vw;
    text-align: center;
    color: white;
    z-index: 9999;
    font-size: 30px;
    animation: turn 2s linear infinite;
  }

  @keyframes turn {
    0% {
      -webkit-transform: rotate(0deg);
    }
    25% {
      -webkit-transform: rotate(90deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
    }
    75% {
      -webkit-transform: rotate(270deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
}
</style>