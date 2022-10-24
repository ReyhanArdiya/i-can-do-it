import { Box, ChakraProvider } from "@chakra-ui/react";
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

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const { pathname } = router;
    const inAppRoutes = pathname !== "/intro" && pathname !== "/auth";

    const [user, setUser] = useState<User | null>(null);
    useEffect(() => onAuthStateChanged(auth, user => setUser(user)), []);

    let footerBg: string;
    if (pathname === "") {
        footerBg = "blue.100";
    } else if (pathname === "") {
        footerBg = "red.100";
    } else {
        footerBg = "yellow.100";
    }

    // Navbar change style based on scroll
    const navbarRef = useRef<HTMLDivElement>(null);
    const { isScrolled } = useIsScrolled(
        navbarRef as MutableRefObject<HTMLDivElement>
    );

    return (
        <ChakraProvider theme={theme}>
            {inAppRoutes && (
                <Navbar
                    scrolled={isScrolled}
                    ref={navbarRef}
                    articleIconHref="/#articles"
                    gameIconHref="/#games"
                    logoHref="/"
                    userAvatarHref="/profile"
                    userAvatarPicSrc={user?.photoURL || ""}
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
                    bg={footerBg}
                />
            )}
        </ChakraProvider>
    );
};

export default MyApp;
