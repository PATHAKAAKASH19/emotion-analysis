import express from "express"
import cors from "cors"
import dotenv from "dotenv"


const app = express()
dotenv.config()

app.use(cors({
    origin:[`${process.env.FRONTEND_URL}`, "http://localhost:5173", "http://192.168.0.104:5173/"],
    methods:["POST", "GET"],
    allowedHeaders: ['Content-Type'],
}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

function analyzeEmotion(text) {

  const emotions = {
    'happy': 0.1,
    'sadness': 0.1,
    'anger': 0.1,
    'fear': 0.1,
    'surprise': 0.1,
    'joy': 0.1,
    'love': 0.1,
    'confusion': 0.1,
    'excitement': 0.1,
    'nervousness': 0.1
  };
  
  const textLower = text.toLowerCase();
  
  if (textLower.includes('happy') || textLower.includes('joy') || textLower.includes('excited')) {
    emotions['happy'] += 0.3;
    emotions['joy'] += 0.3;
    emotions['excitement'] += 0.2;
  }
  
  if (textLower.includes('sad') || textLower.includes('depressed') || textLower.includes('upset')) {
    emotions['sadness'] += 0.5;
  }

  for (const emotion in emotions) {
    emotions[emotion] += Math.random() * 0.2 - 0.1;
    emotions[emotion] = Math.max(0.01, Math.min(0.99, emotions[emotion]));
  }
  
  const total = Object.values(emotions).reduce((sum, val) => sum + val, 0);
  const normalized = {};
  for (const emotion in emotions) {
    normalized[emotion] = emotions[emotion] / total;
  }
  
  return Object.entries(normalized)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {});
}



app.post("/", (req, res) => {
   const {text} = req.body
   console.log(text)

  if (!text) {
    return res.status(400).json({ error: 'No text provided' });
   }

   
   setTimeout(() => {
    res.json({
      status: 'success',
      emotions: analyzeEmotion(text)
    });
  }, 800);
   
})

app.listen(3000,() => {
    console.log("server is running")
})