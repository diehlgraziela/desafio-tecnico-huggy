export default defineNuxtRouteMiddleware((to, _) => {
  const accessToken = useCookie("access_token");

  if (to.query.code) {
    return navigateTo("/chats", { replace: true });
  }

  if (!accessToken.value && to.path !== "/") {
    return navigateTo("/");
  }

  if (accessToken.value && to.path === "/") {
    return navigateTo("/chats");
  }
});
