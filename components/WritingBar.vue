<script setup lang="ts">
import uploadIcon from "~/assets/upload-icon.png";
import deleteIcon from "~/assets/delete-icon.png";
import { uploadImageFile } from "~/services/message";

const emit = defineEmits(["input", "uploadImage"]);

const text = defineModel<string>("text");
const image = defineModel<string>("image");
const textareaRef = ref<HTMLTextAreaElement | null>(null);
const fileInputRef = ref<HTMLInputElement | null>(null);

const focus = () => {
  textareaRef.value?.focus();
};

const handleImageUpload = () => {
  if (image.value) {
    image.value = "";
    return;
  }

  fileInputRef.value?.click();
};

const uploadImage = async (file: File) => {
  try {
    const response = await uploadImageFile(file);
    emit("uploadImage", response);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    uploadImage(file);
  }
};
</script>

<template>
  <div class="textarea-container" @click="focus">
    <textarea
      ref="textareaRef"
      v-model="text"
      placeholder="Escreva sua mensagem..."
    />
    <div :class="['upload-image', { 'border-top': image }]">
      <div v-if="image" class="image-container">
        <img :src="image" />
      </div>

      <AppButton
        class="upload-button"
        variation="icon"
        :icon="image ? 'danger' : 'cta'"
        @click="handleImageUpload"
      >
        <img :src="image ? deleteIcon : uploadIcon" />
      </AppButton>
    </div>

    <input
      ref="fileInputRef"
      type="file"
      accept="image/*"
      hidden
      @change="handleFileChange"
    />
  </div>
</template>

<style scoped>
.textarea-container {
  border: 1px solid var(--border-neutral-1);
  border-radius: 4px;
  padding: 8px;
  padding-bottom: 0;
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
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  font-size: 24px;
  width: 100%;
  padding: 8px 0;
}

.upload-button {
  align-self: flex-end;
}

.image-container {
  width: 80px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 8px;
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.border-top {
  border-top: 1px solid var(--border-neutral-1);
}
</style>
