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

const route = useRoute();
const messages = ref<Message[]>([] as Message[]);
const selectedChat = ref<Chat>();

const routeChatId = computed(() => Number(route.params.id));

const getSelectedChat = async (chatId: number) => {
  try {
    const response: Chat = await $fetch<unknown>(`/api/chats/${chatId}`);
    selectedChat.value = response;
  } catch (error) {
    navigateTo("/chats");
    console.error("Error fetching selected chat:", error);
  }
};

const getMessages = async (chatId: number) => {
  try {
    const response: Message[] = await $fetch<unknown>(
      `/api/messages/${chatId}`,
      {
        method: "GET",
      }
    );

    messages.value = response?.length > 1 ? response.reverse() : response;
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};

const sendText = async (text: string, image?: string) => {
  try {
    await $fetch(`/api/messages/${selectedChat.value?.id}`, {
      method: "POST",
      body: {
        text,
        file: image,
      },
    });

    getMessages(routeChatId.value);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

onMounted(async () => {
  getMessages(routeChatId.value);
  getSelectedChat(routeChatId.value);
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
