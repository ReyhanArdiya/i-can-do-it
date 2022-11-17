import clone from "just-clone";
import React, { ReactNode, useState } from "react";
import { Quizz } from "../models/game/quizz";

export interface QuizzInfo {
    title?: string;
    description?: string;
    thumbnail?: string;
}

export interface IEditQuizzContext extends Omit<Quizz, "gameRecords"> {
    infoChanged: (quizzInfo: QuizzInfo) => void;
    bodyReplaced: (newQuizzBody: Quizz["body"]) => void;
    correctAnswerChanged: (questionIndex: number, answerIndex: number) => void;
    answerTextUpdated: (
        questionIndex: number,
        answerIndex: number,
        text: string
    ) => void;
}

const EditQuizzContext = React.createContext<IEditQuizzContext>({
    body: [
        {
            options: [{ isCorrect: false, text: "" }],
            question: "",
        },
    ],
    description: "",
    title: "",
    thumbnail: "",
    bodyReplaced() {},
    infoChanged() {},
    correctAnswerChanged() {},
    answerTextUpdated() {},
    // TODO add deletion
});

export const EditQuizzContextProvider = ({ children }: { children: ReactNode }) => {
    const [info, setInfo] = useState<QuizzInfo>({
        description: "",
        thumbnail: "",
        title: "",
    });
    const [body, setBody] = useState<Quizz["body"]>([
        {
            options: [{ isCorrect: false, text: "" }],
            question: "",
        },
    ]);

    const value: IEditQuizzContext = {
        infoChanged(quizzInfo) {
            setInfo(prev => ({ ...prev, ...{ quizzInfo } }));
        },
        description: info.description as string,
        title: info.title as string,
        thumbnail: info.thumbnail as string,
        body,
        bodyReplaced(newQuizzBody) {
            setBody(newQuizzBody);
        },
        correctAnswerChanged(questionIndex, answerIndex) {
            setBody(prev => {
                const newBody = clone(prev);
                const { options } = newBody[questionIndex];

                // Search for old correct answer and set it to false
                options.some(option => {
                    if (option.isCorrect) {
                        option.isCorrect = false;
                        return true;
                    }
                });

                options[answerIndex].isCorrect = true;
                return newBody;
            });
        },
        answerTextUpdated(questionIndex, answerIndex, text) {
            setBody(prev => {
                const newBody = clone(prev);
                const { options } = newBody[questionIndex];
                options[answerIndex].text = text;
                return newBody;
            });
        },
    };

    return (
        <EditQuizzContext.Provider value={value}>
            {children}
        </EditQuizzContext.Provider>
    );
};

export default EditQuizzContext;
