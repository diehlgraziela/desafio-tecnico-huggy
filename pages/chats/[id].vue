<script setup lang="ts">
import type { Chat } from "~/types/chat.interface";
import type { Message } from "~/types/message.interface";

definePageMeta({
  layout: "chat",
  middleware: "auth",
});
useSeoMeta({
  title: "Atendimentos",
  ogTitle: "Atendimentos",
});

const messages = ref<Message[]>([] as Message[]);
const selectedChat = ref<Chat>();
const chatId = Number(useRoute().params.id);

const getSelectedChat = async (id: number) => {
  try {
    const response: Chat = await $fetch<unknown>(`/api/chats/${id}`);
    selectedChat.value = response;
  } catch (error) {
    navigateTo("/chats");
    console.error(error);
  }
};

const getMessages = async (id: number) => {
  try {
    const response: Message[] = await $fetch(`/api/chats/${id}/messages`, {
      method: "GET",
    });

    messages.value = response.reverse();
  } catch (error) {
    console.error(error);
  }
};

const sendText = async (text: string, image?: string) => {
  try {
    await $fetch(`/api/chats/${selectedChat.value?.id}/messages`, {
      method: "POST",
      body: {
        text,
        file: image,
      },
    });

    getMessages(chatId);
  } catch (error) {
    console.error(error);
  }
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
  <LoadingContainer v-else />
</template>

<style scoped></style>
