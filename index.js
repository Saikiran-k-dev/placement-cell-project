import express from "express";
import dotenv from "dotenv";
import path from "path";
import ejsLayout from "express-ejs-layouts";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors"
import bodyParser from "body-parser";

import userRouter from "./src/features/users/routes/users.routes.js";
import studentRouter from "./src/features/student/routes/student.routes.js";
import interviewRouter from "./src/features/interview/routes/interview.routes.js";

dotenv.config();

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(ejsLayout);
app.use(cookieParser());
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));


app.use("/api/placementcell/users", userRouter);
app.use("/api/placementcell/students", studentRouter)
app.use("/api/placementcell/interviews",interviewRouter)

// Serve static files with the correct MIME types
app.use(express.static(path.join(path.resolve(), "src", "views")))
app.get("/", (req, res) => {
  res.status(400).send("There's no such API");
});

export default app;
