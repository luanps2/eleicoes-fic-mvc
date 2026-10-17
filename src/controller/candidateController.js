import Candidate from "../model/Candidate.js";

class CandidateController {

    constructor() {
        this.candidate = new Candidates();
    }

    showCandidates(req, res) {
        res.send(this.candidate.showCandidates());
    }

    addCandidate(req, res) {
        const { id, name, number } = req.body;
        this.candidate.addCandidate(id, name, number);
        res.send("Candidato adicionado com sucesso!");
    }

    alterCandidate(req, res) {
        const { id, name, number } = req.body;
        this.candidate.alterCandidate(id, name, number);
        res.send("Candidato alterado com sucesso!");
    }

    removeCandidate(req, res) {
        const { id } = req.body;
        this.candidate.removeCandidate(id);
        res.send("Candidato removido com sucesso!");
    }

}

export default new CandidateController();