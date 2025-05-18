<script setup lang="ts">
const login = () => {
  navigateTo("/chats");
};
</script>

<template>
  <div class="login">
    <div>
      <h1 class="title-1">Área de Login</h1>
      <p class="body-1">Faça login para acessar nosso super-aplicativo</p>
    </div>
    <AppButton variation="primary" @click="login"
      >Fazer login com a Huggy</AppButton
    >
  </div>
</template>

<style scoped>
.login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 64px;
}

h1 {
  color: var(--text-on-neutral-low-cta);
}

p {
  color: var(--text-on-neutral-low-default);
}
</style>
