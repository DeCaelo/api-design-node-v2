import express from 'express';
import setupMiddware from './middleware';
import { restRouter } from './api';
import { connect } from './db';
import { signin, protect } from './api/modules/auth';
// Declare an app from express
const app = express();

const apiRouter = express.Router();

// Middleware attach
setupMiddware(app);
connect();
// setup basic routing for index route

app.use('/signin', signin);

// mount the restRouter on /api path
app.use('/api', protect, restRouter);

// catch all
app.all('*', (req, res) => {
  res.json({ ok: true });
});

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(401).send('NOPE!');
// });

export default app;
