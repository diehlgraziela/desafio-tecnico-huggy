<script setup lang="ts">
import type { Chat } from "~/types/chat.interface";

const chats = ref<Chat[]>([] as Chat[]);
const selectedChat = ref<Chat>();

const getChats = async () => {
  const response: Chat[] = await $fetch("/api/chats");

  chats.value = response;
};

const getSelectedChat = (chat: Chat) => {
  selectedChat.value = chat;
};

onMounted(() => {
  getChats();
});
</script>

<template>
  <main>
    <MyChats :chats="chats" @select-chat="getSelectedChat" />

    <ChatContainer v-if="selectedChat" :chat="selectedChat" />
    <EmptyContainer v-else />
  </main>
</template>

<style scoped>
main {
  display: flex;
}
</style>
