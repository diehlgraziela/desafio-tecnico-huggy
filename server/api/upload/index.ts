export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const accessToken = config.devMode
    ? config.apiSecret
    : getCookie(event, "access_token");

  const parts = await readMultipartFormData(event);

  const uploadedFile = parts?.find((part) => part.name === "file");

  if (!uploadedFile) {
    return { error: "File not found" };
  }

  const formData = new FormData();

  formData.append(
    "file",
    new File([uploadedFile.data], uploadedFile.filename || "Image", {
      type: uploadedFile.type,
    })
  );

  const response = await fetch("https://api.huggy.app/v3/chats/uploadFile/", {
    method: event.method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  });

  const data = await response.json();

  return data;
});
