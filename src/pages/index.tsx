import { Box, Button, Center } from "@chakra-ui/react";
import {
    getBlob,
    getBytes,
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
    uploadString,
} from "firebase/storage";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { saveArticleMedia } from "../models/article/utils";
import { saveQuizzMedia } from "../models/game/quizz/utils";
import getFirebaseClient from "../utils/firebase/get-firebase-client";

const Home: NextPage = () => {
    const [state, setState] = useState("");

    return (
        <>
            <Button
                variant="solid"
                bg="teal.300"
                onClick={async () => {
                    const storage = getStorage(getFirebaseClient());

                    console.log(
                        await saveQuizzMedia(
                            storage,
                            "quizz1",
                            new File([""], "fake.jpg", {
                                type: "image/jpg",
                            })
                        )
                    );
                }}
            >
                Upload
            </Button>
            <Box
                as="a"
                download
                href={state}
            >
                Download!
            </Box>
        </>
    );
};

export default Home;
