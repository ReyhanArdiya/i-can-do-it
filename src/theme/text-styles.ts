import type { StyleProps } from "@chakra-ui/react";

// REFAC could change lineheight to use rem, but not MVP rn
const textStyles: Record<string, StyleProps> = {
    h1: {
        fontFamily: "Just Another Hand",
        fontSize: "4xl",
        fontStyle: "normal",
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 43.2,
        textDecoration: "none",
    },
    h2: {
        fontFamily: "Sniglet",
        fontSize: "2xl",
        fontStyle: "normal",
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 28.8,
        textDecoration: "none",
    },
    h3: {
        fontFamily: "Sniglet",
        fontSize: "xl",
        fontStyle: "normal",
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 24,
        textDecoration: "none",
    },
    body: {
        fontFamily: "Hind Vadodara",
        fontSize: "md",
        fontStyle: "normal",
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 19.2,
        textDecoration: "none",
    },
    input: {
        fontFamily: "Sniglet",
        fontSize: "sm",
        fontStyle: "normal",
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 16.8,
        textDecoration: "none",
    },
    small: {
        fontFamily: "Hind Vadodara",
        fontSize: "xs",
        fontStyle: "normal",
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 14.4,
        textDecoration: "none",
    },
};

export default textStyles;
