<script setup lang="ts">
defineProps<{
  chats: any[];
}>();
</script>

<template>
  <aside class="my-chats">
    <header class="header">
      <h1 class="header-title title-2">Minhas mensagens</h1>
    </header>

    <ul class="chats-list">
      <ChatCard
        v-for="chat in chats"
        :key="chat.id"
        :name="chat.chatCustomer.name"
        :avatar="chat.chatCustomer.photo"
        :last-message="chat.lastMessage.text"
      />
    </ul>
  </aside>
</template>

<style scoped>
.my-chats {
  background: var(--fill-neutral-low-0);
  border-right: 1px solid var(--fill-neutral-low-2);
  width: 300px;
  height: 100vh;
  padding: 0 8px;
}

.header {
  padding: 16px;
  border-bottom: 1px solid var(--fill-neutral-low-2);
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
</style>
