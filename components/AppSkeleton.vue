<script setup lang="ts">
defineProps<{
  variation: "text" | "avatar";
  width?: string;
  height?: string;
  radius?: string;
}>();
</script>

<template>
  <div
    :class="[
      'skeleton',
      { 'avatar-skeleton': variation === 'avatar' },
      { 'text-skeleton': variation === 'text' },
    ]"
    :style="{
      width,
      height,
      borderRadius: radius,
    }"
  />
</template>

<style scoped>
.skeleton {
  background: var(--fill-neutral-low-3);
  border-radius: 8px;
}

.avatar-skeleton {
  width: 50px;
  height: 50px;
}

.text-skeleton {
  width: 100px;
  height: 12px;
}
</style>
