export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { id } = event.context.params!;

  const response = await $fetch(
    `https://api.huggy.app/v3/chats/${id}/messages`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.apiSecret}`,
      },
    }
  );

  return response;
});
