import {
    Box,
    Button,
    Heading,
    HStack,
    Image,
    ImageProps,
    Text,
    VStack,
} from "@chakra-ui/react";
import { Dayjs } from "dayjs";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";
import UserAvatar from "../../UserAvatar";
import BaseCard from "../BaseCard";

export interface ResourceThumbnailCardProps {
    imageProps: ImageProps;
    title: string;
    date?: Dayjs;
    author: {
        name: string;
        picSrc: string;
    };
    onButtonClick: MouseEventHandler;
    buttonLabel: string;
}

const ResourceThumbnailCard = ({
    author,
    title,
    date,
    onButtonClick: onReadButtonClick,
    imageProps,
    buttonLabel,
}: ResourceThumbnailCardProps) => {
    return (
        <BaseCard minW="60">
            <Image
                {...imageProps}
                alt={imageProps.alt}
                rounded="base"
            />
            <Text
                as="h3"
                textStyle="h3"
                noOfLines={1}
            >
                {title}
            </Text>

            <HStack
                w="full"
                justify="space-between"
            >
                {date && (
                    <VStack
                        spacing="0"
                        align="left"
                        textAlign="left"
                    >
                        <Text
                            color="blue.300"
                            textStyle="small"
                        >
                            {date.format("DD MMMM YYYY")}
                        </Text>
                        <HStack spacing="1">
                            <Text
                                textStyle="small"
                                color="gray.600"
                            >
                                oleh{" "}
                                <Box
                                    as="span"
                                    color="sienna.500"
                                    fontWeight="bold"
                                >
                                    {author.name}
                                </Box>
                            </Text>
                            <UserAvatar
                                boxSize="1rem"
                                href={author.picSrc}
                            />
                        </HStack>
                    </VStack>
                )}

                <Button onClick={onReadButtonClick}>{buttonLabel}</Button>
            </HStack>
        </BaseCard>
    );
};

export default ResourceThumbnailCard;