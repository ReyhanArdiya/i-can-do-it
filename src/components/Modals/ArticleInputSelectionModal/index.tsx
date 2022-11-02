import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalProps,
    VStack,
} from "@chakra-ui/react";
import { Article, ImageSquare } from "phosphor-react";
import { MouseEventHandler } from "react";

export interface ArticleInputSelectionModalProps extends ModalProps {
    onParagraphClick: MouseEventHandler<HTMLButtonElement>;
    onPictureClick: MouseEventHandler<HTMLButtonElement>;
}

const ArticleInputSelectionModal = ({
    onParagraphClick,
    onPictureClick,
    ...modalProps
}: ArticleInputSelectionModalProps) => {
    return (
        <Modal
            isCentered
            {...modalProps}
        >
            <ModalOverlay />
            <VStack
                as={ModalContent}
                bg="sienna.300"
                border="2px solid black"
                p="3"
                px="12"
                py="4"
                rounded="base"
                spacing="4"
                w="280px"
            >
                <ModalHeader
                    p="0"
                    textStyle="h3"
                    as="h3"
                >
                    Pilih Input
                </ModalHeader>
                <ModalCloseButton top="0" />
                <ModalBody
                    p="0"
                    w="full"
                >
                    <VStack
                        spacing="2"
                        w="full"
                    >
                        <Button
                            leftIcon={<Article weight="fill" />}
                            w="full"
                            onClick={onParagraphClick}
                        >
                            Paragraf
                        </Button>
                        <Button
                            leftIcon={<ImageSquare weight="fill" />}
                            w="full"
                            onClick={onPictureClick}
                        >
                            Gambar
                        </Button>
                    </VStack>
                </ModalBody>
            </VStack>
        </Modal>
    );
};

export default ArticleInputSelectionModal;
