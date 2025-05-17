<script setup lang="ts">
defineProps<{
  message: string;
  image?: string | null;
  time: string;
  sender: "contact" | "agent" | string;
}>();
</script>

<template>
  <div :class="['message-card']">
    <div
      :class="[
        'message',
        { contact: sender === 'contact' },
        { agent: sender === 'agent' },
      ]"
    >
      <div v-if="image" class="image-container">
        <img :src="image" />
      </div>
      <p>{{ message }}</p>
    </div>
    <span class="time caption-1">
      {{ getDateTime(time) }}
    </span>
  </div>
</template>

<style scoped>
.message-card {
  display: flex;
  flex-direction: column;
  padding: 8px 0;
}

.message {
  padding: 14px 20px;
  max-width: 60%;
}

.message p {
  word-break: break-word;
}

.message.contact {
  align-self: flex-start;
  background-color: var(--fill-neutral-low-0);
  border: 1px solid var(--border-neutral-2);
  color: var(--text-on-neutral-low-strong);
  border-radius: 6px 6px 6px 2px;
}

.message.agent {
  align-self: flex-end;
  background-color: var(--fill-primary-3);
  border: 1px solid var(--border-primary-1);
  color: var(--text-on-color-high-strong);
  border-radius: 6px 6px 2px 6px;
}

.message.agent ~ .time {
  text-align: end;
}

.time {
  padding: 4px 0;
  color: var(--text-on-neutral-low-strong);
}

.image-container {
  max-width: 100%;
  border-radius: 4px;
  overflow: hidden;
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
