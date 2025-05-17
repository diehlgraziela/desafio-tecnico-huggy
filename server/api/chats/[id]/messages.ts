export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const method = event.method;

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
        Authorization: `Bearer ${config.apiSecret}`,
      },
      ...(body && { body }),
    }
  );

  return response;
});
