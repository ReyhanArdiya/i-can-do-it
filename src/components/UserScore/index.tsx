import { HStack, Text } from "@chakra-ui/react";
import UserAvatar from "../UserAvatar";

export interface UserScoreProps {
    name: string;
    avatarHref: string;
    score: number;
}

const UserScore = ({ name, avatarHref, score }: UserScoreProps) => {
    return (
        <HStack
            justify="space-between"
            fontFamily="sniglet"
        >
            <HStack spacing={2}>
                <UserAvatar href={avatarHref} />
                <Text>{name}</Text>
            </HStack>
            <Text color="sienna.500">{score}</Text>
        </HStack>
    );
};

export default UserScore;
