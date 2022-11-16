import { cert, initializeApp } from "firebase-admin/app";

const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

const getFirebaseAdmin = () => {
    return initializeApp({
        credential: cert(serviceAccount),
    });
};

export const app = getFirebaseAdmin();
