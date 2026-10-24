import Candidate from "../model/Candidate.js";
import store from "../model/store.js";

class CandidateController {

    constructor() {
        this.candidate = new Candidate();

        this.showCandidates = this.showCandidates.bind(this);
        this.addCandidate = this.addCandidate.bind(this);
        this.alterCandidate = this.alterCandidate.bind(this);
        this.removeCandidate = this.removeCandidate.bind(this);
    }

    showCandidates(req, res) {
        const candidates = store.candidates.map(candidate => ({
            ...candidate, // retiênias representa todas as propriedades do candidato 
            votes: store.votes.filter(
                vote => vote.candidateId === candidate.id
            ).length
        }));

        return res.json(candidates);
    }

    addCandidate(req, res) {
        const { name, number } = req.body;

        if (!name || !number) {
            return res.status(400).json({ error: "Informe nome e número." });
        }

        const candidate = new Candidate(
            store.nextCandidateId++,
            name,
            number
        );

        store.candidates.push(candidate);
        return res.status(201).json(candidate);
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