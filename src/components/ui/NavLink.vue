<template>
  <a :href="link.href">
    <div class="content">
      <h2 class="title">{{ link.secondTitle }}</h2>
      <span class="second__title">{{ link.title }}</span>
      <ul class="feature__list">
        <li class="feature__item" v-for="feature in link.features" :key="feature">{{ feature }}</li>
      </ul>
    </div>
    <img :src="require(`@/assets/${link.src}`)"> 
  </a>
</template>

<script>

export default {
  name: 'nav-link',
  props: {
    link: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
a {
  position: relative;
  display: block;

  &:hover .content {
    opacity: 1;
  }
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.second__title {
  display: block;
  text-align: center;
  color: #619753;
  margin-bottom: 20px;
  font-size: 17px;
  font-weight: 700;
}

.content {
  color: white;
  width: 100%;
  height: 100%;
  background-color: rgba(61, 61, 117, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  z-index: 10;
  opacity: 0;
  transition: all 0.4s ease;
}

.title {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
}

.feature__item {
  font-size: 15px;
  font-weight: 700;
  list-style: inside;
  padding-left: 40px;
}

.feature__item + .feature__item{
  margin-top: 15px;
}
</style>