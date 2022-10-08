import { instanceToPlain } from "class-transformer";
import {
    collection,
    deleteDoc,
    doc,
    DocumentReference,
    DocumentSnapshot,
    Firestore,
    FirestoreDataConverter,
    getDoc,
    getDocs,
    QuerySnapshot,
    setDoc,
} from "firebase/firestore";
import { FirebaseStorage, ref, uploadBytes } from "firebase/storage";
import { Quizz } from ".";
import { getUniqueStorageName } from "../../../utils/firebase/storage";
import { getGamesStorageFolderRef } from "../utils";

export const quizzConverter: FirestoreDataConverter<Quizz> = {
    fromFirestore(snapshot) {
        const data = snapshot.data() as Quizz;

        return new Quizz(data.title, data.description, data.body, data.gameRecords);
    },
    toFirestore(modelObject) {
        const gameRecords = modelObject.gameRecords
            ? (modelObject.gameRecords as Quizz["gameRecords"])?.map(rec =>
                  instanceToPlain(rec)
              )
            : null;

        return {
            ...instanceToPlain(modelObject),
            gameRecords,
        } as Quizz;
    },
};

export const getQuizzCollection = (db: Firestore) => {
    const colRef = collection(db, "/quizzes").withConverter(quizzConverter);

    return colRef;
};

interface ISaveQuizz {
    (db: Firestore, data: Quizz): Promise<DocumentReference<Quizz>>;
    (db: Firestore, data: Quizz, uid?: string): Promise<DocumentReference<Quizz>>;
}

export const saveQuizz: ISaveQuizz = async (db, data, uid?) => {
    const colRef = getQuizzCollection(db);

    const quizzRef = typeof uid === "string" && uid ? doc(colRef, uid) : doc(colRef);

    await setDoc(quizzRef, data);

    return quizzRef;
};

export const getQuizz = async (
    db: Firestore,
    uid: string
): Promise<DocumentSnapshot<Quizz>> => {
    return await getDoc(doc(getQuizzCollection(db), uid));
};

export const getQuizzes = async (db: Firestore): Promise<QuerySnapshot<Quizz>> => {
    const colRef = getQuizzCollection(db);

    return await getDocs(colRef);
};

export const deleteQuizz = async (db: Firestore, uid: string) => {
    const colRef = getQuizzCollection(db);

    await deleteDoc(doc(colRef, uid));
};

export const getQuizzStorageFolderRef = (
    storage: FirebaseStorage,
    quizzId: string
) => {
    return ref(getGamesStorageFolderRef(storage), quizzId);
};

export const saveQuizzMedia = async (
    storage: FirebaseStorage,
    quizzId: string,
    data: File,
    name = getUniqueStorageName(data.name)
) => {
    const mediaRef = ref(getQuizzStorageFolderRef(storage, quizzId), name);

    return await uploadBytes(mediaRef, data);
};
