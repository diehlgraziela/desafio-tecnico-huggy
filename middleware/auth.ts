import { callWithNuxt } from "#app";

export default defineNuxtRouteMiddleware(async (to, _) => {
  const nuxtApp = useNuxtApp();
  const route = useRoute();
  const accessToken = useCookie("access_token");

  if (to.query.code && !accessToken.value) {
    try {
      const code = route.query.code;

      if (!code || accessToken.value) return;

      const response = await $fetch("/api/auth/accessToken", {
        method: "POST",
        body: {
          code,
        },
      });

      if (response) {
        return callWithNuxt(nuxtApp, navigateTo, ["/chats"]);
      }
    } catch (error) {
      console.error(error);
      return callWithNuxt(nuxtApp, navigateTo, ["/chats"]);
    }
  }

  if (!accessToken.value && to.path !== "/") {
    return navigateTo("/");
  }

  if (accessToken.value && to.path === "/") {
    return navigateTo("/chats");
  }
});
