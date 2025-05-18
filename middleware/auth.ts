import type { Token } from "~/types/auth.interface";

export default defineNuxtRouteMiddleware(async (to, _) => {
  const accessToken = useCookie("access_token");

  if (to.query.code) {
    try {
      const response: Token = await $fetch("/api/auth/accessToken", {
        method: "POST",
        body: {
          code: to.query.code,
        },
      });

      accessToken.value = response.access_token;

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
