// const express = require('express');
// const app = express();
// const battersRoute = require('./batters'); // Adjust path based on your project structure

// // Use the batters route
// app.use('/batters', battersRoute);

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const express = require('express');
// import bowlers from './bowler';
const cors = require('cors'); // Import CORS middleware
const battersRoute = require('./batters'); // Import batters route module
// const bowlersRoute = require('./bowlers'); // Import bowlers route module
const app = express();
app.use(cors());
app.use('/batters', battersRoute);
// app.use('/bowler', bowlersRoute);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});