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
    orderBy,
    query,
    QuerySnapshot,
    setDoc,
    Timestamp,
} from "firebase/firestore";
import { Article, ArticleComment } from ".";

export const articleConverter: FirestoreDataConverter<Article> = {
    fromFirestore(snapshot) {
        const data = snapshot.data();

        type CommentsWTimestamp = (Omit<ArticleComment, "created"> & {
            created: Timestamp;
        })[];

        const convertedComments = (data.comments as CommentsWTimestamp).map(
            comment => ({
                ...comment,
                created: comment.created.toDate(),
            })
        );

        return new Article(
            data.title,
            (data.created as Timestamp).toDate(),
            data.author,
            data.body,
            convertedComments,
            data.headerVideoUrl
        );
    },
    toFirestore(modelObject) {
        return {
            ...modelObject,
            headerVideoUrl: modelObject.headerVideoUrl || null,
        } as Article;
    },
};

export const getArticleCollection = (db: Firestore) => {
    const colRef = collection(db, "/articles").withConverter(articleConverter);

    return colRef;
};

interface ISaveArticle {
    (db: Firestore, data: Article): Promise<DocumentReference<Article>>;
    (db: Firestore, data: Article, uid?: string): Promise<
        DocumentReference<Article>
    >;
}

export const saveArticle: ISaveArticle = async (db, data, uid?) => {
    const colRef = getArticleCollection(db);

    const articleRef =
        typeof uid === "string" && uid ? doc(colRef, uid) : doc(colRef);

    await setDoc(articleRef, data);

    return articleRef;
};

// CMT You can you saveArticle for updating too
// export const updateArticle = async (db: Firestore, uid: string, data: Article) => {
//     const articleRef = doc(getArticleCollection(db), uid);

//     await setDoc(articleRef, data);

//     return articleRef;
// };

export const getArticle = async (
    db: Firestore,
    uid: string
): Promise<DocumentSnapshot<Article>> => {
    return await getDoc(doc(getArticleCollection(db), uid));
};

export const getArticles = async (
    db: Firestore
): Promise<QuerySnapshot<Article>> => {
    const colRef = getArticleCollection(db);

    return await getDocs(query(colRef, orderBy("created", "desc")));
};

export const deleteArticle = async (db: Firestore, uid: string) => {
    const colRef = getArticleCollection(db);

    await deleteDoc(doc(colRef, uid));
};
