import { Skeleton } from "@chakra-ui/react";
import { GetServerSideProps, type NextPage } from "next";
import UserProfilePage from "../components/pages/UserProfilePage";
import useGetUser from "../hooks/use-get-user";
import { redirectIfNotAuth } from "../utils/redirect";

export const getServerSideProps: GetServerSideProps = redirectIfNotAuth("/auth");

const Page: NextPage = () => {
    const user = useGetUser();

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
