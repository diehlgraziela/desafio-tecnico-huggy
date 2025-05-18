export default defineEventHandler(async (event) => {
  const accessToken = getCookie(event, "access_token");

  const { id } = event.context.params!;

  const response = await $fetch(
    `https://api.huggy.app/v3/chats/${id}/messages`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response;
});
