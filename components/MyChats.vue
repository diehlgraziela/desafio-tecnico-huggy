<script setup lang="ts">
import type { Chat } from "~/types/chat.interface";

defineProps<{
  chats: Chat[];
  loading: boolean;
  open: boolean;
}>();

const emit = defineEmits(["selectChat", "close"]);

const route = useRoute();

const routeChatId = computed(() => Number(route.params.id));

const selectChat = (chatId: number) => {
  emit("selectChat", chatId);
};

const newChat = () => {
  window.open("https://www.huggy.app/panel/chats", "_blank");
};
</script>

<template>
  <aside :class="['my-chats', { open }]">
    <AppButton
      class="close-button"
      variation="icon"
      icon="cta"
      @click="emit('close')"
    >
      <img src="/assets/close-icon.png" />
    </AppButton>

    <header class="header">
      <h1 class="header-title title-2">Minhas mensagens</h1>
    </header>

    <ul class="chats-list">
      <template v-if="chats.length">
        <ChatCard
          v-for="chat in chats"
          :key="chat.id"
          :name="chat.chatCustomer.name"
          :avatar="chat.chatCustomer.photo"
          :last-message="chat.lastMessage.text"
          :last-file="chat.lastMessage.file"
          :active="chat.id === routeChatId"
          @click="selectChat(chat.id)"
        />
      </template>
      <template v-else-if="loading">
        <li v-for="n in 3" :key="n" class="skeleton-item">
          <AppSkeleton variation="avatar" />
          <div class="skeleton-info">
            <AppSkeleton variation="text" />
            <AppSkeleton variation="text" width="180px" />
          </div>
        </li>
      </template>
      <div v-else class="no-chats">
        <AppButton variation="primary" @click="newChat">Novo chat</AppButton>
      </div>
    </ul>
  </aside>
</template>

<style scoped>
.my-chats {
  background: var(--fill-neutral-low-0);
  border-right: 1px solid var(--fill-neutral-low-2);
  min-width: var(--sidebar-width);
  width: var(--sidebar-width);
  height: 100vh;
  padding: 0 8px;
  transition: 0.2s;
  overflow-y: auto;
}

.header {
  padding: 16px;
  border-bottom: 1px solid var(--fill-neutral-low-2);
  height: var(--header-height);
}

.header-title {
  color: var(--text-on-neutral-low-cta);
}

.chats-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0;
}

.skeleton-item {
  padding: 8px;
  display: flex;
  gap: 8px;
}

.skeleton-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.no-chats {
  display: flex;
  justify-content: center;
}

.close-button {
  display: none;
  visibility: hidden;
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  color: var(--text-on-neutral-low-cta);
}

@media (max-width: 768px) {
  .close-button {
    display: block;
    visibility: visible;
  }

  .my-chats {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    border-right: none;
    transform: translateX(-100%);
    display: none;
  }

  .my-chats.open {
    transform: translateX(0);
    display: block;
  }
}
</style>
