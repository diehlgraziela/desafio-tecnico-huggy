import AppButton from "~/components/AppButton.vue";
import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("AppButton", () => {
  test("Renders slot content", () => {
    const wrapper = mount(AppButton, {
      slots: {
        default: "Hello world",
      },
    });

    expect(wrapper.text()).toContain("Hello world");
  });

  test("Applies  'success' class if variation is 'success'", () => {
    const wrapper = mount(AppButton, {
      props: {
        variation: "success",
      },
    });

    expect(wrapper.classes()).toContain("success");
  });

  test("Applies 'icon' class if variation is equal to 'icon'", () => {
    const wrapper = mount(AppButton, {
      props: {
        variation: "icon",
      },
    });

    expect(wrapper.classes()).toContain("icon");
  });

  test("Applies 'cta' class if icon is equal to 'cta'", () => {
    const wrapper = mount(AppButton, {
      props: {
        icon: "cta",
      },
    });

    expect(wrapper.classes()).toContain("cta");
  });

  test("Applies 'danger' class if icon is equal to 'danger'", () => {
    const wrapper = mount(AppButton, {
      props: {
        icon: "danger",
      },
    });

    expect(wrapper.classes()).toContain("danger");
  });

  test("Applies 'disabled' attribute if disabled prop is equal to 'true'", () => {
    const wrapper = mount(AppButton, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.attributes()).toHaveProperty("disabled");
  });

  test("Emits 'click' event", async () => {
    const wrapper = mount(AppButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
