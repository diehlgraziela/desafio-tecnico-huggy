<script setup lang="ts">
import { fetchChatById } from "~/services/chat";
import { fetchMessages, sendTextMessage } from "~/services/message";
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

const updateLastMessage = inject("updateLastMessage") as (
  id: number,
  message: string
) => void;

const getSelectedChat = async (chatId: number) => {
  try {
    selectedChat.value = await fetchChatById(chatId);
  } catch (error) {
    navigateTo("/chats");
    console.error("Error fetching selected chat:", error);
  }
};

const getMessages = async (chatId: number) => {
  try {
    const response = await fetchMessages(chatId);
    messages.value = response?.length > 1 ? response.reverse() : response;
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};

const sendMessage = async (text: string, image?: string) => {
  try {
    await sendTextMessage(routeChatId.value, text, image);

    getMessages(routeChatId.value);

    console.log(image);

    const hasImage = image;
    const message = sliceString(text, 20);

    updateLastMessage(
      routeChatId.value,
      hasImage ? `📷 ${message || "Imagem"}` : message
    );
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
    @send-message="sendMessage"
  />
  <LoadingContainer v-else />
</template>

<style scoped></style>
