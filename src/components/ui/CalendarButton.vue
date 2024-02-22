<template>
  <button type="button" :class="$style.button">
    <span :class="$style.figure">
      <svg viewBox="0 0 24 24" :class="$style.icon">
        <g transform="translate(0 -1028.4)">
          <path
            d="m5 1032.4c-1.1046 0-2 0.9-2 2v14c0 1.1 0.8954 2 2 2h6 2 6c1.105 0 2-0.9 2-2v-14c0-1.1-0.895-2-2-2h-6-2-6z"
            fill="#bdc3c7"
          />
          <path
            d="m5 3c-1.1046 0-2 0.8954-2 2v14c0 1.105 0.8954 2 2 2h6 2 6c1.105 0 2-0.895 2-2v-14c0-1.1046-0.895-2-2-2h-6-2-6z"
            fill="#ecf0f1"
            transform="translate(0 1028.4)"
          />
          <path
            d="m5 1031.4c-1.1046 0-2 0.9-2 2v3h18v-3c0-1.1-0.895-2-2-2h-6-2-6z"
            fill="#e74c3c"
          />
          <path
            d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z"
            fill="#c0392b"
            transform="translate(.5 1028.4)"
          />
          <path
            d="m6 1c-0.5523 0-1 0.4477-1 1v3c0 0.5523 0.4477 1 1 1s1-0.4477 1-1v-3c0-0.5523-0.4477-1-1-1z"
            fill="#bdc3c7"
            transform="translate(0 1028.4)"
          />
          <path
            d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z"
            fill="#c0392b"
            transform="translate(12.5 1028.4)"
          />
          <g fill="#bdc3c7">
            <path
              d="m18 1029.4c-0.552 0-1 0.4-1 1v3c0 0.5 0.448 1 1 1s1-0.5 1-1v-3c0-0.6-0.448-1-1-1z"
            />
            <path
              d="m5 1039.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"
            />
            <path
              d="m5 1042.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"
            />
            <path
              d="m5 1045.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"
            />
          </g>
          <rect
            fill="#c0392b"
            height="1"
            transform="translate(0 1028.4)"
            width="18"
            x="3"
            y="8"
          />
        </g>
      </svg>
    </span>
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
defineProps<{ text: string }>()
</script>

<style lang="scss" module>
.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  padding: 7px 24px 7px 74px;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  line-height: normal;
  text-align: center;
  vertical-align: top;
  background-color: var(--accent-color);
  border: 2px solid var(--accent-color);
  border-radius: 8px;
  transition:
    color 0.3s,
    background-color 0.3s;

  &:enabled {
    @include hover {
      color: var(--accent-color);
      background: #fff;
    }
  }
}

.figure {
  position: absolute;
  left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.1);
  inset-block: 7px;
}

.icon {
  width: 24px;
  height: 24px;
}
</style>
