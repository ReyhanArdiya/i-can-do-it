import { Box, ChakraProvider } from "@chakra-ui/react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import HelpMenu from "../components/HelpMenu";
import Navbar from "../components/Navbar";
import theme from "../theme";
import getFirebaseClient from "../utils/firebase/get-firebase-client";

const MyApp = ({ Component, pageProps }: AppProps) => {
    const auth = useMemo(() => getAuth(getFirebaseClient()), []);
    const router = useRouter();
    const inAppRoutes = router.pathname !== "/intro" && router.pathname !== "/auth";

    const [user, setUser] = useState<User | null>(null);
    useEffect(() => onAuthStateChanged(auth, user => setUser(user)), [auth]);

    return (
        <ChakraProvider theme={theme}>
            {inAppRoutes && (
                <Navbar
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
        </ChakraProvider>
    );
};

export default MyApp;
