import { Button, useDisclosure, VStack } from "@chakra-ui/react";
import { ArrowLeft } from "phosphor-react";
import { MouseEventHandler, useState } from "react";
import { Quizz } from "../../../../models/game/quizz";
import { WithId } from "../../../../utils/types";
import ResourceThumbnailCard from "../../../Cards/ResourceThumbnailCard";
import CircularIcon from "../../../CircularIcon";
import List from "../../../List";
import EditQuizzModal from "../../../Modals/EditQuizzModal";
import LoadingModal from "../../../Modals/LoadingModal";

export interface QuizzAdminPageProps {
    quizzes: WithId<Quizz>[];
    onGoBackButtonClick: MouseEventHandler;
}

const QuizzAdminPage = ({ quizzes, onGoBackButtonClick }: QuizzAdminPageProps) => {
    const [quizzId, setQuizzId] = useState<string>();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const spinnerDisclosure = useDisclosure();

    const quizzCards = quizzes.map((quizz, i) => {
        const openEditModal = () => {
            setQuizzId(quizz.id);
            onOpen();
        };

        return (
            <ResourceThumbnailCard
                key={i}
                buttonLabel="Edit"
                imageProps={{ src: quizz.thumbnail, alt: quizz.title }}
                title={quizz.title}
                onButtonClick={openEditModal}
            />
        );
    });

    return (
        <>
            <VStack
                maxW="full"
                spacing="6"
                w="full"
            >
                {/* <Button
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
                </Button> */}

                <List
                    listTitle="List Quizz"
                    cards={quizzCards}
                    stackProps={{
                        justify: {
                            base: "start",
                            lg: quizzCards.length > 3 ? "start" : "center",
                        },
                        w: "full",
                    }}
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

            {quizzId && isOpen && (
                <EditQuizzModal
                    isOpen={isOpen}
                    quizzId={quizzId}
                    onCancelClick={onClose}
                />
            )}

            {<LoadingModal {...spinnerDisclosure} />}
        </>
    );
};

export default QuizzAdminPage;
