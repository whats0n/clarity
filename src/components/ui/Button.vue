<template>
  <component
    :is="component"
    :type="component === 'button' ? type : undefined"
    :to="to"
    :class="[
      $style.button,
      $style[`button_ui-${ui}`],
      $style[`button_size-${size}`],
    ]"
  >
    {{ text }}
    <UiFaIcon
      v-if="arrow"
      :icon="['fas', 'arrow-right']"
      :class="$style.icon"
    />
  </component>
</template>

<script lang="ts" setup>
import type { NuxtLinkProps } from 'nuxt/app'
import type { ButtonHTMLAttributes } from 'vue'

defineOptions({ name: 'BaseButton' })

const props = withDefaults(
  defineProps<{
    to?: NuxtLinkProps['to']
    type?: ButtonHTMLAttributes['type']
    ui?: 'primary' | 'secondary' | 'outline'
    size?: 'md' | 'lg'
    arrow?: boolean
    text: string
  }>(),
  {
    to: undefined,
    type: 'button',
    ui: 'primary',
    size: 'lg',
    arrow: false,
    disabled: false,
  },
)

const component = computed(() => {
  return props.to ? resolveComponent('NuxtLink') : 'button'
})
</script>

<style lang="scss" module>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: normal;
  text-align: center;
  vertical-align: top;
  border-radius: 8px;
  transition:
    color 0.3s,
    background-color 0.3s;

  &_ui-primary {
    color: #ffffff;
    background-color: var(--accent-color);
    border: 2px solid var(--accent-color);

    @include hover {
      color: var(--accent-color);
      background: #fff;
    }
  }

  &_ui-secondary {
    color: var(--primary-color);
    background: #fff;

    @include hover {
      color: #fff;
      background-color: var(--primary-color);
    }
  }

  &_ui-secondary,
  &_ui-primary {
    box-shadow: 0 15px 35px 0 rgb(20 45 65 / 0.15);
  }

  &_ui-outline {
    color: var(--accent-color);
    background: none;
    border: 2px solid var(--accent-color);

    @include hover {
      color: #fff;
      background-color: var(--accent-color);
    }
  }

  &_size-lg {
    height: 54px;
    font-weight: bold;
    font-size: 18px;
    padding-inline: 24px;
    column-gap: 25px;
  }

  &_size-md {
    height: 48px;
    font-weight: normal;
    font-size: 16px;
    padding-inline: 28px;
    column-gap: 20px;
  }
}

.icon {
  font-weight: normal;
  font-size: calc(14 / 18 * 1em);
}
</style>
