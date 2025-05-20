export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const accessToken =
    config.public.env === "development"
      ? config.accessToken
      : getCookie(event, "access_token");

  const result = await $fetch("https://api.huggy.app/v3/chats", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return result;
});
