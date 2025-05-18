<script setup lang="ts">
import type { Token } from "~/types/auth.interface";

definePageMeta({
  layout: "chat",
});

useSeoMeta({
  title: "Atendimentos",
  ogTitle: "Atendimentos",
});

const route = useRoute();
const accessToken = useCookie("access_token");

const getAccessToken = async () => {
  const code = route.query.code;

  if (!code) return;

  const response: Token = await $fetch("/api/auth/accessToken", {
    method: "POST",
    body: {
      code,
    },
  });

  if (response) {
    accessToken.value = response.access_token;
    navigateTo("/chats");
  }
};

onMounted(() => {
  getAccessToken();
});
</script>

<template>
  <EmptyContainer />
</template>
