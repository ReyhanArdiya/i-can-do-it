import { Button, HStack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { deleteUser, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { Door, Trash } from "phosphor-react";
import { useState } from "react";
import useGetUser from "../../../hooks/use-get-user";
import { auth } from "../../../utils/firebase/get-firebase-client";
import ConfirmationModal, {
    ConfirmationModalProps,
} from "../../Modals/ConfirmationModal";
import UserAvatar from "../../UserAvatar";

export interface UserProfilePageProps {
    userAvatarSrc: string;
    username: string;
    isAdmin?: boolean;
}

const UserProfilePage = ({
    userAvatarSrc,
    username,
    isAdmin = false,
}: UserProfilePageProps) => {
    const router = useRouter();
    const goHome = () => router.push("/");
    const user = useGetUser();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [confirmationModalProps, setConfirmationModalProps] = useState<
        Omit<ConfirmationModalProps, "modalProps">
    >({
        modalText: "Apakah kamu ingin keluar dari akun ini?",
        onCancelClick() {
            onClose();
        },
        async onConfirmClick() {
            await signOut(auth);
        },
    });

    const onExitHandler = () => {
        onOpen();
        setConfirmationModalProps({
            modalText: "Apakah kamu ingin keluar dari akun ini?",
            onCancelClick() {
                onClose();
            },
            async onConfirmClick() {
                await signOut(auth);
                goHome();
            },
        });
    };

    const onDeleteHandler = () => {
        onOpen();
        setConfirmationModalProps({
            modalText:
                "Jika kamu menghapus akun ini, kamu tidak bisa mendapatkannya kembali; apakah kamu ingin melanjuti?",
            onCancelClick() {
                onClose();
            },
            async onConfirmClick() {
                await deleteUser(user!);
                goHome();
            },
            modalContentProps: {
                bg: "sienna.300",
            },
        });
    };

    return (
        <VStack
            w="full"
            maxW="60"
            spacing="5"
        >
            <VStack spacing="0">
                <UserAvatar
                    src={userAvatarSrc}
                    boxSize="8rem"
                    borderWidth="6px"
                />
                <Text
                    as="h1"
                    textStyle="h1"
                    textAlign="center"
                >
                    {username}
                </Text>
            </VStack>
            {isAdmin && <Button w="full">Panel Admin</Button>}
            <HStack
                w="full"
                justify="space-between"
                spacing="4"
            >
                <Button
                    bg="blue.500"
                    leftIcon={<Door weight="fill" />}
                    onClick={onExitHandler}
                >
                    Keluar
                </Button>
                <Button
                    bg="sienna.500"
                    leftIcon={<Trash weight="fill" />}
                    onClick={onDeleteHandler}
                >
                    Hapus
                </Button>
            </HStack>

            <ConfirmationModal
                {...confirmationModalProps}
                modalProps={{
                    isOpen,
                    onClose,
                }}
            />
        </VStack>
    );
};

export default UserProfilePage;
