export default defineEventHandler(async (event) => {
  const accessToken = getCookie(event, "access_token");
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
        Authorization: `Bearer ${accessToken}`,
      },
      ...(body && { body }),
    }
  );

  return response;
});
