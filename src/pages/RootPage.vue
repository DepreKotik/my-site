<template>
  <section>
    <h1>Добро пожаловать на мою страничку</h1>
    <article>
      <img src="@/assets/my-photo.jpg" width="300" height="193" />
      <p>
        Меня зовут Владимир Чеготов и я фронтенд разработчик. Прошёл обучение в
        HtmlAcademy, работаю в студии Лепёхина. Этот сайт создан для того чтобы
        практиковать навыки написания кода на vue.js, а так-же для того чтобы вы
        могли поближе познакомится со мной и моими проектами.
      </p>
    </article>
    <div>
      <link-item :isIntroLink="true" @click="$router.push('/study')"
        >Учебные проекты</link-item
      >
      <link-item :isIntroLink="true" @click="$router.push('/work')"
        >Рабочие проекты</link-item
      >
      <link-item :isIntroLink="true" @click="$router.push('/vue')"
        >Vue проекты</link-item
      >
    </div>
  </section>
</template>

<script>
export default {
    mounted(){
    const url = `https://api.telegram.org/bot6914842457:AAHyHwhsSMZy2d6zPQyN5ebTxJJduIPmKI4/sendMessage`
    const obj = {
        chat_id: 1196623341,
        text: "Твой сайт кто то посетил"
    }
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })  
  }
}
</script>

<style scoped lang="scss">
section {
  padding: 50px 80px;

  @media (max-width: 769px) {
    padding: 30px 10px;
  }
}

h1 {
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 769px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
}

img {
  @media (max-width: 769px) {
    display: block;
    margin: 0 auto;
  }
}

article {
  display: flex;
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 769px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
  }
}

p {
  font-size: 20px;
  line-height: 30px;

  @media (max-width: 769px) {
    font-size: 18px;
    line-height: 24px;
  }
}

div {
  display: flex;
  gap: 50px;
  justify-content: center;

  @media (max-width: 769px) {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
