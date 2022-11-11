import { Button, useDisclosure, useToast, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import { FirebaseError } from "firebase/app";
import { getDownloadURL, getStorage } from "firebase/storage";
import { nanoid } from "nanoid";
import { ArrowLeft, Plus } from "phosphor-react";
import { MouseEventHandler, useState } from "react";
import { Article, ArticleBodyImg, AudibleText } from "../../../../models/article";
import {
    deleteArticle,
    saveArticle,
    saveArticleMedia,
} from "../../../../models/article/utils";
import getFirebaseClient, {
    db,
} from "../../../../utils/firebase/get-firebase-client";
import { WithId } from "../../../../utils/types";
import ResourceThumbnailCard from "../../../Cards/ResourceThumbnailCard";
import CircularIcon from "../../../CircularIcon";
import List from "../../../List";
import EditArticleModal, {
    EditArticleModalProps,
} from "../../../Modals/EditArticleModal";
import {
    ImageInput,
    ParagraphInput,
} from "../../../Modals/EditArticleModal/article-data-reducer";
import LoadingModal from "../../../Modals/LoadingModal";

export interface ArticlesAdminPageProps {
    onGoBackButtonClick: MouseEventHandler;
    articles: WithId<Article>[];
}

const ArticlesAdminPage = ({
    onGoBackButtonClick,
    articles,
}: ArticlesAdminPageProps) => {
    const [initialData, setInitialData] =
        useState<WithId<EditArticleModalProps["initialData"]>>();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const spinnerDisclosure = useDisclosure();

    const toast = useToast();

    const openCreateArticleModal = () => {
        onOpen();
        setInitialData({
            author: {
                name: "",
            },
            body: [],
            created: new Date(),
            id: "",
            title: "",
            headerVideo: new File([], ""),
            thumbnail: new File([], ""),
        });
    };

    const deleteArticleHandler = async () => {
        try {
            initialData && (await deleteArticle(db, initialData.id));
            onClose();
        } catch (err) {
            if (err instanceof FirebaseError) {
                toast({
                    status: "error",
                    isClosable: true,
                    description: err.message,
                });
            }
        }
    };

    const saveArticleHandler: EditArticleModalProps["onSaveClick"] =
        async articleData => {
            if (initialData) {
                spinnerDisclosure.onOpen();
                const storage = getStorage(getFirebaseClient());

                const saveAudio = async (audioFile: File) => {
                    try {
                        const { ref } = await saveArticleMedia(
                            storage,
                            initialData.id,
                            audioFile
                        );

                        return await getDownloadURL(ref);
                    } catch (err) {
                        if (err instanceof FirebaseError) {
                            toast({
                                status: "error",
                                isClosable: true,
                                description: err.message,
                            });
                        }

                        return "";
                    }
                };

                const articleBody: Article["body"] = [];
                articleData.body.map(async bodyData => {
                    if ("audioFile" in bodyData) {
                        const audibleText: AudibleText = {
                            text: bodyData.text,
                            audioSrc: await saveAudio(bodyData.audioFile),
                        };

                        articleBody.push(audibleText);
                    } else {
                        const savedVideo = await saveArticleMedia(
                            storage,
                            initialData.id,
                            bodyData.imageFile
                        );

                        const articleBodyImg: ArticleBodyImg = {
                            alt: bodyData.imageFile?.name || "",
                            title: bodyData.imageFile?.name || "",
                            src: await getDownloadURL(savedVideo.ref),
                        };

                        articleBody.push(articleBodyImg);
                    }
                });

                try {
                    const savedHeaderVideo = await saveArticleMedia(
                        storage,
                        initialData.id,
                        articleData.headerVideo
                    );
                    const savedHeaderVideoUrl = await getDownloadURL(
                        savedHeaderVideo.ref
                    );

                    const savedThumbnail = await saveArticleMedia(
                        storage,
                        initialData.id,
                        articleData.thumbnail
                    );
                    const savedThumbnailUrl = await getDownloadURL(
                        savedThumbnail.ref
                    );

                    const article = new Article(
                        articleData.title,
                        articleData.created,
                        { name: articleData.author.name, picUrl: "123" },
                        articleBody,
                        savedHeaderVideoUrl,
                        savedThumbnailUrl
                    );

                    await saveArticle(db, article, initialData.id);
                    onClose();
                } catch (err) {
                    if (err instanceof FirebaseError) {
                        toast({
                            status: "error",
                            isClosable: true,
                            description: err.message,
                        });
                    }
                }
            }

            spinnerDisclosure.onClose();
        };

    const articleCards = articles.map(article => {
        const body: Array<ParagraphInput | ImageInput> = article.body.map(data => {
            if ("text" in data) {
                return {
                    text: data.text,
                    id: nanoid(),
                } as ParagraphInput;
            }

            return {
                id: nanoid(),
            } as ImageInput;
        });

        const editArticle = () => {
            onOpen();
            setInitialData({
                author: { name: article.author.name },
                body,
                title: article.title,
                id: article.id,
                created: article.created,
                headerVideo: new File([""], "mock"),
                thumbnail: new File([""], "mock"),
            });
        };

        return (
            <ResourceThumbnailCard
                key={article.id}
                buttonLabel="Edit"
                imageProps={{ src: article.thumbnail, alt: article.title }}
                title={article.title}
                date={dayjs(article.created)}
                author={article.author}
                onButtonClick={editArticle}
            />
        );
    });

    return (
        <>
            <VStack spacing="6">
                <Button
                    leftIcon={
                        <CircularIcon
                            icon={() => (
                                <Plus
                                    weight="bold"
                                    fill="black"
                                />
                            )}
                        />
                    }
                    onClick={openCreateArticleModal}
                >
                    Artikel Baru
                </Button>

                <List
                    listTitle="List Artikel"
                    cards={articleCards}
                />

                <Button
                    bg="sienna.500"
                    leftIcon={
                        <CircularIcon
                            icon={() => (
                                <ArrowLeft
                                    weight="bold"
                                    fill="black"
                                />
                            )}
                        />
                    }
                    onClick={onGoBackButtonClick}
                >
                    Kembali
                </Button>
            </VStack>

            {initialData && isOpen && (
                <EditArticleModal
                    isOpen={isOpen}
                    initialData={initialData}
                    onCancelClick={onClose}
                    onDeleteIconClick={deleteArticleHandler}
                    onSaveClick={saveArticleHandler}
                />
            )}

            {<LoadingModal {...spinnerDisclosure} />}
        </>
    );
};

export default ArticlesAdminPage;
