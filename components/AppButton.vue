<template>
  <button :class="[variation, { icon: icon && variation === 'icon' }]">
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variation?: "primary" | "success" | "icon";
    icon?: "cta" | "danger";
  }>(),
  {
    variation: "primary",
    icon: "cta",
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
  background-color: var(--fill-neutral-low-4);
  color: var(--fill-neutral-medium-1);
}

button.primary {
  background-color: var(--fill-primary-4);
  color: var(--fill-neutral-low-0);
}
button.primary:hover {
  background-color: var(--fill-primary-3);
  box-shadow: 0, 4px, 8px rgba(0, 0, 0, 0.16);
}
button.primary:active {
  background-color: var(--fill-primary-5);
}

button.success {
  background-color: var(--fill-success-4);
  color: var(--fill-neutral-low-0);
}
button.success:hover {
  background-color: var(--fill-success-3);
  box-shadow: 0, 4px, 8px rgba(0, 0, 0, 0.16);
}
button.success:active {
  background-color: var(--fill-success-5);
}

button.icon {
  background-color: transparent;
  color: var(--text-on-neutral-low-weak);
  padding: 2px 4px;
}
button.icon.cta:hover {
  background-color: var(--fill-primary-1);
  color: var(--text-on-neutral-low-cta);
  box-shadow: 0, 4px, 8px rgba(0, 0, 0, 0.16);
}
button.icon.cta:active {
  background-color: var(--fill-primary-2);
}
</style>
