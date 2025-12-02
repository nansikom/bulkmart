import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let requestCount = 0;

app.post("/reduce-stock", (req, res) => {
  requestCount++;
  console.log(`=== Request #${requestCount} to /reduce-stock ===`);
  console.log('Method:', req.method);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  console.log('Body type:', typeof req.body);
  
  res.json({ 
    success: true, 
    message: 'Test endpoint works',
    requestNumber: requestCount,
    receivedData: req.body 
  });
});

app.get("/", (req, res) => {
  res.send('Test server is running');
});

const PORT = 5001; // Different port
app.listen(PORT, () => {
  console.log(`✅ Test server running on http://localhost:${PORT}`);
  console.log(`Test with: curl -X POST http://localhost:${PORT}/reduce-stock -H "Content-Type: application/json" -d '[{"id":10,"quantity":1}]'`);
});