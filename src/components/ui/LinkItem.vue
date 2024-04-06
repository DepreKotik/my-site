<template>
  <button type="button" :class="[isIntroLink ? 'green-mod' : '']">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "link-item",
  props: {
    isIntroLink: {
      type: Boolean,
    }
  },
};
</script>

<style scoped lang="scss">
button {
  background-color: #fff;
  padding: 10px 20px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  color: inherit;
  font-size: 15px;
  font-weight: 700;
  flex-grow: 0.7;

  @media (max-width: 769px) {
    background-color: rgb(61, 61, 117);
    color: #fff;
    padding: 10px;
    width: 100%;
  }

  &:hover {
    background-color: #619753;
    color: #fff;
  }
}

.green-mod {
  background-color: #619753;
  color: #fff;
  font-size: 20px;
  letter-spacing: 0.8px;
  padding: 15px 20px;

  @media (max-width: 769px) {
    font-size: 18px;
    min-width: 250px;
    margin: 0 auto;
  }

  &:hover {
    background-color: rgb(61, 61, 117);
  }
}
</style>
