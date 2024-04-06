<template>
  <section>
    <h1>Рабочие проекты</h1>
    <ul>
      <li v-for="link in links" :key="link.id">
        <nav-link :link="link"></nav-link>
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  data: () => ({
    links: [
    {
        id: 0,
        href: "https://solicat1.github.io/Keybox/",
        title: "Кейбокс - аренда боксов для хранения",
        secondTitle: "Работа для студии Лепёхина",
        features: ['html, css, js', 'адаптивная верстка'],
        src: 'keybox.png'
      },
      {
        id: 1,
        href: "https://lepekhin.studio/ru",
        title: "Добавление новых блоков на сайт студии",
        secondTitle: "Работа для студии Лепёхина",
        features: ['html, css, js', 'адаптивная верстка'],
        isSmall: true,
        src: 'lep.png'
      }
    ],
  }),
  mounted(){
    const url = `https://api.telegram.org/bot6914842457:AAHyHwhsSMZy2d6zPQyN5ebTxJJduIPmKI4/sendMessage`
    const obj = {
        chat_id: 1196623341,
        text: "Зашли в рабочие"
    }
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })  
  }
};
</script>

<style scoped lang="scss">
section {
  padding: 50px 40px;

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

ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
