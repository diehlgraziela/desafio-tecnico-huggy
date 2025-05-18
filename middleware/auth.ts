export default defineNuxtRouteMiddleware((to, from) => {
  const accessToken = useCookie("access_token");

  if (!accessToken.value && to.path !== "/") {
    return navigateTo("/");
  }

  if (accessToken.value && to.path === "/") {
    return navigateTo("/chats");
  }
});
