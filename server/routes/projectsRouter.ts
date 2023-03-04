import express from 'express';
import { Request, Response, NextFunction } from 'express';
const projectControllers = require('../controllers/projectControllers');
const projectsRouter = express.Router();

// Projects
projectsRouter.get("/getProjects", projectControllers.getProjects)
projectsRouter.get("/getProject/:id", projectControllers.getProject)
projectsRouter.post("/projectCreate", projectControllers.projectCreate)
projectsRouter.put('/projectUpdate', projectControllers.projectUpdate)
projectsRouter.delete('/projectDelete', projectControllers.projectDelete)