import { HStack, Icon, Spacer, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { Dayjs } from "dayjs";
import { Pencil, TrashSimple } from "phosphor-react";
import { MouseEventHandler } from "react";
import { deleteArticleComment } from "../../../models/article-comment/utils";
import { db } from "../../../utils/firebase/get-firebase-client";
import { IsAuthored } from "../../../utils/types";
import ConfirmationModal from "../../Modals/ConfirmationModal";
import UserAvatar from "../../UserAvatar";
import BaseCard from "../BaseCard";

export interface CommentCardProps extends IsAuthored {
    comment: string;
    commentId: string;
    articleId: string;
    timestamp: Dayjs;
    onEditIconClick?: MouseEventHandler;
}

const CommentCard = ({
    author,
    comment,
    timestamp,
    onEditIconClick,
    commentId,
    articleId,
}: CommentCardProps) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const deleteComment = async () => {
        try {
            await deleteArticleComment(db, articleId, commentId);
        } catch (err) {
            console.error(err);
        }
        onClose();
    };

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
                        onClick={onOpen}
                        boxSize="6"
                        cursor="pointer"
                    />
                    <ConfirmationModal
                        modalProps={{
                            isOpen,
                            onClose,
                        }}
                        modalText="Apakah kamu ingin menghapus komentar ini?"
                        onCancelClick={onClose}
                        modalContentProps={{ bg: "sienna.300" }}
                        onConfirmClick={deleteComment}
                    />
                    <Icon
                        as={Pencil}
                        onClick={onEditIconClick}
                        boxSize="6"
                        cursor="pointer"
                    />
                </HStack>
            </HStack>

            <Text
                textStyle="input"
                textAlign="left"
                w="full"
            >
                {comment}
            </Text>
        </BaseCard>
    );
};

export default CommentCard;
