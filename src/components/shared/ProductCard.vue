<template>
  <div :class="$style.card">
    <div :class="['badge badge_success-light', $style.badge]">
      {{ service }}
    </div>
    <div :class="$style.price">{{ computedPrice }}</div>
    <div v-if="installation" :class="$style.installation">Includes Install</div>
    <div :class="$style.name">{{ name }}</div>
    <div v-if="installationAccessories" :class="$style.meta">
      Installation Accessories Included
    </div>
    <img :src="image" :class="$style.image" />
    <button
      type="button"
      :disabled="disabled || processing"
      :class="$style.button"
      @click="$emit('add')"
    >
      <UiFaIcon :icon="['fas', 'plus']" :class="$style.icon" />
      Add {{ service }}
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  service: string
  name: string
  image: string
  price: number
  installation: boolean
  installationAccessories: boolean
  processing: boolean
  disabled: boolean
}>()

defineEmits<{ (e: 'add'): void }>()

const computedPrice = computed<string>(() =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(props.price),
)
</script>

<style lang="scss" module>
.card {
  position: relative;
  padding: 14px 43px 50px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #e9f2fa;
  border-radius: 12px;

  @include media($to: xs) {
    padding: 24px;
  }
}

.badge {
  margin-bottom: 17px;
}

.price {
  color: #1d1b84;
  font-weight: 700;
  font-size: 46px;
  line-height: 60px;
  letter-spacing: 1.02px;
}

.installation {
  color: #344b80;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.37px;
}

.name {
  margin-top: 27px;
  color: #204f60;
  font-weight: 700;
  font-size: 15px;
  line-height: 17px;
  letter-spacing: -0.17px;
}

.meta {
  color: #a2a2a2;
  font-size: 13px;
  font-family: var(--font-secondary);
  line-height: 18px;
  letter-spacing: -0.14px;
}

.image {
  width: 178px;
  aspect-ratio: 1/1;
  object-fit: contain;
  margin-block: 13px 6px;
}

.button {
  position: relative;
  width: 100%;
  height: 48px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: normal;
  text-align: center;
  background: var(--color);
  border: 1px solid var(--color);
  border-radius: 8px;
  transition:
    color 0.3s,
    background-color 0.3s;
  padding-inline: 60px 42px;
  --color: var(--success-color);

  &:enabled {
    @include hover {
      color: var(--success-color);
      background: #fff;
    }
  }

  &:disabled {
    --color: #ddd7e1;
    cursor: not-allowed;
  }
}

.icon {
  position: absolute;
  top: calc(50% - 7px);
  left: 22px;
  font-size: 14px;
}
</style>
