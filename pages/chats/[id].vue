<script setup lang="ts">
import type { Chat } from "~/types/chat.interface";
import type { Message } from "~/types/message.interface";

definePageMeta({
  layout: "chat",
});

const messages = ref<Message[]>([] as Message[]);
const selectedChat = ref<Chat>();
const chatId = Number(useRoute().params.id);

const getSelectedChat = async (id: number) => {
  try {
    const response: Chat = await $fetch(`/api/chats/${id}`);
    selectedChat.value = response;
  } catch (error) {
    navigateTo("/chats");
    console.error(error);
  }
};

const getMessages = async (id: number) => {
  const response: Message[] = await $fetch(`/api/chats/${id}/messages`, {
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

  getMessages(chatId);
};

onMounted(async () => {
  getMessages(chatId);
  getSelectedChat(chatId);
});
</script>

<template>
  <ChatContainer
    v-if="selectedChat"
    :chat="selectedChat"
    :messages="messages"
    @send-text="sendText"
  />
  <div v-else>Carregando...</div>
</template>

<style scoped></style>
