import { Box, ChakraProvider, VStack } from "@chakra-ui/react";
import { onAuthStateChanged, User } from "firebase/auth";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import HelpMenu from "../components/HelpMenu";
import Navbar from "../components/Navbar";
import useIsScrolled from "../hooks/use-is-scrolled";
import theme from "../theme";
import { auth } from "../utils/firebase/get-firebase-client";
import "../styles.css";
import { QuizzContextProvider } from "../context/quizz-context";

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const { pathname } = router;
    const inAppRoutes = pathname !== "/intro" && pathname !== "/auth";

    const [user, setUser] = useState<User | null>(null);
    useEffect(() => onAuthStateChanged(auth, user => setUser(user)), []);

    let bg: string;
    if (["/quizzes/[quizzId]/playername"].includes(pathname)) {
        bg = "blue.100";
    } else if (["/quizzes/[quizzId]"].includes(pathname)) {
        bg = "sienna.100";
    } else {
        bg = "yellow.100";
    }

    // Navbar change style based on scroll
    const navbarRef = useRef<HTMLDivElement>(null);
    const { isScrolled } = useIsScrolled(
        navbarRef as MutableRefObject<HTMLDivElement>
    );

    return (
        <ChakraProvider theme={theme}>
            <QuizzContextProvider>
                <VStack
                    bg={bg}
                    spacing="6"
                    justify="space-between"
                    w="full"
                    minH="100vh"
                >
                    {inAppRoutes && (
                        <Navbar
                            scrolled={isScrolled}
                            ref={navbarRef}
                            articleIconHref="/#articles"
                            gameIconHref="/#games"
                            logoHref="/"
                            userAvatarHref="/profile"
                            userAvatarPicSrc={user?.photoURL || ""}
                            bg={bg}
                        />
                    )}

                    <Box
                        pos="fixed"
                        bottom="4"
                        left="4"
                    >
                        <HelpMenu onTextClick={() => 1} />
                    </Box>

                    <Component {...pageProps} />

                    {inAppRoutes && (
                        <Footer
                            iconLink="/"
                            emailLink="mailto:mreyhanapwsw@gmail.com"
                            whatsappLink="wa.me:085161112684"
                            bg={bg}
                        />
                    )}
                </VStack>
            </QuizzContextProvider>
        </ChakraProvider>
    );
};

export default MyApp;
