const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Career Platform API Running');
});

const apiRoutes = require('./routes/index');
app.use('/api', apiRoutes);

const { seedJobs } = require('./services/seed');

if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
      console.log('MongoDB Connected');
      await seedJobs();
    })
    .catch(err => console.log(err));
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
