import express from 'express';
import { Request, Response, NextFunction } from 'express';
import userControllers from '../controllers/userControllers';
const userRouter = express.Router();

// Volunteers
// volAuth = cookie check
userRouter.get("/volLogin", userControllers.volAuth, userControllers.volLogin)
userRouter.post("/volSignup", userControllers.volSignup, userControllers.volLogin)
userRouter.put('/volUpdate', userControllers.volAuth, userControllers.volUpdate)
userRouter.delete('/volDelete', userControllers.volAuth, userControllers.volDelete)


// NPOs
// npoAuth = cookie check
userRouter.get("/npoLogin", userControllers.npoAuth, userControllers.npoLogin)
userRouter.post("/npoSignup", userControllers.npoSignup)
userRouter.put('/npoUpdate', userControllers.npoAuth, userControllers.npoUpdate)
userRouter.delete('/npoDelete', userControllers.npoAuth, userControllers.npoDelete)