import type { Chat } from "~/types/chat.interface";

export const fetchChats = async () => {
  return await $fetch<Chat[]>("/api/chats");
};

export const fetchChatById = async (id: number) => {
  return await $fetch<Chat>(`/api/chats/${id}`);
};
