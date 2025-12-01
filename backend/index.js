/*import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/soccerRoutes';

const app = express();
app.use(express.json());
const PORT = 4000 ;

// mongo connection
mongoose.Promise = global.Promise;
///mongoose.connect('mongodb://localhost/soccerDB');

mongoose.connect('mongodb://localhost/soccerDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);  // Optionally exit if DB connection fails
  });


// body parser
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

// cors
app.use(cors());

// pass the routes to app
 routes(app);


app.get('/',(req,res) =>
    res.send( `our application is running on port ${PORT}`)
);

app.listen(PORT, () =>
console.log(`your soccer server is running on port ${PORT}`)
); */
/*import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/soccerRoutes';
import axios from 'axios'

const app = express();
const PORT = process.env.PORT || 4000; // Use environment variable for port

dotenv.config();

// MongoDB connection
//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected'))
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);  // Exit if DB connection fails
  });

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Pass the routes to app
routes(app);

app.get('/', (req, res) => 
  res.send(`Our application is running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your soccer server is running on port ${PORT}`)
); */

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/soccerRoutes';
import axios from 'axios';

// Load environment variables as early as possible
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000; // Use environment variable for port

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected'))
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);  // Exit if DB connection fails
  });

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Pass the routes to app
routes(app);

app.get('/', (req, res) => 
  res.send(`Our application is running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your soccer server is running on port ${PORT}`)
);

