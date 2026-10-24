import express from 'express';
import publicRoutes from './src/routes/publicRoutes.js';
import candidateRoutes from './src/routes/candidateRoutes.js';
import voteRoutes from './src/routes/voteRoutes.js';

const app = express();

app.use(express.json());

app.use('/', publicRoutes);
app.use('/candidates', candidateRoutes);
app.use('/votes', voteRoutes);
// app.use('/votes', votesRoutes);

export default app;