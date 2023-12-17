require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
app.use(express.json());


connectDB();

app.get('/', (req, res) => {
    res.send('Hello, this is running');
});
app.use('/user', userRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
