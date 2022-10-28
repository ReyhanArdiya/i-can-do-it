import { Author, HasAuthor } from "../types/author";
import { WasCreated } from "../types/time";

export default class ArticleComment implements HasAuthor, WasCreated {
    constructor(public author: Author, public created: Date, public body: string) {}
}
