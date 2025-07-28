const express = require("express");
const app = express();
const port = 3000;

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

// Register routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
