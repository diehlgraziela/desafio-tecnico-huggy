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

  const response: Message[] = await $fetch(`/api/chats/${chat.id}/messages`, {
    method: "GET",
  });

  messages.value = response.reverse();
};

const sendText = async (text: string) => {
  await $fetch(`/api/chats/${selectedChat.value?.id}/messages`, {
    method: "POST",
    body: {
      text,
    },
  });

  getSelectedChat(selectedChat.value!);
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
      @send-text="sendText"
    />
    <EmptyContainer v-else />
  </main>
</template>

<style scoped>
main {
  display: flex;
}
</style>
