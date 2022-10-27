import ArticlesSection, { ArticlesSectionProps } from "./ArticlesSection";
import CreditsSection, { CreditsSectionProps } from "./CreditsSection";
import GamesSection, { GamesSectionProps } from "./GamesSection";
import HomeHero from "./HomeHero";

export interface HomePageProps
    extends Partial<ArticlesSectionProps>,
        Partial<GamesSectionProps>,
        Partial<CreditsSectionProps> {}

const HomePage = ({ articles, quizzes, members }: HomePageProps) => {
    return (
        <>
            <HomeHero />
            {articles?.length && <ArticlesSection articles={articles} />}
            {quizzes?.length && <GamesSection quizzes={quizzes} />}
            {members?.length && <CreditsSection members={members} />}
        </>
    );
};

export default HomePage;
