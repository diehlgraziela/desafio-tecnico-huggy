import type { ImageUpload, Message } from "~/types/message.interface";

export const fetchMessages = async (chatId: number) => {
  return await $fetch<Message[]>(`/api/messages/${chatId}`, {
    method: "GET",
  });
};

export const sendTextMessage = async (
  id: number,
  text: string,
  image?: string
) => {
  return await $fetch<Message>(`/api/messages/${id}`, {
    method: "POST",
    body: {
      text,
      file: image,
    },
  });
};

export const uploadImageFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const data: ImageUpload[] = await response.json();

  return data[0].url;
};
