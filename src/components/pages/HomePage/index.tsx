import { type NextPage } from "next";
import ArticlesSection, { ArticlesSectionProps } from "./ArticlesSection";
import GamesSection, { GamesSectionProps } from "./GamesSection";
import HomeHero from "./HomeHero";

export interface HomePageProps
    extends Partial<ArticlesSectionProps>,
        Partial<GamesSectionProps> {}

const HomePage = ({ articles, quizzes }: HomePageProps) => {
    return (
        <>
            <HomeHero />
            {articles && <ArticlesSection articles={articles} />}
            {quizzes && <GamesSection quizzes={quizzes} />}
        </>
    );
};

export default HomePage;
