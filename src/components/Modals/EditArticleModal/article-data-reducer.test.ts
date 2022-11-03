import articleDataReducer, {
    EditArticleModalData,
    ImageInput,
    ParagraphInput,
} from "./article-data-reducer";

let initialState: EditArticleModalData;
beforeEach(() => {
    initialState = {
        author: {
            name: "user_test",
        },
        body: [],
        title: "Test",
    };
});

test("articleDataReducer returns a new state", () => {
    expect(articleDataReducer(initialState)).not.toBe(initialState);
});

test("TITLE_CHANGED changes the states title", () => {
    const newState = articleDataReducer(initialState, {
        type: "TITLE_CHANGED",
        payload: "Title Changed",
    });

    expect(newState.title).not.toBe(initialState.title);
});

test("AUTHOR_CHANGED changes the states author", () => {
    const newState = articleDataReducer(initialState, {
        type: "AUTHOR_CHANGED",
        payload: "New Author Name",
    });

    expect(newState.author.name).not.toBe(initialState.author.name);
});

test("PARAGRAPH_INPUT_ADDED adds a new ParagraphInput object", () => {
    const paragraphInput: ParagraphInput = new ParagraphInput(
        12345,
        "Believe me",
        new File(["Meow"], "Meow.mp4"),
        () => {}
    );

    const newState = articleDataReducer(initialState, {
        type: "PARAGRAPH_INPUT_ADDED",
        payload: paragraphInput,
    });

    expect(newState.body).toContainEqual(paragraphInput);
});

test("IMAGE_INPUT_ADDED adds a new ImageInput object", () => {
    const imageInput: ImageInput = new ImageInput(
        12345,
        new File(["Meow"], "Meow.jpg"),
        () => {}
    );

    const newState = articleDataReducer(initialState, {
        type: "IMAGE_INPUT_ADDED",
        payload: imageInput,
    });

    expect(newState.body).toContainEqual(imageInput);
});

test("PARAGRAPH_INPUT_DELETED deletes the correct ParagraphInput object", () => {
    const paragraphInput: ParagraphInput = new ParagraphInput(
        12345,
        "Believe me",
        new File(["Meow"], "Meow.mp4"),
        () => {}
    );

    const newState = articleDataReducer(initialState, {
        type: "PARAGRAPH_INPUT_ADDED",
        payload: paragraphInput,
    });

    expect(newState.body).toContainEqual(paragraphInput);
    expect(
        articleDataReducer(newState, {
            type: "PARAGRAPH_INPUT_DELETED",
            payload: paragraphInput.id,
        }).body
    ).not.toContainEqual(paragraphInput);
});

test("IMAGE_INPUT_DELETED deletes the correct ImageInput object", () => {
    const imageInput: ImageInput = new ImageInput(
        12345,
        new File(["Meow"], "Meow.jpg"),
        () => {}
    );

    const newState = articleDataReducer(initialState, {
        type: "IMAGE_INPUT_ADDED",
        payload: imageInput,
    });

    expect(newState.body).toContainEqual(imageInput);
    expect(
        articleDataReducer(newState, {
            type: "IMAGE_INPUT_DELETED",
            payload: imageInput.id,
        }).body
    ).not.toContainEqual(imageInput);
});
