<template>
  <header :class="$style.header">
    <div :class="['container', $style.container]">
      <NuxtLink to="/" :class="$style.logo">
        <img src="/images/logo-colored.svg" alt="Clarity" />
      </NuxtLink>

      <button
        type="button"
        :class="$style.trigger"
        @click.prevent="opened = !opened"
      >
        <span />
        <span />
        <span />
      </button>

      <ClientOnly>
        <div v-if="!bp.md" :class="$style.menu">
          <nav :class="$style.nav">
            <NuxtLink to="/" :class="$style.link"> Home </NuxtLink>
            <NuxtLink to="/" :class="$style.link">
              Solutions
              <UiFaIcon
                :icon="['fas', 'angle-down']"
                :class="$style.link__angle"
              />
            </NuxtLink>
            <NuxtLink to="/" :class="$style.link"> Water Quiz </NuxtLink>
            <NuxtLink to="/" :class="$style.link"> Contact </NuxtLink>
          </nav>

          <UiButton
            ui="outline"
            size="md"
            text="Get Started"
            :class="$style.button"
          />
        </div>

        <SharedLayoutMobileMenu v-else v-model="opened">
          <template #nav>
            <NuxtLink to="/" :class="$style.link"> Home </NuxtLink>
            <NuxtLink to="/" :class="$style.link">
              Solutions
              <UiFaIcon
                :icon="['fas', 'angle-down']"
                :class="$style.link__angle"
              />
            </NuxtLink>
            <NuxtLink to="/" :class="$style.link"> Water Quiz </NuxtLink>
            <NuxtLink to="/" :class="$style.link"> Contact </NuxtLink>
          </template>
          <template #footer>
            <UiButton
              ui="outline"
              size="md"
              text="Get Started"
              :class="$style.button"
            />
          </template>
        </SharedLayoutMobileMenu>
      </ClientOnly>
    </div>
  </header>
</template>

<script lang="ts" setup>
defineOptions({ name: 'TheHeader' })

const bp = useBreakpoints()

const opened = ref<boolean>(false)
</script>

<style lang="scss" module>
.header {
  position: absolute;
  z-index: 200;
  inset: 0 0 auto;
  padding-block: 26px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 28px;
}

.menu {
  display: flex;
  gap: 20px 40px;
  align-items: center;
}

.nav {
  display: flex;
  gap: 20px 40px;
  align-items: center;
}

.link {
  display: inline-flex;
  gap: 4px;
  align-items: center;
  font-size: 16px;
  font-family: var(--font-secondary);
  line-height: 22px;
  vertical-align: top;

  @include hover {
    text-decoration: underline;
  }

  &__angle {
    font-size: calc(14 / 16 * 1em);
  }
}

.trigger {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  @include media($from: md) {
    display: none;
  }

  span {
    width: 24px;
    height: 3px;
    background: var(--primary-color);
    border-radius: 1px;
    transition: background-color 0.3s;
  }

  @include hover {
    span {
      background: var(--accent-color);
    }
  }
}
</style>
