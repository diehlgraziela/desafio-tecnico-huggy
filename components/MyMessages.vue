<script setup lang="ts"></script>

<template>
  <aside class="my-messages">
    <header class="header">
      <h1 class="header-title title-2">Minhas mensagens</h1>
    </header>

    <ul class="messages-list">
      <ChatCard :name="'João da Silva'" :last-message="'Tudo, e você?'" />
      <ChatCard
        :name="'João da Silva'"
        :last-message="'Tudo, e você?'"
        active
      />
      <ChatCard :name="'João da Silva'" :last-message="'Tudo, e você?'" />
    </ul>
  </aside>
</template>

<style scoped>
.my-messages {
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

.messages-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0;
}
</style>
