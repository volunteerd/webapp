console.log('userRouter imported');

const express = require('express');
import { Request, Response, NextFunction } from 'express';
const userControllers = require('../controllers/userControllers');
const npoControllers = require('../controllers/npoControllers');

const userRouter = express.Router();

// Volunteers
// volAuth = cookie check
// userRouter.get("/volLogin", userControllers.volAuth, userControllers.volLogin)
// userRouter.post("/volSignup", userControllers.volSignup, userControllers.volLogin)
// userRouter.put('/volUpdate', userControllers.volAuth, userControllers.volUpdate)
// userRouter.delete('/volDelete', userControllers.volAuth, userControllers.volDelete)


// NPOs
// npoAuth = cookie check
// userRouter.get("/npoLogin", userControllers.npoAuth, userControllers.npoLogin)
// userRouter.get("/npoSignup",userControllers.test)
userRouter.post("/npoSignup", npoControllers.ein)
// userRouter.put('/npoUpdate', userControllers.npoAuth, userControllers.npoUpdate)
// userRouter.delete('/npoDelete', userControllers.npoAuth, userControllers.npoDelete)

module.exports = userRouter;