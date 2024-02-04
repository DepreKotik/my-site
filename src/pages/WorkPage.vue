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
        href: "https://master--aesthetic-marigold-7a728f.netlify.app/",
        title: "Приложение - мини-личный кабинет",
        secondTitle: "Тестовое задание для Webtronics",
        features: ['html, css, vue3', 'адаптивная верстка'],
        isSmall: true,
        src: 'webtronics.svg'
      },
      {
        id: 2,
        href: "https://venerable-meerkat-58131e.netlify.app/",
        title: "Приложение - список серверов",
        secondTitle: "Тестовое задание для Puzzle",
        features: ['html, css, nuxt3', 'адаптивная верстка'],
        isSmall: true,
        src: 'puzzle.png'
      },
      {
        id: 2,
        href: "https://genuine-babka-4148a4.netlify.app/",
        title: "Страничка с ценами",
        secondTitle: "Тестовое задание для ReveredPro",
        features: ['html, css', 'адаптивная верстка'],
        isSmall: true,
        src: 'reveredpro.png'
      }
    ],
  }),
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
