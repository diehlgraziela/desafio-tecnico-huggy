export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event);

  if (!body?.code) {
    throw createError({ statusCode: 400, statusMessage: "Missing code" });
  }

  const response = await $fetch("https://auth.huggy.app/oauth/access_token", {
    method: "POST",
    body: {
      grant_type: "authorization_code",
      redirect_uri: config.callbackUrl,
      client_id: config.clientId,
      client_secret: config.clientSecret,
      code: body.code,
    },
  });

  return response;
});
