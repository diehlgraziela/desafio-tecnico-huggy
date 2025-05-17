<script setup lang="ts">
const getChats = async () => {
  const response = await $fetch("/api/chats");

  console.log(response);
};
</script>

<template>
  <main>
    <MyMessages />

    <section>Mensagem</section>
  </main>
</template>

<style scoped></style>
