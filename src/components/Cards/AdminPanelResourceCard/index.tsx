import { HStack, Image, Text } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

export interface AdminPanelResourceCardProps {
    label: string;
    imageSrc: string;
    onClick: MouseEventHandler;
}

const AdminPanelResourceCard = ({
    label,
    imageSrc,
    onClick,
}: AdminPanelResourceCardProps) => {
    return (
        <HStack
            onClick={onClick}
            p="2"
            spacing="2"
            rounded="base"
            border="2px solid black"
            bg="white"
            w="full"
            cursor="pointer"
        >
            <Image
                src={imageSrc}
                alt="label"
                title="label"
                rounded="base"
                boxSize="20"
            />
            <Text
                as="h2"
                textStyle="h2"
            >
                {label}
            </Text>
        </HStack>
    );
};

export default AdminPanelResourceCard;
