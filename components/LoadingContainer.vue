<script setup lang="ts"></script>

<template>
  <div class="loading-container">
    <span class="loader" />
  </div>
</template>

<style scoped>
.loading-container {
  background: var(--fill-neutral-low-1);
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid var(--border-neutral-4);
  border-bottom-color: var(--fill-primary-4);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
