<template>
  <footer :class="$style.footer">
    <div class="container">
      <div :class="$style.container">
        <div :class="$style.main">
          <NuxtLink :to="links.home" :class="$style.logo">
            <img src="/images/logo-colored.svg" alt="Clarity" />
          </NuxtLink>
          <p :class="$style.description">The easy path to cleaner water</p>
          <div :class="$style.social">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              :class="$style.social__item"
            >
              <UiFaIcon :icon="['fab', 'twitter']" />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              :class="$style.social__item"
            >
              <UiFaIcon :icon="['fab', 'instagram']" />
            </a>
          </div>
        </div>
        <div :class="$style.nav">
          <div :class="$style.nav__section">
            <h4 :class="$style.nav__title">Solutions</h4>
            <ul>
              <li>
                <NuxtLink :to="links.reverseOsmosis">Undersink RO</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="links.homeFiltration">Whole Home</NuxtLink>
              </li>
            </ul>
          </div>
          <div :class="$style.nav__section">
            <h4 :class="$style.nav__title">Resources</h4>
            <ul>
              <li>
                <NuxtLink to="/">Water Quiz</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">Water Score</NuxtLink>
              </li>
            </ul>
          </div>
          <div :class="$style.nav__section">
            <h4 :class="$style.nav__title">Get Started</h4>
            <ul>
              <li>
                <NuxtLink to="/">Pricing Page</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">Product Comparison</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div :class="$style.copyrights">
        <div :class="$style.copyrights__icon">
          <UiFaIcon :icon="['fas', 'heart']" />
        </div>
        <p :class="$style.description">Copyright © 2024. Crafted in Atl.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
defineOptions({ name: 'TheFooter' })

const links = useLinks()
</script>

<style lang="scss" module>
.footer {
  padding-block: 128px 90px;
}

.container {
  display: grid;
  padding-bottom: 60px;

  @include media($from: md) {
    grid-template-columns: 1fr calc(1140px - 487px);
  }

  @include media($to: md) {
    gap: 60px;
  }
}

.main {
  display: grid;
  gap: 30px;

  @include media($to: md) {
    justify-content: center;
    order: 1;
    text-align: center;
  }
}

.logo {
  display: inline-block;
  height: 28px;
  vertical-align: top;

  img {
    height: 100%;
  }
}

.description {
  color: var(--primary-light-color);
  font-size: 16px;
  font-family: var(--font-secondary);
  line-height: 22px;
}

.social {
  display: flex;
  gap: 7px;

  @include media($to: md) {
    justify-content: center;
  }

  &__item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: var(--primary-light-color);
    font-size: 16px;
    transition: color 0.3s;

    @include hover {
      color: #fff;

      &:before {
        opacity: 1;
      }
    }

    &:before {
      position: absolute;
      z-index: -1;
      background: var(--primary-light-color);
      border-radius: 50%;
      opacity: 0.1;
      transition: opacity 0.3s;
      content: '';
      inset: 0;
    }
  }
}

.nav {
  padding-top: 4px;

  @include media($from: sm, $to: md) {
    justify-content: center;
    text-align: center;
  }

  @include media($from: sm) {
    display: flex;
  }

  @include media($to: sm) {
    display: grid;
    gap: 40px;
    text-align: center;
  }

  &__section {
    @include media($from: sm) {
      flex: 1 1 auto;
      width: 33.33%;
      max-width: 195px;
    }
  }

  &__title {
    margin-bottom: 33px;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    @include media($to: sm) {
      margin-bottom: 24px;
    }
  }

  ul {
    display: grid;
    gap: 24px;

    @include media($to: sm) {
      gap: 16px;
    }
  }

  a {
    color: var(--primary-light-color);
    font-size: 16px;
    font-family: var(--font-secondary);
    line-height: 22px;

    @include hover {
      color: var(--accent-color);
      text-decoration: underline;
    }
  }
}

.copyrights {
  text-align: center;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    margin: 0 auto 24px;
    color: #fff;
    font-size: 24px;
    background: var(--accent-color);
    border-radius: 50%;
    box-shadow: 0 5px 25px 0 rgba(0 0 0 / 0.2);
  }
}
</style>
