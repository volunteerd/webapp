import express, { Express, Request, Response, NextFunction } from "express";
const userRouter = require("./routes/userRouter")
// const projectsRouter = require("./routes/projectsRouter");

const app: Express = express();
const port = 8080;

app.use(express.json());

app.use("/user", userRouter);
// app.use("/projects", projectsRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("❤️ Specify an endpoint, dummy!");
  });

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured'},
  }
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
  