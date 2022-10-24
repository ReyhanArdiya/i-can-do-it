import {
    HStack,
    Link,
    SystemStyleObject,
    Text,
    theme,
    useMediaQuery,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Books, GameController } from "phosphor-react";
import { forwardRef } from "react";
import useDevicesBreakpoints from "../../hooks/use-devices-breakpoints";

import ICanDoItLogo from "../ICanDoItLogo";
import UserAvatar from "../UserAvatar";

export interface NavbarProps {
    logoHref: string;
    articleIconHref: string;
    gameIconHref: string;
    userAvatarHref: string;
    userAvatarPicSrc: string;
    scrolled?: boolean;
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
    (
        {
            userAvatarHref,
            articleIconHref,
            gameIconHref,
            logoHref,
            userAvatarPicSrc,
            scrolled,
        },
        ref
    ) => {
        const { isDesktop } = useDevicesBreakpoints();
        const scrolledStyle = scrolled
            ? {
                  backdropFilter: "auto",
                  backdropBlur: "sm",
                  background: "rgba(255, 255, 255, 0.25)",
              }
            : {};

        return (
            <HStack
                as="nav"
                w="full"
                px="3"
                py="2"
                spacing="0"
                justifyContent="space-between"
                pos="fixed"
                top="0"
                ref={ref}
                {...scrolledStyle}
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

                <UserAvatar
                    href={userAvatarHref}
                    src={userAvatarPicSrc}
                />
            </HStack>
        );
    }
);

Navbar.displayName = "Navbar";

export default Navbar;
