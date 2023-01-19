<template>
  <button class="custom_button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton'
}
</script>

<style scoped lang="scss">
.custom_button {
  color: #fff;
  background-color: #000;
  border-radius: .75rem;
  padding: 1.25rem 5rem;
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  transition: .3s ease-in-out;

  &:hover {
    background-color: #00CA14;
  }
}
</style>