<template>
  <div class="container">
    <div class="trans">
      <span>加载中...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutLrBefore',
}
</script>

<style scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
    /* 设置弹性盒模型 */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E6E6E6;
  }

  .trans {
    position: absolute;
    width: 120px;
    height: 120px;
    /* 设置弹性盒模型 */
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E6E6E6;
  }

  span {
    position: absolute;
    color: #909399;
    z-index: 1;
  }
  .trans::after {
    content: "";
    position: absolute;
    width: 115px;
    height: 115px;
    background: #E6E6E6;
    /* 添加边框 */
    border: 4px solid #A6D4EB;
    /* 初始化位置 */
    transform: rotate(45deg);
    /* 添加动画、动画时间和样式 */
    animation: rotate1 3s ease-in-out infinite alternate;
  }

  .trans::before {
    content: "";
    position: absolute;
    width: 115px;
    height: 115px;
    /* 添加边框 */
    border: 4px solid #E6A23C;
    /* 初始化位置 */
    transform: rotate(-90deg);
    /* 添加动画、动画时间和样式 */
    animation: rotate2 3s ease-in-out infinite alternate;
  }
  @keyframes rotate1 {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-90deg);
    }
    50% {
      transform: rotate(-180deg);
    }
    75% {
      transform: rotate(-270deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes rotate2 {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
