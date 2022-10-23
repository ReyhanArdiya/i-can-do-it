import { NextPage } from "next";
import { useEffect } from "react";
import HomePage from "../components/pages/HomePage";
import useFetch from "../hooks/use-fetch";
import { getArticles } from "../models/article/utils";
import { getQuizzes } from "../models/game/quizz/utils";
import { db } from "../utils/firebase/get-firebase-client";

const Page: NextPage = () => {
    const { data: articles, fetchData: fetchArticles } = useFetch(async () =>
        (await getArticles(db)).docs.map(article => ({
            id: article.id,
            ...article.data(),
        }))
    );

    const { data: quizzes, fetchData: fetchQuizzes } = useFetch(async () =>
        (await getQuizzes(db)).docs.map(quizz => ({
            id: quizz.id,
            ...quizz.data(),
        }))
    );

    useEffect(() => {
        fetchArticles();
        fetchQuizzes();
    }, [fetchArticles, fetchQuizzes]);

    return (
        <HomePage
            articles={articles}
            quizzes={quizzes}
        />
    );
};

export default Page;
