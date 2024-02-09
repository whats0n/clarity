<template>
  <header :class="$style.header">
    <div :class="['container', $style.container]">
      <NuxtLink :to="links.home" :class="$style.logo">
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
            <NuxtLink :to="links.home" :class="$style.link"> Home </NuxtLink>
            <div :class="$style.solutionsWrap">
              <button type="button" :class="$style.link">
                Solutions
                <UiFaIcon
                  :icon="['fas', 'angle-down']"
                  :class="$style.link__angle"
                />
              </button>

              <div :class="$style.solutions">
                <div :class="$style.solutions__inner">
                  <SharedLayoutSolutionsItem
                    v-for="item in solutions"
                    :key="item.id"
                    :wifi="item.wifi"
                    :href="item.href"
                    :image="item.image"
                    :title="item.title"
                    :text="item.text"
                    :soon="item.soon"
                  />
                </div>
              </div>
            </div>
            <NuxtLink :to="links.quiz" :class="$style.link">
              Water Quiz
            </NuxtLink>
            <NuxtLink :to="links.reverseOsmosisPrice" :class="$style.link">
              Pricing
            </NuxtLink>
            <NuxtLink :to="links.contacts" :class="$style.link">
              Contact
            </NuxtLink>
          </nav>

          <UiButton
            external
            size="md"
            text="Get Started"
            :to="links.quiz"
            :class="$style.button"
          />
        </div>

        <SharedLayoutMobileMenu v-else v-model="opened">
          <template #nav>
            <NuxtLink to="/" :class="$style.link"> Home </NuxtLink>
            <div>
              <button
                type="button"
                :class="$style.link"
                @click="openedSolutionsMobile = !openedSolutionsMobile"
              >
                Solutions
                <UiFaIcon
                  :icon="['fas', 'angle-down']"
                  :class="$style.link__angle"
                />
              </button>

              <UiCollapsable :opened="openedSolutionsMobile">
                <div :class="$style.submenu">
                  <SharedLayoutSolutionsItem
                    v-for="item in solutions"
                    :key="item.id"
                    :wifi="item.wifi"
                    :href="item.href"
                    :image="item.image"
                    :title="item.title"
                    :text="item.text"
                    :soon="item.soon"
                  />
                </div>
              </UiCollapsable>
            </div>
            <NuxtLink to="/" :class="$style.link"> Water Quiz </NuxtLink>
            <NuxtLink :to="links.reverseOsmosisPrice" :class="$style.link">
              Pricing
            </NuxtLink>
            <NuxtLink :to="links.contacts" :class="$style.link">
              Contact
            </NuxtLink>
          </template>
          <template #footer>
            <UiButton
              external
              size="md"
              text="Get Started"
              :to="links.quiz"
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
const links = useLinks()

const opened = ref<boolean>(false)
const openedSolutionsMobile = ref<boolean>(false)

const solutions = [
  {
    id: 1,
    href: links.reverseOsmosis,
    image: '/images/solutions-01.png',
    title: 'Under Sink Filtration',
    text: 'Maximum filtration for pure and clean drinking water',
  },
  {
    id: 2,
    href: links.homeFiltration,
    image: '/images/solutions-02.png',
    title: 'Whole Home Filtration',
    text: 'Improved water for every fixture in your house',
  },
  {
    id: 3,
    href: '#',
    image: '/images/solutions-03.png',
    title: 'Structured Water',
    text: 'Ultimate water for the forward thinkers',
    soon: true,
  },
  {
    id: 4,
    href: links.leakDetection,
    wifi: true,
    image: '/images/solutions-04.png',
    title: 'Emergency Monitoring',
    text: 'Monitor water and automatically shutoff in emergency',
  },
]

const route = useRoute()

watch(
  () => route.name,
  (prev, next) => {
    if (prev !== next) {
      openedSolutionsMobile.value = false
      opened.value = false
    }
  },
)
</script>

<style lang="scss" module>
.header {
  position: absolute;
  z-index: 200;
  inset: 0 0 auto;
  padding-block: 26px;
}

.container {
  position: relative;
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
  color: var(--primary-color);
  font-size: 16px;
  font-family: var(--font-secondary);
  line-height: 22px;
  vertical-align: top;
  transition: color 0.3s;

  @include media($to: md) {
    display: block;
    width: 100%;
    padding: 10px 32px;
    text-align: left;
  }

  @include hover {
    color: var(--accent-color);
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

.solutionsWrap {
  @include hover {
    .solutions {
      visibility: visible;
      opacity: 1;
    }
  }
}

.solutions {
  position: absolute;
  top: calc(100% - 14px);
  right: 30px;
  width: 840px;
  padding-top: 30px;
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.3s,
    visibility 0.3s;

  &__inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 16px 48px 0 #69bbd7;

    > * {
      padding: 36px;
      border-bottom: 1px solid #e5eaf4;

      &:nth-child(odd) {
        border-right: 1px solid #e5eaf4;
      }
    }
  }
}

.submenu {
  display: grid;
  gap: 16px;
  padding: 16px 16px 16px 48px;
}
</style>
