import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Path to store visitor count
const dataPath = path.join(__dirname, 'visitorCount.json');

// Initialize visitor count file if it doesn't exist
const initializeCount = () => {
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify({ count: 0 }), 'utf8');
  }
};

// Read visitor count
const getCount = () => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading count:', error);
    return { count: 0 };
  }
};

// Write visitor count
const setCount = (count) => {
  try {
    fs.writeFileSync(dataPath, JSON.stringify({ count }), 'utf8');
  } catch (error) {
    console.error('Error writing count:', error);
  }
};

// Initialize on startup
initializeCount();

// GET endpoint - Get current visitor count
app.get('/api/visitors', (req, res) => {
  try {
    const data = getCount();
    res.json({ count: data.count });
  } catch (error) {
    console.error('Error getting count:', error);
    res.status(500).json({ error: 'Failed to get visitor count' });
  }
});

// POST endpoint - Increment visitor count
app.post('/api/visitors/increment', (req, res) => {
  try {
    const data = getCount();
    const newCount = data.count + 1;
    setCount(newCount);
    res.json({ count: newCount, success: true });
  } catch (error) {
    console.error('Error incrementing count:', error);
    res.status(500).json({ error: 'Failed to increment visitor count' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Visitor counter server running on http://localhost:${PORT}`);
});

