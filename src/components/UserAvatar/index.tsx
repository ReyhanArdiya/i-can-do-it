import { Avatar, AvatarProps } from "@chakra-ui/react";
import Link from "next/link";

export interface UserAvatarProps extends AvatarProps {
    href: string;
}

const UserAvatar = (props: UserAvatarProps) => {
    return (
        <Link href={props.href}>
            <Avatar
                borderWidth="2px"
                borderStyle="solid"
                borderColor="sienna.500"
                boxSize="9"
                cursor="pointer"
                {...props}
            />
        </Link>
    );
};

export default UserAvatar;
