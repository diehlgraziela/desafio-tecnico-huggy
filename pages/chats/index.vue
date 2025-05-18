<script setup lang="ts">
definePageMeta({
  layout: "chat",
});

useSeoMeta({
  title: "Atendimentos",
  ogTitle: "Atendimentos",
});

const route = useRoute();
const accessToken = useCookie<string | null>("access_token");

onMounted(async () => {
  const code = route.query.code;

  if (!code) return;

  const response = await $fetch("/api/auth/accessToken", {
    method: "POST",
    body: {
      code,
    },
  });

  accessToken.value = response.access_token;

  navigateTo("/chats");
});
</script>

<template>
  <EmptyContainer />
</template>
