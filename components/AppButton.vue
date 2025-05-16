<template>
  <button :class="variation">
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variation?: string;
  }>(),
  {
    variation: "primary",
  }
);
</script>

<style scoped>
button {
  border-radius: 8px;
  padding: 12px 24px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 3%;
  cursor: pointer;
  transition: 0.1s;
}
button:disabled {
  background-color: #dcdce1;
  color: #9d9da3;
}

button.primary {
  background-color: var(--primary-4);
  color: #ffffff;
}
button.primary:hover {
  background-color: var(--primary-3);
  box-shadow: 0, 4px, 8px rgba(0, 0, 0, 0.16);
}
button.primary:active {
  background-color: var(--primary-5);
}
</style>
