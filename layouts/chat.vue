<script setup lang="ts">
import type { Chat } from "~/types/chat.interface";

const chats = ref<Chat[]>([]);
const chatId = Number(useRoute().params.id);

const getChats = async () => {
  chats.value = await $fetch("/api/chats");
};

const getSelectedChat = async (id: number) => {
  try {
    if (id === chatId) return;

    await $fetch(`/api/chats/${id}`);

    console.log("passou do if");
    navigateTo(`/chats/${id}`);
  } catch (error) {
    navigateTo("/chats");
    console.error(error);
  }
};

onMounted(() => {
  getChats();
});
</script>

<template>
  <main>
    <MyChats :chats="chats" @select-chat="getSelectedChat" />
    <slot />
  </main>
</template>

<style scoped>
main {
  display: flex;
}
</style>
