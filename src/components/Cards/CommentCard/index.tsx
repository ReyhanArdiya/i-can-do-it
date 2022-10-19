import { HStack, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
import { Dayjs } from "dayjs";
import { Pencil, TrashSimple } from "phosphor-react";
import { MouseEventHandler } from "react";
import { IsAuthored } from "../../../utils/types";
import UserAvatar from "../../UserAvatar";
import BaseCard from "../BaseCard";

export interface CommentCardProps extends IsAuthored {
    comment: string;
    timestamp: Dayjs;
    onDeleteIconClick?: MouseEventHandler;
    onEditIconClick?: MouseEventHandler;
}

const CommentCard = ({
    author,
    comment,
    timestamp,
    onDeleteIconClick,
    onEditIconClick,
}: CommentCardProps) => {
    return (
        <BaseCard
            px="4"
            minW="280px"
            spacing="2.5"
        >
            <HStack
                w="full"
                spacing="3"
            >
                <UserAvatar
                    href={author.picUrl}
                    boxSize="7"
                />

                <VStack
                    align="left"
                    textAlign="left"
                    w="full"
                    spacing="0"
                >
                    <Text
                        as="h4"
                        textStyle="input"
                        fontSize="12px"
                        color="sienna.500"
                    >
                        {author.name}
                    </Text>
                    <Text
                        textStyle="small"
                        color="gray.600"
                    >
                        {timestamp.format("HH:mm DD MMMM YYYY")}
                    </Text>
                </VStack>

                <Spacer />

                <HStack>
                    <Icon
                        as={TrashSimple}
                        onClick={onDeleteIconClick}
                        boxSize="6"
                        cursor="pointer"
                    />
                    <Icon
                        as={Pencil}
                        onClick={onEditIconClick}
                        boxSize="6"
                        cursor="pointer"
                    />
                </HStack>
            </HStack>

            <Text textStyle="input">{comment}</Text>
        </BaseCard>
    );
};

export default CommentCard;
