export default defineNuxtRouteMiddleware(async (to) => {
  const accessToken = useCookie("access_token");

  if (to.query.code && !accessToken.value) {
    try {
      const code = to.query.code;

      const response = await $fetch("/api/auth/accessToken", {
        method: "POST",
        body: { code },
      });

      if (response?.access_token) {
        accessToken.value = response.access_token;
        return navigateTo("/chats");
      }
    } catch (error) {
      console.error("Erro ao obter token:", error);
      return navigateTo("/");
    }
  }

  if (!accessToken.value && to.path !== "/") {
    return navigateTo("/");
  }

  if (accessToken.value && to.path === "/") {
    return navigateTo("/chats");
  }
});
