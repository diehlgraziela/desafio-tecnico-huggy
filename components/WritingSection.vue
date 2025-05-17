<script setup lang="ts"></script>

<template>
  <div class="writing-section">
    <WritingBar />
    <AppButton variation="success">Enviar</AppButton>
  </div>
</template>

<style scoped>
.writing-section {
  background: var(--fill-neutral-low-0);
  box-shadow: 0 -1px 6px 0 #00000008;
  padding: 16px 24px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
}
</style>
