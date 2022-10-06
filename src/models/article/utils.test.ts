import {
    RulesTestContext,
    RulesTestEnvironment,
} from "@firebase/rules-unit-testing";
import dayjs from "dayjs";
import { Firestore, getDoc } from "firebase/firestore";
import { Article } from ".";
import {
    cleanupFirebase,
    getFirebaseRulesTestEnv,
    mockDb,
} from "../../utills/tests/firebase-test-utils";
import { deleteArticle, getArticle, getArticles, saveArticle } from "./utils";

let rules: RulesTestEnvironment;
let user: RulesTestContext;
let db: Firestore;
let mockArticle: Article;

beforeEach(async () => {
    rules = await getFirebaseRulesTestEnv();
    user = rules.authenticatedContext("test");
    db = mockDb(user);
    mockArticle = new Article(
        "Mock Article",
        new Date(),
        {
            name: "You",
            picUrl: "feijfe.png",
        },
        [
            {
                src: "efe",
                alt: "fkoef",
                title: "fkijifj",
            },
        ],
        [
            {
                author: {
                    name: "Meo",
                    picUrl: "mfoek",
                },
                body: "Hello",
                created: new Date(),
            },
        ],
        "Meow!"
    );
});

afterEach(async () => await cleanupFirebase(rules));

test("saveArticle saves a new article", async () => {
    const savedArticleRef = await saveArticle(db, mockArticle);

    expect((await getDoc(savedArticleRef)).exists()).toBe(true);
});

test("saveArticle updates an article", async () => {
    const originalArticleRef = await saveArticle(db, mockArticle);

    const newArticle: Article = {
        ...mockArticle,
        author: { picUrl: "meow", name: "Updated" },
    };

    const newArticleData = (
        await getDoc(await saveArticle(db, newArticle, originalArticleRef.id))
    ).data() as Article;

    expect(newArticleData.author.name).toBe(newArticle.author.name);
});

test("getArticle gets an article by its uid", async () => {
    const savedArticleRef = await saveArticle(db, mockArticle);

    const fetchedArticle = (await getArticle(db, savedArticleRef.id)).data();

    expect(fetchedArticle).toEqual(mockArticle);
});

test("getArticles returns a list of article sorted by created", async () => {
    const now = dayjs();
    const articleOld: Article = {
        ...mockArticle,
        created: dayjs(now).subtract(1, "day").toDate(),
    };
    const articleNow = {
        ...mockArticle,
        created: now.toDate(),
    };
    const articleFuture = {
        ...mockArticle,
        created: dayjs(now).add(1, "day").toDate(),
    };

    await saveArticle(db, articleOld);
    await saveArticle(db, articleNow);
    await saveArticle(db, articleFuture);

    const newestToOldestArticles = (await getArticles(db)).docs;

    expect(newestToOldestArticles[0].data()).toEqual(articleFuture);
    expect(newestToOldestArticles[1].data()).toEqual(articleNow);
    expect(newestToOldestArticles[2].data()).toEqual(articleOld);
});

test("deleteArticle deletes an article by its uid", async () => {
    const savedArticleRef = await saveArticle(db, mockArticle);

    await deleteArticle(db, savedArticleRef.id);

    expect((await getDoc(savedArticleRef)).exists()).toBe(false);
});
