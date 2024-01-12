<template>
  <section>
    <h1>Учебные проекты</h1>
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
        href: "https://solicat1.github.io/660117-sedona-36/",
        title: "Седона - туристический сайт",
        secondTitle: "Первый модуль",
        features: ['html, css'],
        src: 'sedona.jpg'
      },
      {
        id: 1,
        href: "https://solicat1.github.io/660117-gllacy-36/",
        title: "Глейси - интернет магазин мороженного",
        secondTitle: "Первый модуль",
        features: ['html, css'],
        src: 'glacy.jpg'
      },
      {
        id: 2,
        href: "https://solicat1.github.io/660117-mishka-28/",
        title: "Мишка - интернет магазин милых вязанных вещей",
        secondTitle: "Второй модуль",
        features: ['html, css', 'адаптивная верстка'],
        src: 'mishka.jpg'
      },
      {
        id: 3,
        href: "https://solicat1.github.io/660117-cat-energy-28/",
        title: "CatEnergy - интернет магазин корма для кошек",
        secondTitle: "Второй модуль",
        features: ['html, css', 'адаптивная верстка'],
        src: 'cat-energy.jpg'
      },
      {
        id: 4,
        href: "https://solicat1.github.io/660117-kekstagram-29/",
        title: "Кекстаграм - аналог инстаграма",
        secondTitle: "Третий модуль",
        features: ['js'],
        src: 'kekstagram.jpg'
      },
      {
        id: 5,
        href: "https://solicat1.github.io/Drink2go/",
        title: "Drink2go - интернет магазин кофе",
        secondTitle: "Грейдирование",
        features: ['html, css, js', 'адаптивная верстка'],
        src: 'drink2go.png'
      },
      {
        id: 5,
        href: "https://solicat1.github.io/Fitness/",
        title: "Fitness - страничка фитнес клуба",
        secondTitle: "Акселератор",
        features: ['html, css, js', 'адаптивная верстка'],
        src: 'fitness.jpg'
      },
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
