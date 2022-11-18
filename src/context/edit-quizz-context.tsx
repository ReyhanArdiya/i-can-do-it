import clone from "just-clone";
import React, { ReactNode, useState } from "react";
import { Quizz } from "../models/game/quizz";

export interface QuizzInfo {
    title?: string;
    description?: string;
    thumbnail?: File;
}

export interface IEditQuizzContext extends Omit<Quizz, "gameRecords" | "thumbnail"> {
    thumbnail: File;
    infoChanged: (quizzInfo: QuizzInfo) => void;
    bodyReplaced: (newQuizzBody: Quizz["body"]) => void;
    correctAnswerChanged: (questionIndex: number, answerIndex: number) => void;
    // TODO do this after answer input onblur
    answerTextUpdated: (
        questionIndex: number,
        answerIndex: number,
        text: string
    ) => void;
    questionTextUpdated: (questionIndex: number, text: string) => void;
    questionDeleted: (questionIndex: number) => void;
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
    thumbnail: new File([""], ""),
    bodyReplaced() {},
    infoChanged() {},
    correctAnswerChanged() {},
    answerTextUpdated() {},
    questionDeleted() {},
    questionTextUpdated() {},
});

export const EditQuizzContextProvider = ({ children }: { children: ReactNode }) => {
    const [info, setInfo] = useState<QuizzInfo>({
        description: "",
        thumbnail: new File([""], ""),
        title: "",
    });
    const [body, setBody] = useState<Quizz["body"]>([
        {
            options: [{ isCorrect: false, text: "" }],
            question: "",
        },
    ]);

    const editBody = (cb: (newBody: Quizz["body"]) => void) => {
        setBody(prev => {
            const newBody = clone(prev);
            cb(newBody);
            return newBody;
        });
    };

    const value: IEditQuizzContext = {
        infoChanged(quizzInfo) {
            setInfo(prev => ({ ...prev, ...{ quizzInfo } }));
        },
        description: info.description as string,
        title: info.title as string,
        thumbnail: info.thumbnail as File,
        body,
        bodyReplaced(newQuizzBody) {
            setBody(newQuizzBody);
        },
        correctAnswerChanged(questionIndex, answerIndex) {
            editBody(newBody => {
                const { options } = newBody[questionIndex];

                // Search for old correct answer and set it to false
                options.some(option => {
                    if (option.isCorrect) {
                        option.isCorrect = false;
                        return true;
                    }
                });

                options[answerIndex].isCorrect = true;
            });
        },
        answerTextUpdated(questionIndex, answerIndex, text) {
            editBody(newBody => {
                const { options } = newBody[questionIndex];
                options[answerIndex].text = text;
            });
        },
        questionTextUpdated(questionIndex, text) {
            editBody(newBody => {
                if (text) {
                    return (newBody[questionIndex].question = text);
                }

                newBody[questionIndex].question = "Soal";
            });
        },
        questionDeleted(questionIndex) {
            editBody(newBody => {
                newBody.splice(questionIndex, 1);
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
