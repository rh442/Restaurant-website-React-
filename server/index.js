import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Example API route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API working!' });
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Serve React in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve('src/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('src', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
