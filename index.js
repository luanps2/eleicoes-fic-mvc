import express from 'express';
import publicRoutes from './routes/publicRoutes.js';
import candidateRoutes from './routes/candidateRoutes.js';
import votesRoutes from './routes/votesRoutes.js';

const app = express();

app.use('/', publicRoutes);
app.use('/candidates', candidateRoutes);
// app.use('/votes', votesRoutes);

export default app;