<script setup lang="ts">
defineProps<{
  message: string;
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
      <p>{{ message }}</p>
    </div>
    <span class="time caption-1">
      {{ getTime(time) }}
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
}

.message.contact {
  align-self: flex-start;
  max-width: 60%;
  background-color: var(--fill-neutral-low-0);
  border: 1px solid var(--border-neutral-2);
  color: var(--text-on-neutral-low-strong);
  border-radius: 6px 6px 6px 2px;
}

.message.agent {
  align-self: flex-end;
  max-width: 60%;
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
</style>
