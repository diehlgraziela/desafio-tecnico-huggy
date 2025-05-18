export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event);

  if (process.env.NODE_ENV === "development") {
    return sendRedirect(event, "http://localhost:3000/chats");
  }

  const query = new URLSearchParams({
    scope: "install_app read_agent_profile",
    response_type: "code",
    redirect_uri: config.callbackUrl,
    client_id: config.clientId,
  });

  const url = `https://auth.huggy.app/oauth/authorize?${query.toString()}`;
  return sendRedirect(event, url);
});
