import { Heading, Text, VStack } from "@chakra-ui/react";

export interface ICanDoItLogoProps {
    noText?: boolean;
}

const ICanDoItLogo = ({ noText = false }: ICanDoItLogoProps) => {
    return (
        <VStack
            spacing={0}
            justify="center"
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <mask
                    id="path-1-inside-1_20_43"
                    fill="white"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.7058 4.29396L20.6456 11.3542C20.8233 11.5319 20.9286 11.7694 20.9409 12.0205C20.9532 12.2715 20.8717 12.5182 20.7123 12.7125L8.16228 25.25C10.1498 26.325 12.1748 26.9 14.1623 26.975H14.5748C16.5947 26.9837 18.5771 26.4297 20.2998 25.375C25.6873 22.1125 28.5623 14.475 27.9998 4.9375C27.9824 4.69462 27.878 4.46615 27.7058 4.29396Z"
                    />
                    <path d="M27.7058 4.29396C27.5336 4.12178 27.3052 4.01741 27.0623 4C17.5248 3.4375 9.88728 6.3125 6.62478 11.7C5.49555 13.5423 4.93869 15.6784 5.02478 17.8375C5.09978 19.825 5.67478 21.85 6.74978 23.8375L19.2873 11.2875C19.4816 11.128 19.7282 11.0465 19.9793 11.0589C20.2303 11.0712 20.4678 11.1765 20.6456 11.3542L27.7058 4.29396Z" />
                </mask>
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.7058 4.29396L20.6456 11.3542C20.8233 11.5319 20.9286 11.7694 20.9409 12.0205C20.9532 12.2715 20.8717 12.5182 20.7123 12.7125L8.16228 25.25C10.1498 26.325 12.1748 26.9 14.1623 26.975H14.5748C16.5947 26.9837 18.5771 26.4297 20.2998 25.375C25.6873 22.1125 28.5623 14.475 27.9998 4.9375C27.9824 4.69462 27.878 4.46615 27.7058 4.29396Z"
                    fill="#F2C03D"
                />
                <path
                    d="M27.7058 4.29396C27.5336 4.12178 27.3052 4.01741 27.0623 4C17.5248 3.4375 9.88728 6.3125 6.62478 11.7C5.49555 13.5423 4.93869 15.6784 5.02478 17.8375C5.09978 19.825 5.67478 21.85 6.74978 23.8375L19.2873 11.2875C19.4816 11.128 19.7282 11.0465 19.9793 11.0589C20.2303 11.0712 20.4678 11.1765 20.6456 11.3542L27.7058 4.29396Z"
                    fill="#94C5F2"
                />
                <path
                    d="M20.9991 11.7078L28.0594 4.64752L27.3523 3.94041L20.292 11.0007L20.9991 11.7078ZM27.9998 4.9375L28.9981 4.87862L28.9972 4.86599L27.9998 4.9375ZM27.0623 4L27.1338 3.00248L27.1212 3.00173L27.0623 4ZM6.62478 11.7L7.47738 12.2226L7.48016 12.218L6.62478 11.7ZM5.02478 17.8375L6.02407 17.7998L6.02399 17.7977L5.02478 17.8375ZM6.74978 23.8375L5.8702 24.3132L6.5087 25.4937L7.45724 24.5443L6.74978 23.8375ZM19.2873 11.2875L18.6529 10.5145L18.6147 10.5458L18.5798 10.5807L19.2873 11.2875ZM20.7123 12.7125L21.419 13.42L21.454 13.3851L21.4853 13.3469L20.7123 12.7125ZM8.16228 25.25L7.45553 24.5425L6.50604 25.4911L7.68653 26.1296L8.16228 25.25ZM14.1623 26.975L14.1246 27.9743L14.1434 27.975H14.1623V26.975ZM14.5748 26.975L14.5791 25.975H14.5748V26.975ZM20.2998 25.375L19.7818 24.5196L19.7776 24.5221L20.2998 25.375ZM28.9972 4.86599C28.9626 4.38322 28.7552 3.9291 28.4129 3.58685L26.9987 5.00107C27.0008 5.0032 27.0021 5.00602 27.0023 5.00901L28.9972 4.86599ZM28.4129 3.58685C28.0707 3.24461 27.6166 3.03717 27.1338 3.00256L26.9908 4.99744C26.9938 4.99765 26.9966 4.99894 26.9987 5.00107L28.4129 3.58685ZM27.1212 3.00173C17.4244 2.42984 9.31314 5.33007 5.7694 11.182L7.48016 12.218C10.4614 7.29493 17.6251 4.44516 27.0034 4.99827L27.1212 3.00173ZM5.77219 11.1774C4.53949 13.1885 3.9316 15.5204 4.02557 17.8773L6.02399 17.7977C5.94579 15.8364 6.45162 13.8961 7.47737 12.2226L5.77219 11.1774ZM4.02549 17.8752C4.1069 20.0324 4.73049 22.2061 5.8702 24.3132L7.62936 23.3618C6.61907 21.4939 6.09266 19.6176 6.02407 17.7998L4.02549 17.8752ZM7.45724 24.5443L19.9947 11.9943L18.5798 10.5807L6.04232 23.1307L7.45724 24.5443ZM19.9217 12.0605C19.9241 12.0585 19.9271 12.0575 19.9302 12.0577L20.0283 10.0601C19.5293 10.0356 19.0391 10.1975 18.6529 10.5145L19.9217 12.0605ZM19.9302 12.0577C19.9333 12.0578 19.9363 12.0591 19.9385 12.0613L21.3527 10.6471C20.9994 10.2938 20.5274 10.0846 20.0283 10.0601L19.9302 12.0577ZM19.9385 12.0613C19.9407 12.0635 19.942 12.0664 19.9421 12.0695L21.9397 11.9714C21.9152 11.4724 21.706 11.0004 21.3527 10.6471L19.9385 12.0613ZM19.9421 12.0695C19.9423 12.0726 19.9413 12.0757 19.9393 12.0781L21.4853 13.3469C21.8022 12.9607 21.9642 12.4704 21.9397 11.9714L19.9421 12.0695ZM20.0055 12.005L7.45553 24.5425L8.86903 25.9575L21.419 13.42L20.0055 12.005ZM7.68653 26.1296C9.79366 27.2693 11.9674 27.8929 14.1246 27.9743L14.2 25.9757C12.3822 25.9071 10.5059 25.3807 8.63803 24.3704L7.68653 26.1296ZM14.1623 27.975H14.5748V25.975H14.1623V27.975ZM14.5705 27.975C16.7761 27.9845 18.9408 27.3795 20.8219 26.2279L19.7776 24.5221C18.2133 25.4798 16.4132 25.9829 14.5791 25.975L14.5705 27.975ZM20.8178 26.2304C26.6697 22.6866 29.5699 14.5753 28.998 4.87862L27.0015 4.99638C27.5546 14.3747 24.7048 21.5384 19.7818 24.5196L20.8178 26.2304Z"
                    fill="#111111"
                    mask="url(#path-1-inside-1_20_43)"
                />
                <path
                    d="M6.92395 24.6429L6.92389 24.6429L6.92691 24.6476C7.03649 24.8182 7.18154 24.9633 7.35218 25.0729L7.35201 25.0731L7.3628 25.0793L7.75527 25.3046L5.53687 27.5343C5.39252 27.6731 5.20005 27.7506 4.99977 27.7506C4.79963 27.7506 4.6073 27.6732 4.46299 27.5346C4.32276 27.3921 4.24414 27.2001 4.24414 27C4.24414 26.7993 4.32325 26.6067 4.4643 26.464L6.69238 24.2472C6.76652 24.3783 6.84305 24.5105 6.92395 24.6429Z"
                    fill="#E3957B"
                    stroke="#111111"
                    stroke-width="0.5"
                />
            </svg>

            {!noText && (
                <Text
                    textStyle="h1"
                    fontSize="medium"
                    lineHeight="1em"
                >
                    I Can Do it
                </Text>
            )}
        </VStack>
    );
};

export default ICanDoItLogo;
