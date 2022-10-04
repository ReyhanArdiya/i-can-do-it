import { initializeTestEnvironment } from "@firebase/rules-unit-testing";

export const getFirebaseRulesTestEnv = async () =>
    await initializeTestEnvironment({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_PROJECTID,
        hub: {
            host: "localhost",
            port: 4400,
        },
    });
