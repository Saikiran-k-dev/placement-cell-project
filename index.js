import express from "express";
import dotenv from "dotenv";
import path from "path";
import ejsLayout from "express-ejs-layouts";
import session from "express-session";
import cookieParser from "cookie-parser";
import userRouter from "./src/users/routes/users.routes.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
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

// Serve static files with the correct MIME types
app.use(express.static(path.join(path.resolve(), "src", "views")))
app.get("/", (req, res) => {
  res.status(400).send("There's no such API");
});

export default app;
