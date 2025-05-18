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

const getSelectedChat = async (id: number) => {
  try {
    const response: Chat = await $fetch<unknown>(`/api/chats/${id}`);
    selectedChat.value = response;
  } catch (error) {
    navigateTo("/chats");
    console.error(error);
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

    messages.value = response.reverse();
  } catch (error) {
    console.error(error);
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
    console.error(error);
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
