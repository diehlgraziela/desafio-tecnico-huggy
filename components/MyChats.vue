<script setup lang="ts">
import type { Chat } from "~/types/chat.interface";

defineProps<{
  chats: Chat[];
}>();

const emit = defineEmits(["selectChat"]);

const chatId = Number(useRoute().params.id);

const selectChat = (chatId: number) => {
  emit("selectChat", chatId);
};
</script>

<template>
  <aside class="my-chats">
    <header class="header">
      <h1 class="header-title title-2">Minhas mensagens</h1>
    </header>

    <ul class="chats-list">
      <template v-if="chats.length">
        <ChatCard
          v-for="chat in chats"
          :key="chat.id"
          :name="chat.chatCustomer.name"
          :avatar="chat.chatCustomer.photo"
          :last-message="chat.lastMessage.text"
          :active="chat.id === chatId"
          @click="selectChat(chat.id)"
        />
      </template>
      <template v-else>
        <li v-for="n in 3" :key="n" class="skeleton-item">
          <AppSkeleton variation="avatar" />
          <div class="skeleton-info">
            <AppSkeleton variation="text" />
            <AppSkeleton variation="text" width="180px" />
          </div>
        </li>
      </template>
    </ul>
  </aside>
</template>

<style scoped>
.my-chats {
  background: var(--fill-neutral-low-0);
  border-right: 1px solid var(--fill-neutral-low-2);
  min-width: var(--sidebar-width);
  width: var(--sidebar-width);
  height: 100vh;
  padding: 0 8px;
}

.header {
  padding: 16px;
  border-bottom: 1px solid var(--fill-neutral-low-2);
  height: var(--header-height);
}

.header-title {
  color: var(--text-on-neutral-low-cta);
}

.chats-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0;
}

.skeleton-item {
  padding: 8px;
  display: flex;
  gap: 8px;
}

.skeleton-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
