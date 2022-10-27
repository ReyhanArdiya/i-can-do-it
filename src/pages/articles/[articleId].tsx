import { Skeleton } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ResourceThumbnailCardProps } from "../../components/Cards/ResourceThumbnailCard";
import ArticlePage from "../../components/pages/ArticlePage";
import { Article } from "../../models/article";
import { getArticle, getArticles } from "../../models/article/utils";
import { db } from "../../utils/firebase/get-firebase-client";

const Page = () => {
    const router = useRouter();
    const { articleId } = router.query;
    const [articleData, setArticleData] = useState<Article>();
    const [otherArticles, setOtherArticles] = useState<ResourceThumbnailCardProps[]>(
        []
    );

    useEffect(() => {
        getArticle(db, articleId as string)
            .then(article => setArticleData(article.data()))
            .catch(e => console.error(e));
    }, [articleId]);

    useEffect(() => {
        getArticles(db)
            .then(articles =>
                setOtherArticles(
                    articles.docs.map(article => {
                        const data = article.data();

                        return {
                            buttonLabel: "Baca",
                            imageProps: { src: data.thumbnail },
                            onButtonClick: () =>
                                router.push(`/articles/${article.id}`),
                            title: data.title,
                            author: data.author,
                            date: dayjs(data.created),
                        };
                    })
                )
            )
            .catch(e => console.error(e));
    }, [router]);

    return articleData ? (
        <ArticlePage
            {...articleData}
            onMoreCommentsButtonClick={() => 1}
            otherArticles={otherArticles}
        />
    ) : (
        <Skeleton
            w="full"
            h="100vh"
        />
    );
};

export default Page;
