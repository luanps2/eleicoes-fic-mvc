export default class Vote {
    constructor(id, candidateId) {
        this.id = id;
        this.candidateId = candidateId;
    }

    showVotes() {
        return `Voto: ${this.name} 
    Número: ${this.number}`;
    }

    addVote(id, candidate, number) {
        this.id = id;
        this.candidate = candidate;
        this.number = number;
    }

}