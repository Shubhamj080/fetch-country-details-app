const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3001;

app.use(express.json());
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.get('/api/country', async (req, res) => {
  const country = req.query.name;
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (response.ok) {
      const data = await response.json();
      res.json(data[0]);
    } else {
      res.status(404).json({ error: 'Country not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});