<script setup lang="ts">
const props = defineProps<{
  name: string;
  lastMessage: string | null;
  avatar: string;
  lastFile?: string | null;
  active?: boolean;
}>();

const formattedMessage = computed(() => {
  const hasImage = props.lastFile;
  const message = props.lastMessage;

  return hasImage ? `📷 ${message || "Imagem"}` : message;
});
</script>

<template>
  <li :class="['chat-item', { active: active }]">
    <AppAvatar :src="avatar" />
    <div class="message-content">
      <h2 class="body-1-bold">{{ name }}</h2>
      <p class="body-2-regular">
        {{ formattedMessage }}
      </p>
    </div>
  </li>
</template>

<style scoped>
.chat-item {
  padding: 8px;
  border-radius: 4px;
  transition: 0.1s;
  cursor: pointer;

  display: flex;
  gap: 12px;
  align-items: center;
}

.message-content {
  min-width: 0;
}

.chat-item p {
  color: var(--text-on-neutral-low-default);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chat-item.active {
  background: var(--fill-primary-0);
}

.chat-item.active h2 {
  color: var(--text-on-neutral-low-cta);
}

.chat-item:not(.active):hover {
  background: var(--fill-primary-0);
  box-shadow: 0px 2px 8px 0px #0000001f;
}

.chat-item:not(.active):active {
  background: var(--fill-primary-1);
}
</style>
