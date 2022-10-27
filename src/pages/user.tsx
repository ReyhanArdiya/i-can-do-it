import { Skeleton } from "@chakra-ui/react";
import { type NextPage } from "next";
import UserProfilePage from "../components/pages/UserProfilePage";
import useGetUser from "../hooks/use-get-user";

const Page: NextPage = () => {
    const user = useGetUser();

    return user ? (
        <UserProfilePage
            userAvatarSrc={user.photoURL!}
            username={user.displayName!}
        />
    ) : (
        <Skeleton
            w="full"
            flexGrow="1"
        />
    );
};

export default Page;
