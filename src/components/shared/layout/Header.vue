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
            <SharedLayoutDropdownMenu :class="$style.pricing">
              <template #control>
                <button type="button" :class="$style.link">Pricing</button>
              </template>

              <template #dropdown>
                <div :class="$style.pricing__list">
                  <SharedLayoutSubLink
                    v-for="item in pricing"
                    :key="item.id"
                    :href="item.href"
                    :text="item.text"
                  />
                </div>
              </template>
            </SharedLayoutDropdownMenu>
            <SharedLayoutDropdownMenu :class="$style.resources">
              <template #control>
                <button type="button" :class="$style.link">Resources</button>
              </template>

              <template #dropdown>
                <div :class="$style.resources__list">
                  <SharedLayoutSubLink
                    v-for="item in resources"
                    :key="item.id"
                    :href="item.href"
                    :text="item.text"
                    :icon="item.icon"
                    :external="item.external"
                  />
                </div>
              </template>
            </SharedLayoutDropdownMenu>
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
                @click="toggleMobileSubmenu('solutions')"
              >
                Solutions
                <UiFaIcon
                  :icon="['fas', 'angle-down']"
                  :class="$style.link__angle"
                />
              </button>

              <UiCollapsable :opened="openedMobileSubmenu === 'solutions'">
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
            <div>
              <button
                type="button"
                :class="$style.link"
                @click="toggleMobileSubmenu('pricing')"
              >
                Pricing
                <UiFaIcon
                  :icon="['fas', 'angle-down']"
                  :class="$style.link__angle"
                />
              </button>

              <UiCollapsable :opened="openedMobileSubmenu === 'pricing'">
                <div :class="$style.submenu">
                  <SharedLayoutSubLink
                    v-for="item in pricing"
                    :key="item.id"
                    :href="item.href"
                    :text="item.text"
                  />
                </div>
              </UiCollapsable>
            </div>
            <div>
              <button
                type="button"
                :class="$style.link"
                @click="toggleMobileSubmenu('resources')"
              >
                Resources
                <UiFaIcon
                  :icon="['fas', 'angle-down']"
                  :class="$style.link__angle"
                />
              </button>

              <UiCollapsable :opened="openedMobileSubmenu === 'resources'">
                <div :class="$style.submenu">
                  <SharedLayoutSubLink
                    v-for="item in resources"
                    :key="item.id"
                    :href="item.href"
                    :text="item.text"
                    :icon="item.icon"
                    :external="item.external"
                  />
                </div>
              </UiCollapsable>
            </div>
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

const openedMobileSubmenu = ref<string>('')
const toggleMobileSubmenu = (id: string): void => {
  openedMobileSubmenu.value = id === openedMobileSubmenu.value ? '' : id
}

const solutions = computed<
  Array<{
    id: number
    href: string
    title: string
    text: string
    image: string
    soon?: boolean
    wifi?: boolean
  }>
>(() => [
  {
    id: 1,
    href: links.reverseOsmosis,
    image: '/images/solutions-01.png',
    title: 'Reverse Osmosis',
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
])

const resources = computed<
  Array<{
    id: number
    href: string
    text: string
    icon: string
    external?: boolean
  }>
>(() => [
  {
    id: 1,
    href: links.quiz,
    text: 'Water Quiz',
    icon: 'menu-drop',
    external: true,
  },
  {
    id: 2,
    href: links.contacts,
    text: 'Contact',
    icon: 'menu-mail',
  },
  {
    id: 3,
    href: links.knowledgeBase,
    text: 'Knowledge Base',
    icon: 'menu-book',
    external: true,
  },
  {
    id: 4,
    href: links.consultation,
    text: 'Schedule Consultation',
    icon: 'menu-calendar',
    external: true,
  },
  {
    id: 5,
    href: links.blog,
    text: 'Blog',
    icon: 'menu-pen',
    external: true,
  },
  {
    id: 6,
    href: links.report,
    text: 'Tap Water Report',
    icon: 'menu-clipboard',
  },
])

const pricing = computed<
  Array<{
    id: number
    href: string
    text: string
  }>
>(() => [
  {
    id: 1,
    href: links.reverseOsmosisPrice,
    text: 'Reverse Osmosis',
  },
  {
    id: 2,
    href: links.homeFiltrationPrice,
    text: 'Whole Home Filtration',
  },
  {
    id: 3,
    href: links.installationPrice,
    text: 'Installation Price',
  },
])

const route = useRoute()

watch(
  () => route.name,
  (prev, next) => {
    if (prev !== next) {
      openedMobileSubmenu.value = ''
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

.resources {
  --menu-width: 532px;

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 30px 30px 40px;
  }
}

.pricing {
  --menu-width: 320px;
  --menu-right: 120px;

  &__list {
    display: grid;
    gap: 16px;
    padding: 30px;
  }
}
</style>
