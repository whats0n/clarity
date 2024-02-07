<template>
  <div
    ref="containerRef"
    :class="[$style.select, opened && $style.select_opened]"
  >
    <button
      type="button"
      :class="[
        $style.select__button,
        !value && $style.select__button_placeholder,
      ]"
      @click="opened = !opened"
    >
      {{ value?.[textField] || placeholder }}
      <UiFaIcon :icon="['fas', 'angle-down']" :class="$style.select__icon" />
    </button>
    <div v-if="opened" :class="$style.select__body">
      <ul :class="$style.select__list">
        <li
          v-for="option in options"
          :key="option[keyField]"
          :class="$style.select__item"
        >
          <button
            type="button"
            :class="[
              $style.option,
              value?.[keyField] === option.id && $style.option_selected,
            ]"
            @click="select(option)"
          >
            {{ option.text }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup generic="T extends Record<string, string | number>">
defineOptions({ name: 'UiSelect' })

const value = defineModel<T | null>()

defineProps<{
  options: T[]
  keyField: string
  textField: string
  placeholder?: string
}>()

const { opened, containerRef } = useDropdown()

const select = (option: T): void => {
  value.value = option
  opened.value = false
}
</script>

<style lang="scss" module>
.select {
  position: relative;

  &__button {
    position: relative;
    width: 100%;
    height: 56px;
    padding: 0 48px 0 20px;
    overflow: hidden;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 16px;
    font-family: var(--font-secondary);
    line-height: normal;
    white-space: nowrap;
    text-align: left;
    text-overflow: ellipsis;
    background-color: #ffff;
    border: 1px solid #c3cad9;
    border-radius: 8px;
    outline: 2px solid transparent;
    outline-offset: -2px;
    transition:
      border-color 0.3s,
      outline-color 0.3s;
    -webkit-appearance: none;
    appearance: none;

    @include hover {
      outline-color: var(--accent-color);
    }

    &_placeholder {
      color: #959ead;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 23px;
    margin-top: -8px;
    color: var(--primary-color);
    font-size: 16px;
    transition: transform 0.3s;
  }

  &__body {
    position: absolute;
    top: calc(100% + 8px);
    z-index: 10;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 7px rgb(0 0 0 / 0.2);
    inset-inline: 0;
  }

  &__list {
    padding-block: 12px;
    max-height: 200px;
    overflow: auto;
  }

  &_opened {
    .select__icon {
      transform: rotateX(-180deg);
    }
  }
}

.option {
  display: block;
  width: 100%;
  min-height: 30px;
  overflow: hidden;
  font-size: 16px;
  line-height: normal;
  text-align: left;
  text-overflow: ellipsis;
  transition:
    color 0.3s,
    background-color 0.2s;
  padding-inline: 15px;

  @include hover {
    color: var(--accent-color);
  }

  &_selected {
    background-color: #f0f0f0;
  }
}
</style>
