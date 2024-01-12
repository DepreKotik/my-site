<template>
  <header>
    <button class="burger__button" :class="[isOpen ? 'is-open' : '']" @click="setOpenMenu" type="button">
    </button>
    <ul :class="[isOpen ? 'is-open' : '']">
      <li>
        <link-item @click="$router.push('/')">Обо мне</link-item>
      </li>
      <li>
        <link-item @click="$router.push('/work')">Рабочие проекты</link-item>
      </li>
      <li>
        <link-item @click="$router.push('/study')">Учебные проекты</link-item>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
  }),
  methods: {
    setOpenMenu() {
      if(!this.isOpen) {
        this.isOpen = true
      } else {
        this.isOpen = false
      }
    }
  }
};
</script>

<style scoped lang="scss">
header {
  padding: 10px 40px;
  background-color: rgb(61, 61, 117);
  box-shadow: 0 2px 2px rgb(108, 108, 109);
  
  @media (max-width: 769px) {
    padding: 10px;
    display: flex;
    justify-content: end;
  }
}

ul {
  display: flex;
  justify-content: end;
  gap: 20px;

  @media (max-width: 769px) {
    display: none;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    z-index: 100;

    &.is-open {
      display: block;
      box-shadow: 0 2px 2px rgb(108, 108, 109);
      animation: slide 600ms;
    }

    @keyframes slide {
  0% {
    opacity: 0;
    transform: translate(0, -20px);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
  }
}

li {
  @media (max-width: 769px) {
    width: 100%;
    background-color: #ffffff;
  }
}

.burger__button {
  background-image: url("@/assets/burger.svg");
  background-position: center;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 769px) {
    display: block;

    &.is-open {
      background-image: url("@/assets/close.svg");
    }
  }
}
</style>
