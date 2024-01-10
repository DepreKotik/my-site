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

  &:hover {
    background-color: rgb(61, 61, 117);
  }
}
</style>
