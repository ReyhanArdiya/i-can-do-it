import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import HomePage from "../components/pages/HomePage";
import useFetch from "../hooks/use-fetch";
import { getArticles } from "../models/article/utils";
import { getQuizzes } from "../models/game/quizz/utils";
import { getMembers } from "../models/member/utils";
import { db } from "../utils/firebase/get-firebase-client";
import { redirectIfNotAuth } from "../utils/redirect";

export const getServerSideProps: GetServerSideProps = redirectIfNotAuth("/intro");

const Page: NextPage = () => {
    const { data: articles, fetchData: fetchArticles } = useFetch(async () =>
        (await getArticles(db)).docs.map(article => ({
            id: article.id,
            ...article.data(),
        }))
    );
    useEffect(() => {
        fetchArticles();
    }, [fetchArticles]);

    const { data: quizzes, fetchData: fetchQuizzes } = useFetch(async () =>
        (await getQuizzes(db)).docs.map(quizz => ({
            id: quizz.id,
            ...quizz.data(),
        }))
    );
    useEffect(() => {
        fetchQuizzes();
    }, [fetchQuizzes]);

    const { data: members, fetchData: fetchMembers } = useFetch(async () =>
        (await getMembers(db)).docs.map(member => member.data())
    );
    useEffect(() => {
        fetchMembers();
    }, [fetchMembers]);

    return (
        <HomePage
            articles={articles}
            quizzes={quizzes}
            members={members}
        />
    );
};

export default Page;
