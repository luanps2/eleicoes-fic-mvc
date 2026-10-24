import { Router } from 'express';
import VoteController from '../controller/voteController.js';

const voteRouter = Router();

voteRouter.get('/', VoteController.showVotes);
voteRouter.post('/', VoteController.addVote);

export default voteRouter;