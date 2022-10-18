import theme from "../src/theme";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    chakra: {
        theme,
    },
    layout: "fullscreen",
    viewport: {
        viewports: {
            mobile: {
                name: "mobile",
                styles: {
                    width: "320px",
                    height: "568px",
                },
            },

            desktop: {
                name: "desktop",
                styles: {
                    width: "1024px",
                    height: "768px",
                },
            },
        },
    },
};
