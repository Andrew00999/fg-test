<template>
  <button class="card_button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CardButton'
}
</script>

<style scoped lang="scss">
.card_button {
  width: 100%;
  height: 100%;
  padding: 1.25rem 0;
  border: 2px solid #CDCDCD;
  text-align: center;
  border-radius: .75rem;
  background-color: #fff;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: .5rem;
  transition: .3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
}
</style>