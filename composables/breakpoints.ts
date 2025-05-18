export function useBreakpoints() {
  const innerWidth = ref<number>(0);
  const isMobile = computed(() => innerWidth.value < 768);

  const browserResize = () => {
    innerWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener("resize", browserResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", browserResize);
  });

  return { isMobile };
}
