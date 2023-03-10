import type { Meta, StoryObj } from "@storybook/react";

import { Scene } from "./scene";

const meta: Meta<typeof Scene> = {
  title: "Scene",
  component: Scene,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Scene>;

export const GoodMorning: Story = {
  args: {
    name: "Good Morning",
    active: true,
    setActive: (active) => {
      console.dir(active);
    },
  },
};
export const GoodNight: Story = {
  args: {
    name: "Good Night",
    active: true,
    setActive: (active) => {
      console.dir(active);
    },
  },
};
export const Romantic: Story = {
  args: {
    name: "Romance",
    active: true,
    setActive: (active) => {
      console.dir(active);
    },
  },
};
export const Other: Story = {
  args: {
    name: "Other",
    active: true,
    setActive: (active) => {
      console.dir(active);
    },
  },
};
