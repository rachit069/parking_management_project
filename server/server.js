const express = require("express");
const connectDb = require("./config/dbConnection");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 5000
const cors = require("cors");
dotenv.config();
connectDb();


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("working");
});

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});