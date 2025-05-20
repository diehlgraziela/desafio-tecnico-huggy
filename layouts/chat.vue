<script setup lang="ts">
import { fetchChats } from "~/services/chat";
import type { Chat } from "~/types/chat.interface";

const route = useRoute();

const chats = ref<Chat[]>([]);
const loadingChats = ref<boolean>(false);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const getChats = async () => {
  loadingChats.value = true;
  try {
    chats.value = await fetchChats();
  } catch (error) {
    console.error("Error fetching chats:", error);
  } finally {
    loadingChats.value = false;
  }
};

const getSelectedChat = async (chatId: number) => {
  navigateTo(`/chats/${chatId}`);
};

const updateLastMessage = (chatId: number, message: string) => {
  const chat = chats.value.find((c) => c.id === chatId);

  if (chat) {
    chat.lastMessage.text = message;
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

provide("updateLastMessage", updateLastMessage);
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
    position: absolute;
    right: 0;
  }
}
</style>
