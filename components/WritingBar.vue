<script setup lang="ts">
const emit = defineEmits(["input"]);

const textareaRef = ref<HTMLTextAreaElement | null>(null);
const fileInputRef = ref<HTMLInputElement | null>(null);
const message = ref<string>("");

const focus = () => {
  textareaRef.value?.focus();
};

const handleMessageInput = () => {
  emit("input", message.value);
};

const handleImageUpload = () => {
  fileInputRef.value?.click();
};
</script>

<template>
  <div class="textarea-container" @click="focus">
    <textarea
      ref="textareaRef"
      v-model="message"
      placeholder="Escreva sua mensagem..."
      @input="handleMessageInput"
    />
    <AppButton
      variation="icon"
      icon="cta"
      class="upload-image"
      @click="handleImageUpload"
    >
      <img src="/assets/image-icon.png" />
    </AppButton>

    <input ref="fileInputRef" type="file" hidden />
  </div>
</template>

<style scoped>
.textarea-container {
  border: 1px solid var(--border-neutral-1);
  border-radius: 4px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  cursor: text;
}
.textarea-container:active,
.textarea-container:focus-within {
  box-shadow: 0 2px 8px 0 #0000001f;
}
textarea {
  resize: none;
  border: none;
  outline: none;
  width: 100%;
  padding: 4px 12px;
}
textarea::placeholder {
  color: var(--text-on-neutral-low-strong);
  font-size: var(--body-1);
}
.upload-image {
  align-self: flex-end;
  font-size: 24px;
}
</style>
