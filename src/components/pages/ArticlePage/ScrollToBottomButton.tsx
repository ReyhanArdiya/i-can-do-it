import { Circle, Link } from "@chakra-ui/react";
import { ArrowDown } from "phosphor-react";

const ScrollToBottomButton = () => {
    return (
        <Circle
            as={Link}
            href="#other-articles"
            scrollBehavior="smooth"
            bg="white"
            size="8"
            pos="fixed"
            right="4"
            bottom="4"
            shadow="1"
        >
            <ArrowDown
                weight="bold"
                color="black"
                size="19.2px"
            />
        </Circle>
    );
};

export default ScrollToBottomButton;
