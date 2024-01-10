<template>
  <header>
    <ul>
      <li><link-item @click="$router.push('/')">Обо мне</link-item></li>
      <li><link-item @click="$router.push('/work')">Рабочие проекты</link-item></li>
      <li><link-item @click="$router.push('/study')">Учебные проекты</link-item></li>
    </ul>
  </header>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
header {
  padding: 10px 40px;
  background-color: rgb(61, 61, 117);
  box-shadow: 0 2px 2px rgb(108, 108, 109);
}

ul {
  display: flex;
  justify-content: end;
  gap: 20px;
}
</style>
