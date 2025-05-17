<script setup lang="ts">
import type { Chat } from "~/types/chat.interface";

defineProps<{
  chat: Chat;
}>();

const end = ref<HTMLElement | null>(null);

onMounted(() => {
  if (end.value) end.value.scrollIntoView({ behavior: "smooth" });
});

onUpdated(() => {
  if (end.value) end.value.scrollIntoView({ behavior: "smooth" });
});
</script>

<template>
  <section class="chat-container">
    <header class="header">
      <AppAvatar :src="chat.chatCustomer.photo" variation="small" />
      <h3 class="body-1-bold">{{ chat.chatCustomer.name }}</h3>
    </header>

    <div class="messages">
      <div class="spacer" />

      <MessageCard :message="'oie, bão?'" :time="'08:57'" :sender="'user'" />

      <div ref="end" />
    </div>

    <WritingSection />
  </section>
</template>

<style scoped>
.chat-container {
  background: var(--fill-neutral-low-1);
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.header {
  background: var(--fill-neutral-low-0);
  box-shadow: 0 2px 8px 0 #0000000a;
  height: var(--header-height);
  padding: 16px;

  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.header h3 {
  color: var(--text-on-color-low-strong);
}

.messages {
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.spacer {
  margin-top: auto;
}
</style>
