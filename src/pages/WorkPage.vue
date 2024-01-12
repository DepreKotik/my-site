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
        features: ['html, css, vue', 'адаптивная верстка'],
        src: 'webtronics.svg'
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
