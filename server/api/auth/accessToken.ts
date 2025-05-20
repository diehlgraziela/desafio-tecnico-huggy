import type { Token } from "~/types/auth.interface";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event);

  if (!body?.code) {
    throw createError({ statusCode: 400, statusMessage: "Missing code" });
  }

  const response: Token = await $fetch(
    "https://auth.huggy.app/oauth/access_token",
    {
      method: "POST",
      body: {
        grant_type: "authorization_code",
        redirect_uri: config.callbackUrl,
        client_id: config.clientId,
        client_secret: config.clientSecret,
        code: body.code,
      },
    }
  );

  setCookie(event, "teste", "passou o teste", {
    expires: new Date(Date.now() + 3600 * 1000),
  });
  setCookie(event, "access_token", response.access_token, {
    expires: new Date(Date.now() + response.expires_in * 1000),
  });

  return response;
});
