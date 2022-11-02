import { action } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import ArticleInputSelectionModalComp, { ArticleInputSelectionModalProps } from ".";

interface Args extends ArticleInputSelectionModalProps {}

const meta: Meta<Args> = {
    component: ArticleInputSelectionModalComp,
    args: {
        isOpen: true,
        onClose: action("Close modal"),
        onParagraphClick: action("Add paragraph input"),
        onPictureClick: action("Add picture input"),
    },
};

export const ArticleInputSelectionModal: StoryFn<Args> = args => (
    <ArticleInputSelectionModalComp {...args} />
);

export default meta;
