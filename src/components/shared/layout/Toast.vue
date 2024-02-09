<template>
  <div :class="$style.messages">
    <TransitionGroup
      :enter-from-class="$style.message_inactive"
      :leave-to-class="$style.message_inactive"
      :enter-active-class="$style.message_active"
      :leave-active-class="$style.message_active"
    >
      <div
        v-for="item in toast.messages"
        :key="item.id"
        :class="[$style.message, $style[`message_ui-${item.ui}`]]"
      >
        <UiFaIcon
          :icon="['fas', icons[item.ui]]"
          :class="$style.message__icon"
        />
        <div :class="$style.message__text">
          {{ item.message }}
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'LayoutToast' })

const toast = useToast()

const icons: Record<string, string> = {
  success: 'check',
  danger: 'exclamation-circle',
  warning: 'exclamation-triangle',
  info: 'info-circle',
}
</script>

<style lang="scss" module>
.messages {
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 500;
  display: grid;
  gap: 10px;
  width: 300px;
  max-height: calc(100vh - 20px);
  max-height: calc(100dvh - 20px);
  overflow: auto;
}

.message {
  display: flex;
  align-items: flex-start;
  padding: 12px;
  color: #fff;
  font-size: 14px;
  line-height: 16px;
  border-radius: 4px;

  &__icon {
    flex: 0 0 auto;
    margin-right: 12px;
    font-size: 16px;
  }

  &__text {
    flex: 1 1 auto;
    align-self: center;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &_ui-success {
    background: var(--success-color);
  }

  &_ui-danger {
    background: var(--danger-color);
  }

  &_ui-warning {
    background: var(--warning-color);
  }

  &_ui-info {
    background: var(--info-color);
  }

  &_inactive {
    opacity: 0;
  }

  &_active {
    transition: opacity 0.3s;
  }
}
</style>
