import express from 'express';
import connection from './database/db.js';
import indexRouter from './routes/index.js';
const app = express();
const port = process.env.PORT || 6000;

connection();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('How is the weather');
})
app.post('/weather',(req,res)=>{
    res.send("How is the weather in delhi");
})
app.use('/api',indexRouter);
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

export default app;