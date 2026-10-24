import Vote from "../model/Vote.js";
import store from "../model/store.js";

class VoteController {
    constructor() {
        this.vote = new Vote();
    }

    showVotes(req, res) {
        const votes = store.votes.map(vote => {
            const candidate = store.candidates.find(
                item => item.id === vote.candidateId
            );

            return {
                id: vote.id,
                candidateId: vote.candidateId,
                candidateName: candidate.name
            };
        });

        return res.json(votes);
    }

    addVote(req, res) {
        const { candidateId } = req.body;

        const candidate = store.candidates.find(
            item => item.id === Number(candidateId)
        );

        if (!candidate) {
            return res.status(404).json({ error: "Candidato não encontrado." });
        }

        const vote = new Vote(store.nextVoteId++, candidate.id);
        store.votes.push(vote);

        return res.status(201).json(vote);
    }


}

export default new VoteController();