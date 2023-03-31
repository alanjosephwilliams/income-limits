require('dotenv').config();
const express = require('express');
const app = express();
const incomeLimitsByStateRouter = require("./routes/incomeLimitsByState");

// ... other configurations and middleware

app.use("/api/state-income-limits", incomeLimitsByStateRouter);

// Custom error handler
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).json({ message: "Internal server error" });
  });
  

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
