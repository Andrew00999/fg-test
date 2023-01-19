<template>
  <transition name="fade">
    <div class="modal" v-if="show" @click="hideModal">
      <div class="modal_content" @click.stop>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalWindow',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  &_content {
    width: 30%;
    height: 80vh;
    background-color: #fff;
    border-radius: .75rem;
    padding: 1.5rem;
    border: 6px solid rgba(0, 0, 0, .08);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>