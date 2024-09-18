export class GameStatus {

    guesses: Array<Guess>

    constructor(guesses: Array<Guess>) {
        this.guesses = guesses;
    }
}

export class Guess {

    guess: string
    feedback: Feedback

    constructor(guess: string, feedback: Feedback) {
        this.guess = guess;
        this.feedback = feedback;
    }
}

export class Feedback {
    mates: number
    checks: number

    constructor(mates: number, checks: number) {
        this.mates = mates;
        this.checks = checks;
    }

    toString(): string {
        return `${this.mates}M ${this.checks}C`;
    }

    equals(other: Feedback): boolean {
        return other.mates === this.mates && other.checks === this.checks;
    }
}
