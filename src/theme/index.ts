import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import shadows from "./shadows";
import textStyles from "./text-styles";

const theme = extendTheme({
    colors,
    textStyles,
    shadows,
});

export default theme;
