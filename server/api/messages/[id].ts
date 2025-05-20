export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const method = event.method;
  const accessToken = process.env.NODE_ENV
    ? config.apiSecret
    : getCookie(event, "access_token");

  const { id } = event.context.params!;

  let body;

  if (method !== "GET") {
    body = await readBody(event);
  }

  const response = await $fetch(
    `https://api.huggy.app/v3/chats/${id}/messages`,
    {
      method,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      ...(body && { body }),
    }
  );

  return response;
});
