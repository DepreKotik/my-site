<template>
  <section>
    <h1>Vue проекты</h1>
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
        href: "https://radiant-pavlova-512243.netlify.app",
        title: "Эмулятор лифта",
        secondTitle: "Тестовое задание для TrueConf",
        features: ['html, css, vue2'],
        src: 'TrueConf.avif'
      },
      {
        id: 1,
        href: "https://master--aesthetic-marigold-7a728f.netlify.app/",
        title: "Приложение - мини-личный кабинет",
        secondTitle: "Тестовое задание для Webtronics",
        features: ['html, css, vue3', 'адаптивная верстка'],
        isSmall: true,
        src: 'webtronics.svg'
      },
      {
        id: 2,
        href: "https://nimble-granita-7408ba.netlify.app",
        title: "Маршрут на карте",
        secondTitle: "Тестовое задание для АВП-Технология",
        features: ['html, css, vue3', 'leaflet'],
        src: 'map.avif'
      },
      {
        id: 3,
        href: "https://shiny-dolphin-2a1ede.netlify.app",
        title: "Календарь",
        secondTitle: "Тестовое задание для Рабочие Руки",
        features: ['html, css, vue3'],
        src: 'calendar.avif'
      },
      {
        id: 4,
        href: "https://venerable-meerkat-58131e.netlify.app/",
        title: "Приложение - список серверов",
        secondTitle: "Тестовое задание для Puzzle",
        features: ['html, css, nuxt3', 'адаптивная верстка'],
        isSmall: true,
        src: 'puzzle.png'
      }
    ],
  }),
  mounted(){
    const url = `https://api.telegram.org/bot6914842457:AAHyHwhsSMZy2d6zPQyN5ebTxJJduIPmKI4/sendMessage`
    const obj = {
        chat_id: 1196623341,
        text: "Зашли на Vue"
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