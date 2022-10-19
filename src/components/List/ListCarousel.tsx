import { HStack } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ListCarouselProps {
    cards: ReactNode[];
}

const ListCarousel = ({ cards }: ListCarouselProps) => {
    return (
        <HStack
            spacing="3"
            h="max"
            maxW="full"
            w="full"
            overflowX="auto"
            py="2.5"
            px="2"
            sx={{
                "&::-webkit-scrollbar": {
                    display: "none",
                },
            }}
        >
            {cards}
        </HStack>
    );
};

export default ListCarousel;
