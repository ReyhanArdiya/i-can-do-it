import {
    collection,
    Firestore,
    FirestoreDataConverter,
    getDocs,
    orderBy,
    query,
} from "firebase/firestore";
import { Member } from ".";

export const membersConverter: FirestoreDataConverter<Member> = {
    fromFirestore(snapshot) {
        const data = snapshot.data();

        return new Member(data.name, data.picUrl, data.quote, data.socials);
    },
    toFirestore(modelObject) {
        return { ...modelObject };
    },
};

export const getMembersCollection = (db: Firestore) => {
    const colRef = collection(db, "/members").withConverter(membersConverter);

    return colRef;
};

export const getMembers = (db: Firestore) => {
    return getDocs(query(getMembersCollection(db), orderBy("name")));
};
