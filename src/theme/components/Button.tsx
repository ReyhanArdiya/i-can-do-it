import { ComponentStyleConfig } from "@chakra-ui/react";

export enum ButtonSizes {}

export enum ButtonVariants {}

const Button: ComponentStyleConfig = {
    baseStyle: {
        textStyle: "body",
        fontWeight: "bold",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: "base",
        bg: "yellow.500",
        _hover: {
            bg: "yellow.300",
        },
        _active: {
            bg: "yellow.500",
        },
    },
    sizes: {
        md: {
            px: "6",
            py: "2.5",
            lineHeight: "6",
            minH: "44px",
        },
    },

    defaultProps: {
        variant: null,
    },
};

export default Button;
