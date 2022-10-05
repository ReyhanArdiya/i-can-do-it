import { Game } from ".";

export interface QuizzScore {
    total: number;
    correct: number;
}

export class QuizzOption {
    constructor(public text: string, public isCorrect: boolean) {}
}

export class QuizzItem {
    constructor(
        public question: string,
        public options: [
            QuizzOption,
            QuizzOption,
            QuizzOption,
            QuizzOption,
            QuizzOption
        ]
    ) {}
}

export class Quizz extends Game<QuizzScore, QuizzItem[]> {}
