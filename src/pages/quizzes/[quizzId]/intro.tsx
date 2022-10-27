import { Skeleton } from "@chakra-ui/react";
import { DocumentSnapshot } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GamePageIntro from "../../../components/pages/GamePage/GamePageIntro";
import useIsAuth from "../../../hooks/use-is-auth";
import { Quizz } from "../../../models/game/quizz";
import { getQuizz } from "../../../models/game/quizz/utils";
import { db } from "../../../utils/firebase/get-firebase-client";

const Page = () => {
    const router = useRouter();
    const { quizzId } = router.query;
    const [quizzData, setQuizzData] = useState<DocumentSnapshot<Quizz>>();
    const isAuth = useIsAuth();

    useEffect(() => {
        getQuizz(db, quizzId as string)
            .then(d => setQuizzData(d))
            .catch(e => console.error(e));
    }, [quizzId]);

    return quizzData ? (
        <GamePageIntro
            description={quizzData.data()!.description}
            title={quizzData.data()!.title}
            onStartGameClick={() =>
                router.push(isAuth ? `quizzes/${quizzId}` : `games/playername`)
            }
        />
    ) : (
        <Skeleton
            w="full"
            h="100vh"
        />
    );
};

export default Page;
