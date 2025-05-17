<script setup lang="ts">
const chats = ref<any>([]);

const getChats = async () => {
  const response: any[] = await $fetch("/api/chats");

  chats.value = response;
};

onMounted(() => {
  getChats();
});
</script>

<template>
  <main>
    <MyChats :chats="chats" />

    <section>Mensagem</section>
  </main>
</template>

<style scoped></style>
