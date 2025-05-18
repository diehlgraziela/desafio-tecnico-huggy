export default defineNuxtRouteMiddleware((to, _) => {
  const accessToken = useCookie("access_token");

  if (to.query.code) {
    return;
  }

  if (!accessToken.value && to.path !== "/") {
    return navigateTo("/");
  }

  if (accessToken.value && to.path === "/") {
    return navigateTo("/chats");
  }
});
