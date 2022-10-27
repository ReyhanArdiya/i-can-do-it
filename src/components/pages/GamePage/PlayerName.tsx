import { Button, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ArrowRight } from "phosphor-react";
import { MouseEventHandler, useContext, useState } from "react";
import QuizzContext from "../../../context/quizz-context";
import { ChubbsConfused } from "../../Chubbs";
import CircularIcon from "../../CircularIcon";
import FormControl from "../../FormControl";

const PlayerNamePage = ({ quizzId }: { quizzId: string }) => {
    const [playername, setPlayername] = useState("");
    const { playerNameChanged } = useContext(QuizzContext);
    const router = useRouter();

    const startGame = () => {
        playerNameChanged(playername);
        router.push(`quizzes/${quizzId}`);
    };

    return (
        <VStack
            px="8"
            spacing={12}
            w="full"
            bg="blue.100"
            align="center"
            justify="center"
            maxW="400px"
            flexGrow="1"
        >
            <VStack
                spacing="2"
                w="full"
            >
                <ChubbsConfused />
                <Text
                    as="h1"
                    textStyle="h1"
                >
                    Kenalan dulu yuk!
                </Text>
                <Text
                    w="full"
                    textAlign="left"
                >
                    Siapa nih namamu?
                </Text>
                <FormControl
                    inputProps={{
                        value: playername,
                        placeholder: "Nama",
                        onChange({ target }) {
                            setPlayername(target.value);
                        },
                    }}
                />
            </VStack>

            <Button
                onClick={startGame}
                rightIcon={
                    <CircularIcon
                        p="1"
                        icon={() => (
                            <ArrowRight
                                weight="bold"
                                color="black"
                            />
                        )}
                    />
                }
            >
                Mulai Bermain
            </Button>
        </VStack>
    );
};

export default PlayerNamePage;
