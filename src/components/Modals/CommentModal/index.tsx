import { Button, HStack, Text, Textarea, VStack } from "@chakra-ui/react";
import { ChangeEventHandler, MouseEventHandler } from "react";
import ArticleComment from "../../../models/article-comment";

export interface CommentModalProps extends Pick<ArticleComment, "body"> {
    onUpdateBody: ChangeEventHandler<HTMLTextAreaElement>;
    onSaveClick: MouseEventHandler;
    onCancelClick: MouseEventHandler;
}

const CommentModal = ({
    body,
    onUpdateBody,
    onCancelClick,
    onSaveClick,
}: CommentModalProps) => {
    return (
        <VStack
            rounded="base"
            border="2px solid black"
            bg="yellow.300"
            spacing="2"
            p="3"
            w="280px"
        >
            <Text
                as="h3"
                textStyle="h3"
            >
                Edit Komentar
            </Text>
            <Textarea
                minH="135px"
                border="none"
                value={body}
                onChange={onUpdateBody}
                bg="white"
                rounded="inherit"
                textStyle="input"
                p="2"
                sx={{
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                }}
            />
            <HStack
                spacing="2"
                justify="end"
                w="full"
            >
                <Button
                    w="83px"
                    bg="sienna.500"
                    onClick={onCancelClick}
                >
                    Batalkan
                </Button>
                <Button
                    w="83px"
                    bg="yellow.500"
                    onClick={onSaveClick}
                >
                    Simpan
                </Button>
            </HStack>
        </VStack>
    );
};

export default CommentModal;
