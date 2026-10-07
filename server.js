import express from "express";
import HttpError from "./middleware/httpError.js";
import dotenv from "dotenv";
import router from "./routes/Book.routes.js";
import connectDB from "./config/db.js";

const app = express();

dotenv.config({ path: "./.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books", router);

app.get("/", (req, res) => {
  res.json("hello from server");
});

app.use((req, res, next) => {
  return next(new HttpError("requested route not found", 404));
});

app.use((error, req, res, next) => {
  if (res.headersSent) 
  {
    return next(error);
  }

  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "internal server error" });
});

const port = 5001;

async function startServer() {
  try {
    const connect = await connectDB();
    if (!connect) {
      throw new Error("failed to connect db");
    }
    app.listen(port, (err) => {
      if (err) {
        return console.log(err.message);
      }
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

startServer();
