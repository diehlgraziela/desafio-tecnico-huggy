<script setup lang="ts">
const getChats = async () => {
  const response = await $fetch("/api/chats");

  console.log(response);
};
</script>

<template>
  <div>
    <AppButton variation="primary" @click="getChats"> Chats </AppButton>
  </div>
</template>

<style scoped></style>
