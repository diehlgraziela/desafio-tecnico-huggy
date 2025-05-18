<script setup lang="ts">
import type { Chat } from "~/types/chat.interface";

const route = useRoute();

const chatId = Number(useRoute().params.id);

const chats = ref<Chat[]>([]);
const loadingChats = ref<boolean>(false);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const getChats = async () => {
  const response: Chat[] = await $fetch<unknown>("/api/chats");
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

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false;
  }
);

onMounted(() => {
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
