import { type NextPage } from "next";
import { useRouter } from "next/router";
import DisplayNamePage from "../../../components/pages/GamePage/PlayerName";

const Page: NextPage = () => {
    const router = useRouter();
    const { quizzId } = router.query;

    return <DisplayNamePage quizzId={quizzId as string} />;
};

export default Page;
