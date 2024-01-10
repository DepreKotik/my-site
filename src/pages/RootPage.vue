<template>
  <section>
    <h1>Добро пожаловать на мою страничку</h1>
    <article>
      <img src="@/assets/my-photo.jpg" width="300" height="193">
      <p>
        Меня зовут Владимир Чеготов и я фронтенд разработчик. Прохожу обучение в HtmlAcademy, работаю в студии Лепёхина.
        Этот сайт создан для того чтобы практиковать навыки написания кода на vue.js, а так-же для того чтобы вы могли 
        поближе познакомится со мной и моими проектами.
      </p>
    </article>
    <div>
      <link-item :isIntroLink="true" @click="$router.push('/study')">Учебные проекты</link-item>
      <link-item :isIntroLink="true" @click="$router.push('/work')">Рабочие проекты</link-item>
    </div>
  </section>
</template>

<script>

export default {
  
}
</script>

<style scoped>
section {
  padding: 50px 80px;
}

h1 {
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
}

article {
  display: flex;
  gap: 30px;
  margin-bottom: 50px;
}

p {
  font-size: 20px;
  line-height: 30px;
}

div {
  display: flex;
  gap: 50px;
  justify-content: center;
}
</style>