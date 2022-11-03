import { MouseEventHandler } from "react";
import clone from "just-clone";

export interface ParagraphInput {
    text: string;
    audioFile: File;
    onDelete: MouseEventHandler;
    id: string | number;
}

export interface ImageInput {
    imageFile: File;
    onDelete: MouseEventHandler;
    id: string | number;
}

export interface EditArticleModalData {
    title: string;
    body: Array<ParagraphInput | ImageInput>;
    author: { name: string };
}

export type ArticleDataAction =
    | {
          type: "TITLE_CHANGED";
          payload: string;
      }
    | {
          type: "AUTHOR_CHANGED";
          // TODO add way to update profile pic later
          payload: EditArticleModalData["author"]["name"];
      }
    | {
          type: "PARAGRAPH_INPUT_ADDED";
          payload: ParagraphInput;
      }
    | {
          type: "PARAGRAPH_INPUT_DELETED";
          payload: string | number;
      }
    | {
          type: "IMAGE_INPUT_ADDED";
          payload: ImageInput;
      }
    | {
          type: "IMAGE_INPUT_DELETED";
          payload: string | number;
      };

const articleDataReducer = (
    state: EditArticleModalData,
    action?: ArticleDataAction
) => {
    const newState = clone(state);

    if (action) {
        switch (action.type) {
            case "TITLE_CHANGED":
                newState.title = action.payload;
                break;

            case "AUTHOR_CHANGED":
                newState.author.name = action.payload;
                break;

            case "PARAGRAPH_INPUT_ADDED":
            case "IMAGE_INPUT_ADDED":
                newState.body.push(action.payload);
                break;

            case "PARAGRAPH_INPUT_DELETED":
            case "IMAGE_INPUT_DELETED":
                const indexToDelete = newState.body.findIndex(
                    data => data.id === action.payload
                );
                newState.body.splice(indexToDelete, 1);
                break;
        }
    }

    return newState;
};

/*
Input added
Create object to store data based on body
Create an input
Send all of the data on submit handler, not change state onCHange
*/

export default articleDataReducer;