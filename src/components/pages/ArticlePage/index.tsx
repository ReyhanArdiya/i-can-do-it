import { VStack } from "@chakra-ui/react";
import { type NextPage } from "next";
import { Article } from "../../../models/article";
import ArticlePageBody from "./ArticlePageBody";
import ArticlePageComments, {
    ArticlePageCommentsProps,
} from "./ArticlePageComments";
import ArticlePageHero from "./ArticlePageHero";
import OtherArticlesSection, {
    OtherArticlesSectionProps,
} from "./OtherArticlesSection";
import ScrollToBottomButton from "./ScrollToBottomButton";

export interface ArticlePageProps
    extends Omit<Article, "thumbnail">,
        OtherArticlesSectionProps,
        ArticlePageCommentsProps {}

const ArticlePage: NextPage<ArticlePageProps> = ({
    author,
    body,
    created,
    title,
    headerVideoUrl,
    otherArticles,
    comments,
    onMoreCommentsButtonClick,
}) => {
    return (
        <VStack
            bg="yellow.100"
            mx="auto"
            mb="6"
            spacing="6"
        >
            <ArticlePageHero
                author={author}
                created={created}
                title={title}
                headerVideoUrl={headerVideoUrl}
            />
            <ArticlePageBody body={body} />
            <VStack
                spacing="0"
                maxW="full"
            >
                <OtherArticlesSection otherArticles={otherArticles} />
                <ArticlePageComments
                    comments={comments}
                    onMoreCommentsButtonClick={onMoreCommentsButtonClick}
                />
            </VStack>
            <ScrollToBottomButton />
        </VStack>
    );
};

export default ArticlePage;
