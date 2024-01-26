<template>
  <div :class="$style.steps">
    <div :class="['container', $style.container]">
      <div :class="$style.header">
        <h2 :class="['title-md', $style.title]">
          How do I get started? Right this way
        </h2>
        <p :class="['text', $style.description]">
          Getting started is as easy as 1-2-3. Take the water quiz to see which
          system meets your needs. You can than pick your package based on the
          results and seamleslly schedule an installation date that works for
          you.
        </p>
      </div>
      <div :class="$style.items">
        <div v-for="(item, index) in items" :key="item.id" :class="$style.item">
          <div :class="$style.index">
            {{ index + 1 }}
          </div>
          <img :src="item.image" alt="Illustration" :class="$style.image" />
          <div :class="$style.content">
            <h4 :class="$style.subtitle">{{ item.title }}</h4>
            <p :class="$style.text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'TheSteps' })

const items: Array<{
  id: number
  image: string
  title: string
  text: string
}> = [
  {
    id: 1,
    image: '/images/steps/1.png',
    title: 'Take the Water Quiz',
    text: 'If you want to upgrade your drinking water but are happy with your shower water, the quiz will guide you to the right solution.',
  },
  {
    id: 2,
    image: '/images/steps/2.png',
    title: 'Pick your Package',
    text: 'We offer multiple different reverse-osmosis systems as well as whole house filtration systems to suit your requirements.',
  },
  {
    id: 3,
    image: '/images/steps/3.png',
    title: 'Schedule Installation',
    text: 'You can reserve a timeslot on a day that is convenient for you and your busy schedule. Our team will contact you ahead of arrival.',
  },
]
</script>

<style lang="scss" module>
.steps {
  overflow: hidden;
}

.header {
  display: grid;
  gap: 30px;
  margin-bottom: 50px;

  @include media($from: sm) {
    grid-template-columns: calc(457 / 1140 * 100%) 1fr;
  }
}

.title {
  text-wrap: balance;
}

.description {
  max-width: 585px;
  color: var(--primary-light-color);
}

.items {
  position: relative;
  display: grid;
  grid-template-columns: repeat(var(--column), 1fr);
  gap: 60px 30px;
  padding-bottom: 66px;

  @include media($from: md) {
    --column: 3;
  }

  @include media($from: xs, $to: md) {
    --column: 2;
  }

  @include media($to: xs) {
    --column: 1;
  }

  &:before {
    position: absolute;
    top: 130px;
    right: -50vw;
    bottom: 0;
    left: -70px;
    background: #f9fbfe;
    border-radius: 8px 0 0 8px;
    content: '';
  }
}

.item {
  position: relative;
}

.index {
  position: absolute;
  top: -24px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: #fff;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0.2px;
  text-align: center;
  background: var(--accent-color);
  border-radius: 8px;
}

.image {
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  aspect-ratio: 360/260;
}

.content {
  padding: 26px 2px 0 30px;
}

.subtitle {
  position: relative;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.2px;

  &:before {
    position: absolute;
    left: -20px;
    width: 4px;
    background: var(--success-color);
    border-radius: 1px;
    content: '';
    inset-block: 2px;
  }
}

.text {
  color: var(--primary-light-color);
  font-size: 14px;
  font-family: var(--font-secondary);
  line-height: 24px;
}
</style>
