export default defineEventHandler(async (event) => {
  const accessToken = getCookie(event, "access_token");

  console.log("accessToken", accessToken);

  const result = await $fetch("https://api.huggy.app/v3/chats", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return result;
});
