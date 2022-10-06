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

                    const url = await getDownloadURL(
                        ref(
                            storage,
                            "articles/123/1. Contoh Transkrip EF (wwcr 1 dan 3).pdf"
                        )
                    );

                    const xhr = new XMLHttpRequest();
                    xhr.responseType = "blob";
                    xhr.onload = event => {
                        const blob = xhr.response;
                    };
                    xhr.open("GET", url);
                    xhr.send();

                    console.log(xhr);
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
