<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string;
    variation?: "big" | "small";
  }>(),
  {
    variation: "big",
  }
);
</script>

<template>
  <div :class="['avatar', variation]">
    <img :src="src" alt="Avatar" class="avatar-image" />
  </div>
</template>

<style scoped>
.avatar {
  border-radius: 8px;
  border: 1px solid var(--border-neutral-1);
  overflow: hidden;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar.big {
  width: 52px;
  height: 52px;
}

.avatar.small {
  width: 40px;
  height: 40px;
}
</style>
