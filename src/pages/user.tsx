import { Skeleton } from "@chakra-ui/react";
import { onIdTokenChanged, User } from "firebase/auth";
import { GetServerSideProps, type NextPage } from "next";
import { useEffect, useState } from "react";
import UserProfilePage from "../components/pages/UserProfilePage";
import { auth } from "../utils/firebase/get-firebase-client";
import { redirectIfNotAuth } from "../utils/redirect";

export const getServerSideProps: GetServerSideProps = redirectIfNotAuth("/auth");

const Page: NextPage = () => {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => onIdTokenChanged(auth, user => setUser(user)), []);

    return user ? (
        <UserProfilePage
            userAvatarSrc={user.photoURL || ""}
            username={user.displayName || "Anon"}
        />
    ) : (
        <Skeleton
            w="full"
            flexGrow="1"
        />
    );
};

export default Page;
