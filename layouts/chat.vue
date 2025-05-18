<script setup lang="ts">
import type { Chat } from "~/types/chat.interface";

const route = useRoute();
const accessToken = useCookie("access_token");

const chatId = Number(useRoute().params.id);

const chats = ref<Chat[]>([]);
const loadingChats = ref<boolean>(false);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const getChats = async () => {
  const response: Chat[] = await $fetch("/api/chats");
  chats.value = response;
};

const getSelectedChat = async (id: number) => {
  loadingChats.value = true;
  try {
    if (id === chatId) return;

    await $fetch(`/api/chats/${id}`);

    navigateTo(`/chats/${id}`);
  } catch (error) {
    navigateTo("/chats");
    console.error(error);
  } finally {
    loadingChats.value = false;
  }
};

const getAccessToken = async () => {
  const code = route.query.code;

  if (!code || accessToken.value) return;

  const response = await $fetch("/api/auth/accessToken", {
    method: "POST",
    body: {
      code,
    },
  });

  if (response) {
    navigateTo("/chats", { replace: true });
  }
};

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false;
  }
);

onMounted(async () => {
  await getAccessToken();
  getChats();
});
</script>

<template>
  <main>
    <header class="hamburguer">
      <AppButton variation="icon" icon="cta" @click="toggleMenu">
        <img src="/assets/menu-icon.png" />
      </AppButton>
    </header>
    <MyChats
      :chats="chats"
      :loading="loadingChats"
      :open="isMenuOpen"
      @close="toggleMenu"
      @select-chat="getSelectedChat"
    />
    <slot />
  </main>
</template>

<style scoped>
main {
  display: flex;
}

.hamburguer {
  display: none;
  padding: 16px;
}

@media (max-width: 768px) {
  .hamburguer {
    display: block;
  }
}
</style>
