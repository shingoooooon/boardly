import express from "express"
import dotenv from "dotenv"
// import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import projectRoutes from "./routes/projectRoute"
import taskRoutes from "./routes/taskRoute"
import searchRoute from "./routes/searchRoute"
import userRoute from "./routes/userRoute"
import teamRoute from "./routes/teamRoute"

dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// ROUTE
app.get("/", (req, res) => {
    res.send("This is home route");
});

app.use("/projects", projectRoutes)
app.use("/tasks", taskRoutes)
app.use("/search", searchRoute)
app.use("/users", userRoute)
app.use("/teams", teamRoute)

// SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})