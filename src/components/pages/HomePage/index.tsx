import { Text, VStack } from "@chakra-ui/react";
import { type NextPage } from "next";
import { ChubbsGreet } from "../../Chubbs";
import HomeHero from "./HomeHero";
import Section from "./Section";

const HomePage: NextPage = () => {
    return (
        <>
            <HomeHero />
        </>
    );
};

export default HomePage;
