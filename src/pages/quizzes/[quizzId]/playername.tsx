import { type NextPage } from "next";
import { useRouter } from "next/router";
import PlayerNamePage from "../../../components/pages/GamePage/PlayerName";

const Page: NextPage = () => {
    const router = useRouter();
    const { quizzId } = router.query;

    return (
        <PlayerNamePage onStartGameClick={() => router.push(`quizzes/${quizzId}`)} />
    );
};

export default Page;
