import { Router } from 'express';
import CandidateController from '../controller/candidateController.js';

const candidateRouter = Router();

candidateRouter.get('/', CandidateController.showCandidates);
candidateRouter.post('/', CandidateController.addCandidate);
candidateRouter.put('/', CandidateController.alterCandidate);
candidateRouter.delete('/', CandidateController.removeCandidate);

export default candidateRouter;