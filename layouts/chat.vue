<script setup lang="ts">
import type { Chat } from "~/types/chat.interface";

const route = useRoute();

const chats = ref<Chat[]>([]);
const loadingChats = ref<boolean>(false);
const isMenuOpen = ref(false);

const routeChatId = computed(() => Number(route.params.id));

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const getChats = async () => {
  loadingChats.value = true;
  try {
    const response: Chat[] = await $fetch<unknown>("/api/chats");
    chats.value = response;
  } catch (error) {
    console.error("Error fetching chats:", error);
  } finally {
    loadingChats.value = false;
  }
};

const getSelectedChat = async (chatId: number) => {
  try {
    if (chatId === routeChatId.value) return;

    await $fetch(`/api/chats/${chatId}`);

    navigateTo(`/chats/${chatId}`);
  } catch (error) {
    navigateTo("/chats");
    console.error("Error fetching selected chat:", error);
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
