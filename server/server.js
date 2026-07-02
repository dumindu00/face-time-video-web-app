require("dotenv").config()
const express = require("express")
const cors = require("cors")
const userRoutes = require("./routes/userRoutes");
const http = require("http")
const { Server } = require("socket.io");

const app = express()

const server = http.createServer(app)


const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})



app.use(cors())
app.use(express.json())

app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
    res.send("Face-Time Server Running")
})


io.on("connection", (socket) => {
        console.log("New User Connected")

        socket.on("disconnected", () => {
            console.log("User Disconnected")
        })
    })

const PORT = process.env.PORT || 5000;

server.listen(5000, () => {
    console.log(`Server running on ${PORT}`);
})