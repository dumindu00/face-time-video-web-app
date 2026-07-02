require("dotenv").config()
const express = require("express")
const cors = require("cors")
const userRoutes = require("./routes/userRoutes");

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
    res.send("Face-Time Server Running")
})

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log("Server Started")
})