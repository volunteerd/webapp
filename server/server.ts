import express, { Express, Request, Response } from "express";
const userRouter = require("./routes/userRouter");
const projectsRouter = require("./routes/projectsRouter");

const app: Express = express();
const port = 8080;

app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  