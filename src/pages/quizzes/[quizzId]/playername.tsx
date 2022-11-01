import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import DisplayNamePage from "../../../components/pages/DisplayNamePage";
import QuizzContext, { QuizzContextProvider } from "../../../context/quizz-context";

const PlayerNamePage: NextPage = () => {
    const router = useRouter();
    const { playerNameChanged, playerName } = useContext(QuizzContext);
    const { quizzId } = router.query;

    const startGame = async () => {
        router.push(`/quizzes/${quizzId}`);
    };

    return (
        <DisplayNamePage
            displayName={playerName}
            onButtonClick={startGame}
            onDisplayNameInputChange={({ target: { value } }) =>
                playerNameChanged(value)
            }
            placeholder={"Ketik namamu"}
        />
    );
};

const Page = () => (
    <QuizzContextProvider>
        <PlayerNamePage />
    </QuizzContextProvider>
);

export default Page;
