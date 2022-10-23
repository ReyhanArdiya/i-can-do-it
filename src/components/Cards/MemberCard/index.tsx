import { HStack, Image, Text } from "@chakra-ui/react";
import { Member } from "../../../models/member";
import BaseCard from "../BaseCard";

export interface MemberCardProps extends Member {}

const MemberCard = ({ name, picUrl, quote, socials }: MemberCardProps) => {
    return (
        <BaseCard
            align="start"
            minW="60"
        >
            <Image
                alt={name}
                src={picUrl}
                rounded="base"
                maxH="7.5em"
                minW="full"
                objectFit="cover"
            />

            <Text
                as="h4"
                textStyle="h3"
            >
                {name}
            </Text>
            <Text
                as="blockquote"
                fontStyle="italic"
            >
                &ldquo;{quote}&rdquo;
            </Text>

            <HStack
                as="footer"
                alignSelf="end"
            >
                {socials.instagram && (
                    <svg
                        cursor="pointer"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                            fill="#D96D4A"
                        />
                        <path
                            d="M13.4375 2.1875H6.5625C5.40218 2.1875 4.28938 2.64844 3.46891 3.46891C2.64844 4.28938 2.1875 5.40218 2.1875 6.5625V13.4375C2.1875 14.5978 2.64844 15.7106 3.46891 16.5311C4.28938 17.3516 5.40218 17.8125 6.5625 17.8125H13.4375C14.5978 17.8125 15.7106 17.3516 16.5311 16.5311C17.3516 15.7106 17.8125 14.5978 17.8125 13.4375V6.5625C17.8125 5.40218 17.3516 4.28938 16.5311 3.46891C15.7106 2.64844 14.5978 2.1875 13.4375 2.1875ZM10 13.75C9.25832 13.75 8.5333 13.5301 7.91661 13.118C7.29993 12.706 6.81928 12.1203 6.53545 11.4351C6.25162 10.7498 6.17736 9.99584 6.32206 9.26841C6.46675 8.54098 6.8239 7.8728 7.34835 7.34835C7.8728 6.8239 8.54098 6.46675 9.26841 6.32206C9.99584 6.17736 10.7498 6.25162 11.4351 6.53545C12.1203 6.81928 12.706 7.29993 13.118 7.91661C13.5301 8.5333 13.75 9.25832 13.75 10C13.75 10.9946 13.3549 11.9484 12.6517 12.6517C11.9484 13.3549 10.9946 13.75 10 13.75ZM14.0625 6.875C13.8771 6.875 13.6958 6.82002 13.5417 6.717C13.3875 6.61399 13.2673 6.46757 13.1964 6.29627C13.1254 6.12496 13.1068 5.93646 13.143 5.7546C13.1792 5.57275 13.2685 5.4057 13.3996 5.27459C13.5307 5.14348 13.6977 5.05419 13.8796 5.01801C14.0615 4.98184 14.25 5.00041 14.4213 5.07136C14.5926 5.14232 14.739 5.26248 14.842 5.41665C14.945 5.57082 15 5.75208 15 5.9375C15 6.18614 14.9012 6.4246 14.7254 6.60041C14.5496 6.77623 14.3111 6.875 14.0625 6.875Z"
                            fill="#D96D4A"
                        />
                    </svg>
                )}

                {socials.email && (
                    <svg
                        cursor="pointer"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.5625 3.125H3.4375C2.85753 3.12562 2.30149 3.35629 1.89139 3.76639C1.48129 4.17649 1.25062 4.73253 1.25 5.3125V14.6875C1.25062 15.2675 1.48129 15.8235 1.89139 16.2336C2.30149 16.6437 2.85753 16.8744 3.4375 16.875H16.5625C17.1425 16.8744 17.6985 16.6437 18.1086 16.2336C18.5187 15.8235 18.7494 15.2675 18.75 14.6875V5.3125C18.7494 4.73253 18.5187 4.17649 18.1086 3.76639C17.6985 3.35629 17.1425 3.12562 16.5625 3.125ZM16.0086 6.74336L10.3836 11.1184C10.2739 11.2036 10.1389 11.2499 10 11.2499C9.86107 11.2499 9.72609 11.2036 9.61641 11.1184L3.99141 6.74336C3.92532 6.69345 3.86981 6.63091 3.8281 6.55936C3.78639 6.48781 3.75932 6.40869 3.74846 6.32659C3.73759 6.24449 3.74315 6.16104 3.76482 6.08111C3.78648 6.00118 3.82381 5.92635 3.87465 5.86097C3.92548 5.79559 3.9888 5.74096 4.06093 5.70027C4.13306 5.65957 4.21255 5.63362 4.2948 5.62391C4.37704 5.6142 4.4604 5.62094 4.54002 5.64372C4.61964 5.66651 4.69394 5.70489 4.75859 5.75664L10 9.8332L15.2414 5.75664C15.3725 5.65766 15.5372 5.61425 15.7 5.6358C15.8629 5.65734 16.0107 5.74211 16.1115 5.87177C16.2123 6.00142 16.258 6.16555 16.2387 6.32866C16.2195 6.49176 16.1368 6.64073 16.0086 6.74336Z"
                            fill="#3A7FC5"
                        />
                    </svg>
                )}
            </HStack>
        </BaseCard>
    );
};

export default MemberCard;
