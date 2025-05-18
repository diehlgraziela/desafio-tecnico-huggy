export default defineNuxtRouteMiddleware(async (to, _) => {
  const accessToken = useCookie("access_token");

  if (to.query.code) {
    try {
      await $fetch("/api/auth/accessToken", {
        method: "POST",
        body: {
          code: to.query.code,
        },
      });

      return navigateTo("/chats");
    } catch (error) {
      console.error(error);
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
