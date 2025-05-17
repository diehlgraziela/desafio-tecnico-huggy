<template>
  <li :class="['message-item', { active: active }]">
    <AppAvatar src="https://placehold.co/40" />
    <div class="message-content">
      <h2 class="body-1-bold">João da Silva</h2>
      <p class="body-2-regular">Tudo, e você?</p>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{ name: string; lastMessage: string; active?: boolean }>();
</script>

<style scoped>
.message-item {
  padding: 8px;
  border-radius: 4px;
  transition: 0.1s;
  cursor: pointer;

  display: flex;
  gap: 12px;
  align-items: center;
}

.message-item p {
  color: var(--text-on-neutral-low-default);
}

.message-item.active {
  background: var(--fill-primary-0);
}

.message-item.active h2 {
  color: var(--text-on-neutral-low-cta);
}

.message-item:not(.active):hover {
  background: var(--fill-primary-0);
  box-shadow: 0px 2px 8px 0px #0000001f;
}

.message-item:not(.active):active {
  background: var(--fill-primary-1);
}
</style>
