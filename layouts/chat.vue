<script setup lang="ts">
import type { Chat } from "~/types/chat.interface";

const chats = ref<Chat[]>([]);

const getChats = async () => {
  chats.value = await $fetch("/api/chats");
};

onMounted(() => {
  getChats();
});
</script>

<template>
  <main>
    <MyChats :chats="chats" />
    <slot />
  </main>
</template>

<style scoped>
main {
  display: flex;
}
</style>
