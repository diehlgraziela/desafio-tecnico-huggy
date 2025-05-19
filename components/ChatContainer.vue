<script setup lang="ts">
import type { Chat } from "~/types/chat.interface";
import type { Message } from "~/types/message.interface";

defineProps<{
  chat: Chat;
  messages: Message[];
}>();

const emit = defineEmits(["sendText"]);

const text = ref<string>("");
const image = ref<string>("");
const end = ref<HTMLElement | null>(null);

const sendText = async () => {
  emit("sendText", text.value, image.value);

  text.value = "";
  image.value = "";
};

onMounted(() => {
  if (end.value) end.value.scrollIntoView({ behavior: "smooth" });
});

onUpdated(() => {
  if (end.value) end.value.scrollIntoView({ behavior: "smooth" });
});
</script>

<template>
  <section class="chat-container">
    <header class="header">
      <AppAvatar :src="chat.chatCustomer.photo" variation="small" />
      <h3 class="body-1-bold">{{ chat.chatCustomer.name }}</h3>
    </header>

    <div class="messages">
      <div class="spacer" />

      <MessageCard
        v-for="message in messages"
        :key="message.id"
        :message="message.text"
        :image="message.file"
        :time="message.sendAt"
        :sender="message.senderType"
      />

      <div ref="end" />
    </div>

    <div class="writing-section">
      <WritingBar v-model:text="text" v-model:image="image" />
      <AppButton
        variation="success"
        :disabled="!text && !image"
        @click="sendText"
      >
        Enviar
      </AppButton>
    </div>
  </section>
</template>

<style scoped>
.chat-container {
  background: var(--fill-neutral-low-1);
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.header {
  background: var(--fill-neutral-low-0);
  box-shadow: 0 2px 8px 0 #0000000a;
  height: var(--header-height);
  padding: 16px;

  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.header h3 {
  color: var(--text-on-color-low-strong);
}

.messages {
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.spacer {
  margin-top: auto;
}

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
