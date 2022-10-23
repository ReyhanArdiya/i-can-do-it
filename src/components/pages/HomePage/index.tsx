import { type NextPage } from "next";
import ArticlesSection, { ArticlesSectionProps } from "./ArticlesSection";
import HomeHero from "./HomeHero";

export interface HomePageProps extends Partial<ArticlesSectionProps> {}

const HomePage = ({ articles }: HomePageProps) => {
    return (
        <>
            <HomeHero />
            {articles && <ArticlesSection articles={articles} />}
        </>
    );
};

export default HomePage;
