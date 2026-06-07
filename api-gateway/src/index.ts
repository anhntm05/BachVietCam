import express from 'express';
import multer from 'multer';
import { config } from './config/env';
import apiRouter from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

// Bat loi cua Multer (file qua lon, sai dinh dang) tra ve 400 cho ro rang
// thay vi de Express tra 500 chung chung.
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'Tep vuot qua gioi han 25MB' });
      }
      return res.status(400).json({ error: `Loi tai tep: ${err.message}` });
    }
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  }
);

app.listen(config.port, () => {
  console.log(`API Gateway dang chay tai cong ${config.port}`);
  console.log(`AI service: ${config.aiServiceUrl}`);
  console.log(`Shared storage: ${config.sharedStoragePath}`);
});

export default app;
