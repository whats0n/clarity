<template>
  <Teleport to="body">
    <Transition
      :enter-from-class="$style.menu_invisible"
      :enter-active-class="$style.menu_active"
      :leave-to-class="$style.menu_invisible"
      :leave-active-class="$style.menu_active"
    >
      <div v-if="opened" ref="containerRef" :class="$style.menu">
        <button type="button" :class="$style.close" @click="opened = false">
          <UiFaIcon :icon="['fas', 'close']" />
        </button>

        <nav :class="$style.nav">
          <slot name="nav" />
        </nav>

        <div :class="$style.footer">
          <slot name="footer" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
const opened = defineModel<boolean>()

const containerRef = ref<HTMLElement>()

const onDocumentClick = ({ target }: Event) => {
  if (
    target instanceof Node &&
    containerRef.value &&
    (containerRef.value.contains(target) || target.contains(containerRef.value))
  )
    return

  opened.value = false
}

watch(
  opened,
  (opened) => {
    if (opened) document.addEventListener('click', onDocumentClick, true)
    else document.removeEventListener('click', onDocumentClick, true)
  },
  { immediate: true },
)
</script>

<style lang="scss" module>
.menu {
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 280px;
  padding-top: 30px;
  background: #fff;
  box-shadow: 0 6px 10px 0 rgb(0 0 0 / 0.3);
  inset: 0 0 0 auto;

  &_invisible {
    transform: translateX(100%);
    opacity: 0;
  }

  &_active {
    transition:
      opacity 0.3s,
      transform 0.3s;
  }
}

.nav {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  overflow: auto;

  a {
    padding: 10px 32px;
  }
}

.footer {
  display: grid;
  flex: 0 0 auto;
  padding: 20px 32px;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  color: var(--primary-color);
  font-size: 24px;
  transition: color 0.3s;

  @include hover {
    color: var(--accent-color);
  }
}
</style>
