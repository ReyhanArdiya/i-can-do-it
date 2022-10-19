import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import HelpMenu from "../components/HelpMenu";
import theme from "../theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Box
                pos="fixed"
                bottom="4"
                left="4"
            >
                <HelpMenu onTextClick={() => 1} />
            </Box>

            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MyApp;
