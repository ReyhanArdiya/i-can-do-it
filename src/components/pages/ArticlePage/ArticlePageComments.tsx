import { Button, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { ChatTeardrop, Plus } from "phosphor-react";
import { MouseEventHandler } from "react";
import useIsAuth from "../../../hooks/use-is-auth";
import ArticleComment from "../../../models/article-comment";
import CommentCard from "../../Cards/CommentCard";
import CircularIcon from "../../CircularIcon";

export interface ArticlePageCommentsProps {
    comments: ArticleComment[];
    onMoreCommentsButtonClick: MouseEventHandler;
}

const ArticlePageComments = ({
    comments,
    onMoreCommentsButtonClick,
}: ArticlePageCommentsProps) => {
    const commentCards = comments.map((comment, i) => (
        <CommentCard
            key={i}
            author={comment.author}
            timestamp={dayjs(comment.created)}
            comment={comment.body}
            onDeleteIconClick={() => console.log("Not implemented!")}
            onEditIconClick={() => console.log("Not implemented!")}
        />
    ));
    const isAuth = useIsAuth();
    const router = useRouter();

    const commentButton = isAuth ? (
        <Button
            leftIcon={
                <CircularIcon
                    p="1"
                    icon={() => (
                        <ChatTeardrop
                            weight="fill"
                            color="black"
                        />
                    )}
                />
            }
        >
            Buat Komentar
        </Button>
    ) : (
        <Button onClick={() => router.push("/auth")}>
            Anda harus masuk ke akun untuk bisa membuat komentar!
        </Button>
    );

    return (
        <VStack
            w="full"
            bg="sienna.100"
            spacing="3"
            py="4"
        >
            <Text
                as="h2"
                textStyle="h2"
            >
                Kolom Komentar
            </Text>
            {commentButton}
            <VStack spacing="inherit">{commentCards}</VStack>
            <Button
                leftIcon={
                    <CircularIcon
                        p="1"
                        icon={() => (
                            <Plus
                                weight="fill"
                                color="black"
                            />
                        )}
                    />
                }
                onClick={onMoreCommentsButtonClick}
            >
                Lihat Komentar Lain
            </Button>
        </VStack>
    );
};

export default ArticlePageComments;
