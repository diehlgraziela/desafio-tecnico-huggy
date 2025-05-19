import AppAvatar from "~/components/AppAvatar.vue";
import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("AppAvatar", () => {
  test("Has 'src' prop", () => {
    const wrapper = mount(AppAvatar, {
      props: {
        src: "https://placehold.co/100",
      },
    });

    expect(wrapper.props().src).toBe("https://placehold.co/100");
  });

  test("Applies 'small' class if variation is equal to 'small'", () => {
    const wrapper = mount(AppAvatar, {
      props: {
        src: "https://placehold.co/100",
        variation: "small",
      },
    });

    expect(wrapper.classes()).toContain("small");
  });

  test("Applies 'big' class if variation is equal to 'big'", () => {
    const wrapper = mount(AppAvatar, {
      props: {
        src: "https://placehold.co/100",
        variation: "big",
      },
    });

    expect(wrapper.classes()).toContain("big");
  });
});
