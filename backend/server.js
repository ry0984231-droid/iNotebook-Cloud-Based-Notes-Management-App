const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectToMongo = require("./db");
const userRoute = require("./routes/users");
const noteRoute = require("./routes/notes")
const app = express();
const PORT = Number.parseInt(process.env.PORT, 10) || 5000;
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.use("/api/user", userRoute);
app.use("/api/note", noteRoute);
app.listen(PORT, () => console.log(`API server listening at http://localhost:${PORT}`));

connectToMongo(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((error) => console.error("Failed to connect to MongoDB:", error.message));
