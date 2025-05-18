export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const accessToken = config.apiSecret;

  const result = await $fetch("https://api.huggy.app/v3/chats", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return result;
});
