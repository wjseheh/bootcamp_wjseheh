<template>
  <div>
    <h1 class="text-red">Hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 'John Doe',
      message: 'Welcome 개발자의 품격',
      arr: [],
      obj: {}
    }
  }
}
</script>
<style scoped>
/* scoped - 이 페이지 에서만 사용가능 */
.text-red {
  color: red;
}
</style>
