import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import Button from "./components/Button";
import radii from "./radii";
import shadows from "./shadows";
import textStyles from "./text-styles";

const theme = extendTheme({
    colors,
    textStyles,
    shadows,
    components: {
        Button,
    },
    radii,
});

export default theme;
