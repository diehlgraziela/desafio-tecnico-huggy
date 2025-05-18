<script setup lang="ts">
import type { Token } from "~/types/auth.interface";
import type { Chat } from "~/types/chat.interface";

const route = useRoute();
const accessToken = useCookie("access_token");
const chatId = Number(useRoute().params.id);
const chats = ref<Chat[]>([]);

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

useSeoMeta({
  title: "Atendimentos",
  ogTitle: "Atendimentos",
});

const getAccessToken = async () => {
  const code = route.query.code;

  if (!code || accessToken.value) return;

  const response: Token = await $fetch("/api/auth/accessToken", {
    method: "POST",
    body: {
      code,
    },
  });

  if (response) {
    accessToken.value = response.access_token;

    navigateTo("/chats", { replace: true });
  }
};

onMounted(async () => {
  await getAccessToken();
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
