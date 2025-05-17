<script setup lang="ts">
import type { Chat } from "~/types/chat.interface";
import type { Message } from "~/types/message.interface";

const chats = ref<Chat[]>([] as Chat[]);
const messages = ref<Message[]>([] as Message[]);
const selectedChat = ref<Chat>();

const getChats = async () => {
  const response: Chat[] = await $fetch("/api/chats");

  chats.value = response;
};

const getSelectedChat = async (chat: Chat) => {
  selectedChat.value = chat;

  const response: Message[] = await $fetch(`/api/chats/${chat.id}/messages`);

  messages.value = response;
};

onMounted(() => {
  getChats();
});
</script>

<template>
  <main>
    <MyChats :chats="chats" @select-chat="getSelectedChat" />

    <ChatContainer
      v-if="selectedChat"
      :chat="selectedChat"
      :messages="messages"
    />
    <EmptyContainer v-else />
  </main>
</template>

<style scoped>
main {
  display: flex;
}
</style>
