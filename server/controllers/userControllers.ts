import express from 'express';
import { Request, Response, NextFunction } from 'express';

const db = require('../model/model');

const userController = {
    volSignup: async (req: Request, res: Response, next: NextFunction) => {
      try {
        // Destructure form fields from req.body (firstName, lastName, companyName, bio, linkedinLink, githubLink, username, password)
        const { firstName, lastName, companyName, bio, linkedinLink, githubLink, username, password } = req.body;        
        // SQL query template
        const queryString = `INSERT INTO volunteer_user (firstName, lastName, companyName, bio, linkedinLink, githubLink, username, password) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`
        // Form fields to []
        const values = [firstName, lastName, companyName, bio, linkedinLink, githubLink, username, password];
        // Run query
        const result = await db.query(queryString, values);
        res.send(result);
        
      } catch (error) {
        console.error(error);
        next(error);
      }
    }

    // myFunc: async (req: Request, res: Response, next: NextFunction) {
    // try {
    //     const result = await ();
    //     res.send(result);
    // } catch (error) {
    //     console.error(error);
    //     next(error);
    // }
    // }
}

module.exports = userController;