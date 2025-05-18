import { describe, test, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import ChatLayout from "~/layouts/chat.vue";

describe("Chat Layout mounts", () => {
  test("Mounts correctly", () => {
    beforeEach(() => {
      vi.stubGlobal("$fetch", vi.fn().mockResolvedValue([]));
    });

    const wrapper = mount(ChatLayout, {
      global: {
        mocks: {
          useRoute: () => ({
            query: {},
            params: { id: "1" },
            path: "/chats",
          }),
          useCookie: () => ({ value: undefined }),
          navigateTo: vi.fn(),
        },
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
