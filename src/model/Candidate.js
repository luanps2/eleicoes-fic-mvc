export default class Candidates {

    constructor() {
        this.id;
        this.name;
        this.number;
        this.votes;
    }

    addCandidate(id, name, number) {
        this.id = id++;
        this.name = name;
        this.number = number;
        this.votes = 0;
    }

    showCandidates() {
        return `Candidato: ${this.name} 
    Número: ${this.number} 
    Votos: ${this.votes}`;
    }

    alterCandidate(id, name, number) {
        this.name = name;
        this.number = number;
    }

    removeCandidate(id) {
        this.name = null;
        this.number = null;
        this.votes = null;
    }


}
