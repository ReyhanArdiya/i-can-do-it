import { NextPage } from "next";
import { useEffect } from "react";
import HomePage from "../components/pages/HomePage";
import useFetch from "../hooks/use-fetch";
import { getArticles } from "../models/article/utils";
import { db } from "../utils/firebase/get-firebase-client";

const Page: NextPage = () => {
    const { data, fetchData } = useFetch(async () =>
        (await getArticles(db)).docs.map(article => ({
            id: article.id,
            ...article.data(),
        }))
    );

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return <HomePage articles={data} />;
};

export default Page;
