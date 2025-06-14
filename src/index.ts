import express, { Request, Response } from "express";
import { initializeDatabase } from "./config/database.config";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import userRoute from "./routes/user.route";
import taskRoute from "./routes/task.route";
import { errorMiddleware } from "./middleware/errorMiddleware";

config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
app.use("/user", userRoute);
app.use("/task", taskRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Good Morning");
});

app.use(errorMiddleware);

const startServer = async () => {
  try {
    initializeDatabase();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
