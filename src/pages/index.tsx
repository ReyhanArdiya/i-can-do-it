import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import HomePage from "../components/pages/HomePage";
import useFetch from "../hooks/use-fetch";
import { Article } from "../models/article";
import { getArticles, useSnapArticles } from "../models/article/utils";
import { getQuizzes } from "../models/game/quizz/utils";
import { getMembers } from "../models/member/utils";
import { CookieKeys } from "../utils/cookies";
import { db } from "../utils/firebase/get-firebase-client";
import { WithId } from "../utils/types";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const firebaseToken = req.cookies[CookieKeys.FIREBASE_TOKEN];
    const isAuth = !!firebaseToken;
    const visited = req.cookies[CookieKeys.VISITED] === "true";

    return !isAuth && !visited
        ? {
              props: {},
              redirect: {
                  destination: "/intro",
              },
          }
        : { props: {} };
};

const Page: NextPage = () => {
    const [articles, setArticles] = useState<WithId<Article>[]>();
    useSnapArticles(db, articles => {
        setArticles(
            articles.docs.map(article => ({
                id: article.id,
                ...article.data(),
            }))
        );
    });

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
