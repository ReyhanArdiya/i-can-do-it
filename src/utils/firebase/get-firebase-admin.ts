import { initializeApp, getApp } from "firebase-admin/app";

const getFirebaseAdmin = () => {
    try {
        return getApp();
    } catch (err) {
        return initializeApp();
    }
};

export const app = getFirebaseAdmin();
