import { HasAuthor } from "./types/author";
import { WasCreated } from "./types/time";

export interface AudibleText {
    text: string;
    audioSrc: string;
}

export interface ArticleBodyImg {
    src: string;
    alt: string;
    title: string;
}

export interface ArticleComment extends HasAuthor, WasCreated {
    body: string;
}

export interface Article extends HasAuthor, WasCreated {
    body: Array<AudibleText | ArticleBodyImg>;
    // TODO make this sub-collection
    comments: ArticleComment[];
    headerVideoUrl?: string;
    title: string;
}
