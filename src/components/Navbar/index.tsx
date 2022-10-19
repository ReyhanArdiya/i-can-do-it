import { HStack, Link, Text, theme, useMediaQuery } from "@chakra-ui/react";
import NextLink from "next/link";
import { Books, GameController } from "phosphor-react";
import useDevicesBreakpoints from "../../hooks/use-devices-breakpoints";

import ICanDoItLogo from "../ICanDoItLogo";
import UserAvatar from "../UserAvatar";

export interface NavbarProps {
    logoHref: string;
    articleIconHref: string;
    gameIconHref: string;
    userAvatarHref: string;
}

const Navbar = ({
    userAvatarHref,
    articleIconHref,
    gameIconHref,
    logoHref,
}: NavbarProps) => {
    const { isDesktop } = useDevicesBreakpoints();

    return (
        <HStack
            as="nav"
            w="full"
            px="3"
            py="2"
            spacing="0"
            justifyContent="space-between"
        >
            <NextLink
                passHref
                href={logoHref}
            >
                <Link>
                    <ICanDoItLogo noText />
                </Link>
            </NextLink>

            <HStack spacing="14">
                <NextLink
                    href={articleIconHref}
                    passHref
                >
                    <Link>
                        <HStack spacing={1}>
                            <Books size="32" />
                            {isDesktop && <Text>Baca Artikel</Text>}
                        </HStack>
                    </Link>
                </NextLink>

                <NextLink
                    href={gameIconHref}
                    passHref
                >
                    <Link>
                        <HStack spacing={1}>
                            <GameController size="32" />
                            {isDesktop && <Text>Main Game</Text>}
                        </HStack>
                    </Link>
                </NextLink>
            </HStack>

            <UserAvatar href={userAvatarHref} />
        </HStack>
    );
};

export default Navbar;
