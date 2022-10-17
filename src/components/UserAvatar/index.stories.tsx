import type { Meta, StoryFn } from "@storybook/react";
import UserAvatarComp, { UserAvatarProps } from ".";

interface Args extends UserAvatarProps {}

const meta: Meta<Args> = {
    component: UserAvatarComp,
    args: {
        href: "",
    },
};

export const UserAvatar: StoryFn<Args> = args => <UserAvatarComp {...args} />;

export default meta;
