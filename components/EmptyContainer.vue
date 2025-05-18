<script setup lang="ts"></script>

<template>
  <div class="empty-container">
    <h3 class="title-1">Bem-vindo!</h3>
    <p class="body-1-regular">
      Escolha uma mensagem para continuar um atendimento.
    </p>
  </div>
</template>

<style scoped>
.empty-container {
  background: var(--fill-neutral-low-1);
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
}

h3 {
  color: var(--text-on-neutral-low-cta);
}

p {
  color: var(--text-on-neutral-low-default);
}
</style>
