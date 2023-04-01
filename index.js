require('dotenv').config();
const express = require('express');
const app = express();
const incomeLimitsByStateRouter = require("./routes/incomeLimitsByState");

// ... other configurations and middleware

app.use("/api/state-income-limits", incomeLimitsByStateRouter);

// Custom error handler
app.use((err, req, res, next) => {
  console.error('Error message:', err.message);
  console.error('Error stack trace:', err.stack);
  res.status(500).json({ message: "Internal server error" });
});

  

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
