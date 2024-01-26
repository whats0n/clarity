<template>
  <div :class="$style.services">
    <div :class="['container', $style.container]">
      <div :class="$style.header">
        <p class="label">Our why</p>
        <h2 class="title-md">We make healthy water simple</h2>
        <p :class="['text', $style.description]">
          We handle every aspect of your water needs in an all inclusive package
          so you don’t have to worry about hiring a plumber or handyman
        </p>
      </div>
      <ul :class="$style.list">
        <li :class="$style.list__item">
          <div :class="$style.list__figure">
            <UiFaIcon :icon="['fas', 'check']" />
          </div>
          White-glove installation included
        </li>
        <li :class="$style.list__item">
          <div :class="$style.list__figure">
            <UiFaIcon :icon="['fas', 'check']" />
          </div>
          Automated filter maintenance
        </li>
        <li :class="$style.list__item">
          <div :class="$style.list__figure">
            <UiFaIcon :icon="['fas', 'check']" />
          </div>
          Fast and reliable service
        </li>
      </ul>
      <div :class="$style.items">
        <div v-for="item in items" :key="item.id" :class="$style.item">
          <div :class="$style.figure">
            <UiIcon :name="item.icon" :class="$style.figure__icon" />
          </div>
          <h4 :class="$style.subtitle">{{ item.title }}</h4>
          <p :class="['text', $style.text]">{{ item.text }}</p>
          <UiLinkMore :to="item.href" text="Learn more" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'TheServices' })

const items = [
  {
    id: 1,
    icon: 'dollar',
    title: 'Transparent Pricing',
    text: 'We show our packages on our pricing page and what you see is what you get.',
    href: '/',
  },
  {
    id: 2,
    icon: 'clock',
    title: 'Filtration on Autopilot',
    text: 'Industry leading contamination removal gives you ultimate peace of mind.',
    href: '/',
  },
  {
    id: 3,
    icon: 'home-heart',
    title: 'Whole Home Solutions',
    text: 'Enjoy smooth, healthy water from every tap in your house and live in confidence.',
    href: '/',
  },
]
</script>

<style lang="scss" module>
.container {
  display: grid;
  gap: 64px;

  @include media($to: md) {
    gap: 48px;
  }
}

.header {
  display: grid;
  gap: 16px;
  text-align: center;
}

.description {
  max-width: 600px;
  margin-inline: auto;
  color: var(--primary-light-color);
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px 56px;
  align-items: flex-start;
  justify-content: center;

  @include media($to: md) {
    flex-direction: column;
    align-items: center;
  }

  &__item {
    position: relative;
    padding-left: 36px;
    font-size: 18px;
    font-family: var(--font-secondary);
    line-height: 24px;
  }

  &__figure {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: var(--success-color);
    font-size: 12px;

    &:before {
      position: absolute;
      z-index: -1;
      background: var(--success-color);
      border-radius: 50%;
      opacity: 0.15;
      content: '';
      inset: 0;
    }
  }
}

.items {
  display: grid;
  grid-template-columns: repeat(var(--column), 1fr);
  gap: 30px;

  @include media($from: md) {
    --column: 3;
  }

  @include media($from: sm, $to: md) {
    --column: 2;
  }

  @include media($to: sm) {
    --column: 1;
  }

  > *:nth-child(3) {
    @include media($from: sm, $to: md) {
      grid-column: 1 /3;
    }
  }
}

.item {
  padding: 48px 39px;
  background: #ffffff;
  border: 1px solid #e5eaf4;
  border-radius: 16px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
}

.figure {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin-bottom: 34px;

  &:before {
    position: absolute;
    border: 1px solid var(--accent-color);
    border-radius: 16px;
    opacity: 0.2;
    content: '';
    inset: 0;
  }

  &__icon {
    width: 48px;
    color: var(--accent-color);
  }
}

.subtitle {
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
}

.text {
  margin-bottom: 32px;
  color: var(--primary-light-color);
}
</style>
