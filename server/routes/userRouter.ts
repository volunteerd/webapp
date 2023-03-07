import express from 'express';
import { Request, Response, NextFunction } from 'express';
const userControllers = require('../controllers/userControllers');
const npoControllers = require('../controllers/npoControllers');
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
userRouter.post("/npoSignup",(req, res) => console.log('req.body', req.body))
// userRouter.post("/npoSignup",() => console.log('here'), npoControllers.ein, userControllers.npoSignup)
userRouter.put('/npoUpdate', userControllers.npoAuth, userControllers.npoUpdate)
userRouter.delete('/npoDelete', userControllers.npoAuth, userControllers.npoDelete)