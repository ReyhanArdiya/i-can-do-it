import React, { ReactNode, useState } from "react";
import { QuizzScore } from "../models/game/quizz";

export interface QuizzContextProps extends QuizzScore {
    playerName: string;
    playerNameChanged: (playerName: string) => void;
    answeredCorrectly: () => void;
    newGameStarted: (total: number) => void;
}

const QuizzContext = React.createContext<QuizzContextProps>({
    playerName: "anon",
    correct: 0,
    total: 0,
    answeredCorrectly() {},
    playerNameChanged() {},

    newGameStarted() {},
});

export const QuizzContextProvider = ({ children }: { children: ReactNode }) => {
    const [playerName, setPlayerName] = useState("");
    const [total, setTotal] = useState(0);
    const [correct, setCorrect] = useState(0);

    const value: QuizzContextProps = {
        playerName,
        playerNameChanged(playerName) {
            setPlayerName(playerName);
        },
        answeredCorrectly() {
            setCorrect(c => c + 1);
        },
        correct,
        total,
        newGameStarted(total) {
            setTotal(total);
            setCorrect(0);
        },
    };

    return <QuizzContext.Provider value={value}>{children}</QuizzContext.Provider>;
};

export default QuizzContext;
