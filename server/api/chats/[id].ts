export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const accessToken = config.devMode
    ? config.apiSecret
    : getCookie(event, "access_token");

  const { id } = event.context.params!;

  const response = await $fetch(`https://api.huggy.app/v3/chats/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
});
